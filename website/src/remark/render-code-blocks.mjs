// @ts-nocheck

const visit = import('unist-util-visit');


/**
 * Turns a "```z3" code block into a code block and an output area
 */

// TODO: it now compiles and runs, but does not make any change!
export default function plugin (options) {
    const transformer = async (root) => {
        /** @type {import("unified").Transformer} */
        // TODO: "visit is not a function"
        visit(root, 'code', (node, index, parent) => {
            const lang = node.lang;
            const value = node.value;
            parent.children.splice(
                index,
                1,
                {
                    type: 'jsx',
                    value: `<MyCodeBlock
                        code="${value}"
                    />`
                }
            )
        });
    };
    return transformer;
}