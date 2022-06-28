
// const visit = import('unist-util-visit');
import visit from 'unist-util-visit';

/**
 * Turns a "```z3" code block into a code block and an output area
 */

export default function plugin(options) {
    // console.log({ options });
    const transformer = async (ast) => {
        /** @type {import("unified").Transformer} */

        console.log({ ast });
        visit(ast, 'root', (node) => {
            node.children.unshift(
                {
                    type: 'import',
                    value: "import Z3CodeBlock from '@site/src/components/TutorialComponents'"
                }
            )
        });

        visit(ast, 'code', (node, index, parent) => {
            const { value, lang } = node;

            if (lang !== 'z3') {
                return;
            }

            // console.log({ node, index, parent });

            parent.children.splice(
                index,
                1,
                {
                    type: 'jsx',
                    // TODO: encode the source into jsx tree
                    value: `<Z3CodeBlock
                        code="${value}"/>`
                }
            )
        });
    };
    return transformer;
}