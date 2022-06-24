// @ts-nocheck

const visit = import('unist-util-visit');


/**
 * Turns a "```z3" code block into a code block and an output area
 */

export default function plugin (options) {
    const transformer = async (ast) => {
        /** @type {import("unified").Transformer} */
        // TODO: "visit is not a function"
        visit(ast, 'root', (node, index, parent) => {
            parent.children.splice(
                index,
                1,
                {
                    type: 'import',
                    value: "import MyCodeBlock from '@site/src/components/TutorialComponents'"
                }
            )
        });
    };
    return transformer;
}