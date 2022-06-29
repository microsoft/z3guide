
import visit from 'unist-util-visit';
import InputProcessor from '@site/utils/InputProcessor'; // fails at build

/**
 * Turns a "```z3" code block into a code block and an output area
 */

// declare input processor here
const inputProcessor = new InputProcessor();
export default function plugin(options) {
    // console.log({ options });
    const transformer = async (ast) => {
        /** @type {import("unified").Transformer} */

        // console.log({ ast });
        visit(ast, 'root', (node) => {
            node.children.unshift(
                {
                    type: 'import',
                    value: "import Z3CodeBlock from '@site/src/components/TutorialComponents'"
                }
            )
        });

        visit(ast, 'code', async (node, index, parent) => {
            const { value, lang } = node;

            if (lang !== 'z3') {
                return;
            }

            const output = await inputProcessor.process(value);
            console.log(output);

            // console.log({ node, index, parent });

            const val = JSON.stringify({code: value});
            parent.children.splice(
                index,
                1,
                {
                    type: 'jsx',
                    // TODO: encode the source into jsx tree to avoid XSS?
                    value: `<Z3CodeBlock input={${JSON.stringify({code: value})}} />`
                }
            )
        });
    };
    return transformer;
}