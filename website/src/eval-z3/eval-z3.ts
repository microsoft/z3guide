import * as ts from 'typescript';
import type { init as initZ3 } from 'z3-solver';
// typecheck & strip types from a TypeScript file
// works on the web: all typescript's built-in type definition files are inlined
// so are the z3-solver type definition files

// esbuild will define this for us
declare let TS_LIBS: { [key: string]: string };

const MAIN = 'main.ts';

type Result = { success: true; result: string } | { success: false; message: string };
function compile(
  source: ts.SourceFile,
  fixupErrorLocations: (lc: { line: number; column: number }) => { line: number; column: number },
): Result {
  let libs = TS_LIBS;
  let options: ts.CompilerOptions = {
    module: ts.ModuleKind.None,
    lib: ['lib.es2021.d.ts'],
    target: ts.ScriptTarget.ES2021,
    strict: true,
  };
  // @ts-ignore https://github.com/microsoft/TypeScript/issues/38385
  let createdFiles: Record<string, string> = { __proto__: null };

  let host: ts.CompilerHost = {
    readFile: fileName => {
      // console.log('reading', fileName);
      if (fileName in libs) {
        return libs[fileName];
      }
      return undefined;
    },
    writeFile: (fileName, content) => {
      createdFiles[fileName] = content;
    },
    getSourceFile: (fileName, languageVersion) => {
      if (fileName === MAIN) {
        return source;
      }
      let sourceText = host.readFile(fileName);
      let result = sourceText !== undefined ? ts.createSourceFile(fileName, sourceText, languageVersion) : undefined;
      if (fileName.includes('main')) debugger;
      return result;
    },
    getDefaultLibFileName: () => 'lib.d.ts',
    getCurrentDirectory: () => '/',
    getDirectories: () => [],
    getCanonicalFileName: fileName => fileName,
    getNewLine: () => '\n',
    useCaseSensitiveFileNames: () => true,
    fileExists: fileName => {
      // TODO
      // console.log('checking', fileName);
      return false;
    },
    resolveModuleNames,
  };

  function resolveModuleNames(moduleNames: string[], containingFile: string): ts.ResolvedModule[] {
    // console.log('resolving', moduleNames, 'for', containingFile);
    return moduleNames.map(name => {
      if (name === 'z3-solver') {
        return {
          resolvedFileName: '/node_modules/z3-solver/build/browser.d.ts',
          isExternalLibraryImport: true,
        };
      } else if (containingFile.startsWith('/node_modules/z3-solver/build/')) {
        // this is only a small portion of TypeScript's resolution algorithm
        // but it's sufficient for the files in z3-solver
        let root = containingFile.split('/').slice(0, -1).join('/');
        let joined = root + '/' + name;
        joined = joined.replace(/(\/[^/]+\/\.\.\/)|(\/\.\/)/g, '/');
        for (let suffix of ['', '.d.ts', '/index.d.ts']) {
          let candidate = joined + suffix;
          if (candidate in libs) {
            return {
              resolvedFileName: candidate,
              isExternalLibraryImport: false,
            };
          }
        }
        throw new Error(`relative import of z3-solver internal file ${name} for ${containingFile} failed`);
      }
      throw new Error(`could not find module ${name}`);
    });
  }

  let program = ts.createProgram([MAIN], options, host);

  let emitResult = program.emit();
  let diagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics)
    .map(diagnostic => {
      if (diagnostic.file) {
        let { line, character: column } = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start!);
        ({ line, column } = fixupErrorLocations({ line, column }));
        let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
        return `${diagnostic.file.fileName} (${line + 1},${column + 1}): ${message}`;
      } else {
        return ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
      }
    });

  if (diagnostics.length > 0) {
    return { success: false, message: diagnostics.join('\n') };
  }
  if (emitResult.emitSkipped || !('main.js' in createdFiles)) {
    return { success: false, message: 'typechecking failed with unknown error' };
  }
  return { success: true, result: createdFiles['main.js'] };
}

// - takes a snippet like `let x = Z3.foo(); await Z3.check(x);`
// - puts it in a context where `Z3` is defined and `await` works
// - modifies the last expression to be a return statement, like `let x = Z3.foo(); return await Z3.check(x);`
// - typechecks the result
// - and strips types
// successful output looks like `"use strict"; module.exports = (async () => { ... })();`
export function compileZ3JS(src: string) {
  let imports = `
    import type { init as initT } from 'z3-solver';
    declare let init: typeof initT;
    declare let { Context }: Awaited<ReturnType<typeof init>>;
    declare let Z3: ReturnType<typeof Context<'main'>>;
  `;
  let wrapped = `
${imports}
export = (async () => {
${src}
})();
`;
  let offset = imports.split('\n').length + 2;
  function updateLineNums({ line, column }: { line: number; column: number }) {
    return { line: line - offset, column };
  }

  let sourceFile = ts.createSourceFile(MAIN, wrapped, ts.ScriptTarget.ES2021);
  if (sourceFile.statements.length !== 5) {
    // input is invalid, like it has `}(); (() => {` directly in the input
    throw new Error('failed to parse input: wrong number of statements');
  }
  let iife = sourceFile.statements[4] as ts.ExpressionStatement;
  if (
    !ts.isCallExpression(iife.expression) ||
    !ts.isParenthesizedExpression(iife.expression.expression) ||
    !ts.isArrowFunction(iife.expression.expression.expression)
  ) {
    // input is invalid, like it has `}(), () => {` directly in the input
    throw new Error('failed to parse input: last line is not call');
  }
  let arrow = iife.expression.expression.expression;
  if (!ts.isBlock(arrow.body)) {
    // I don't think this is actually possible for the given input but we might as well be thorough
    throw new Error('failed to parse input: arrow body is not block');
  }

  let bodyLen = arrow.body.statements.length;
  if (bodyLen > 0) {
    let last = arrow.body.statements[bodyLen - 1];
    if (ts.isExpressionStatement(last)) {
      // @ts-ignore mutate the AST is way easier than recreating it from scratch
      arrow.body.statements[bodyLen - 1] = ts.factory.createReturnStatement(last.expression);
    }
  }

  return compile(sourceFile, updateLineNums);
}

export async function evalZ3JS(Z3: Awaited<ReturnType<typeof initZ3>>, src: string): Promise<string> {
  let result = compileZ3JS(src);
  if (!result.success) {
    return Promise.reject(new Error(result.message));
  }
  // we need to `eval` a function so we can pass Z3 into it
  let wrapped = `
(function (Z3) {
  'use strict';
  let module = {};
  ${result.result}
  return module.exports;
})
  `;
  return await (0, eval)(wrapped)(Z3.Context('main'));
}