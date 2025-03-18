// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
import math from "remark-math";
import katex from "rehype-katex";

export default async function createConfig() {
    const repo = process.env.GITHUB_REPOSITORY;
    const sha = process.env.GITHUB_SHA;
    const releaseTag = process.env.RELEASE_VERSION;

    let linkToCommit = "";
    if (repo && sha) {
        linkToCommit = `<a href=https://github.com/${repo}/commit/${sha} target="_blank" rel="noopener noreferrer">${sha.slice(
            0,
            8
        )}</a> | `;
    }

    let linkToRelease = "";
    if (repo && releaseTag) {
        linkToRelease = `<a href=https://github.com/${repo}/releases/tag/${releaseTag} target="_blank" rel="noopener noreferrer">version: ${releaseTag}</a> | `;
    }

    const languageConfig = await (
        await import("./language.config.js")
    ).default();

    let langVerInfo = "";
    let allLangs = new Set();
    for (const lang of languageConfig.languages) {
        if (lang.buildConfig && lang.buildConfig.npmPackage) {
            const pkg = lang.buildConfig.npmPackage;
            const ver = lang.buildConfig.langVersion;
            if (!ver) {
                throw new Error(`buggy code: no langVersion for ${pkg}`);
            }

            if (!allLangs.has(pkg)) {
                allLangs.add(pkg);
                langVerInfo += `<a href=https://www.npmjs.com/package/${pkg}/v/${ver} target="_blank" rel="noopener noreferrer">${pkg} ${ver}</a> | `;
            }
        }
    }

    /** @type {import('@docusaurus/types').Config} */
    // where information such as course title, description etc. are configured
    const config = {
        title: "Online Z3 Guide",
        tagline: "",
        url: "https://microsoft.github.io/",
        baseUrl: "/z3guide/",
        staticDirectories: ["static"],
        favicon: "/img/favicon.ico",
        onBrokenLinks: "ignore",
        onBrokenMarkdownLinks: "warn",

        // GitHub pages deployment config.
        // If you aren't using GitHub pages, you don't need these.
        organizationName: "microsoft", // Usually your GitHub org/user name.
        projectName: "z3guide", // Usually your repo name.
        deploymentBranch: "gh-pages", // name of the deployment branch

        // Even if you don't use internalization, you can use this field to set useful
        // metadata like html lang. For example, if your site is Chinese, you may want
        // to replace "en" with "zh-Hans".
        i18n: {
            defaultLocale: "en",
            locales: ["en"],
        },

        plugins: [
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "programming",
                    path: "docs-programming",
                    routeBasePath: "programming",
                    sidebarPath: require.resolve(
                        "./sidebars/programmingSidebars.js"
                    ),
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    editUrl:
                        "https://github.com/microsoft/z3guide/tree/main/website",
                    // ... other options for the docs, just as in `presets -> docs`
                },
            ],
            [
                "@docusaurus/plugin-content-docs",
                {
                    id: "playground",
                    path: "docs-playground",
                    routeBasePath: "playground",
                    sidebarPath: require.resolve(
                        "./sidebars/playgroundSidebars.js"
                    ),
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    editUrl:
                        "https://github.com/microsoft/z3guide/tree/main/website",
                    // ... other options for the docs, just as in `presets -> docs`
                },
            ],
            // [NEW DOCS] more docs plugins here
            // Example:
            // [
            //   '@docusaurus/plugin-content-docs',
            //   {
            //     id: 'api',
            //     path: 'docs-api',
            //     routeBasePath: 'api',
            //     sidebarPath: require.resolve('./sidebars/apiSidebars.js'),
            //     remarkPlugins: [math],
            //     rehypePlugins: [katex],
            //     editUrl:
            //         'https://github.com/microsoft/z3guide/tree/main/website',
            //   },
            // ],

            // non-docs plugins here
            "./plugins/add-z3-files",
            "./plugins/more-webpack-config",
        ],

        presets: [
            [
                "@docusaurus/preset-classic",
                // /** @type {import('@docusaurus/preset-classic').Options} */
                {
                    docs: {
                        remarkPlugins: [math],
                        rehypePlugins: [katex],
                        sidebarPath: require.resolve(
                            "./sidebars/smtlibSidebars.js"
                        ),
                        path: "docs-smtlib",
                        // Please change this to your repo.
                        // Remove this to remove the "edit this page" links.
                        editUrl:
                            "https://github.com/microsoft/z3guide/tree/main/website",
                    },
                    theme: {
                        customCss: require.resolve("./src/css/custom.css"),
                    },
                },
            ],
        ],

        scripts: [],

        stylesheets: [
            {
                href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
                type: "text/css",
                integrity:
                    "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
                crossorigin: "anonymous",
            },
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                algolia: {
                    appId: "WELUFTGVJI",

                    apiKey: "c3af15ea7fe30d3871d5401119c01efa",

                    indexName: "z3guide",

                    // Optional: see doc section below
                    contextualSearch: true,

                    // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                    externalUrlRegex: "external\\.com|domain\\.com",

                    // Optional: Algolia search parameters
                    searchParameters: {},

                    // Optional: path for search page that enabled by default (`false` to disable it)
                    searchPagePath: "search",

                    //... other Algolia params
                },
                navbar: {
                    title: "Z3 Guide",
                    items: [
                        {
                            type: "doc",
                            docId: "logic/intro",
                            position: "left",
                            label: "SMTLIB Tutorial",
                        },
                        // link to programming docs
                        {
                            to: "/programming/Z3 JavaScript Examples",
                            label: "Programming Z3",
                            position: "left",
                            activeBaseRegex: `/programming/`,
                        },
                        // link to playground
                        {
                            to: "/playground/Freeform Editing",
                            position: "left",
                            label: "Playground",
                            activeBaseRegex: `/playground/`,
                        },
                        // link to the github repo of this site
                        {
                            href: "https://github.com/microsoft/z3guide",
                            label: "GitHub",
                            position: "right",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "More Z3",
                            items: [
                                {
                                    label: "Programming Z3 in Python",
                                    href: "https://z3prover.github.io/papers/programmingz3.html",
                                },
                                {
                                    label: "Z3 on GitHub",
                                    href: "https://github.com/Z3Prover/z3",
                                },
                                {
                                    label: "Acknowledgments",
                                    to: "/Acknowledgments",
                                },
                            ],
                        },
                        {
                            title: "Z3 Material",
                            items: [
                                {
                                    label: "API",
                                    to: "https://z3prover.github.io/api/html/index.html",
                                },
                                {
                                    label: "Slides",
                                    href: "https://z3prover.github.io/slides",
                                },
                                {
                                    label: "Wiki",
                                    href: "https://github.com/z3prover/z3/wiki",
                                },
                            ],
                        },
                        {
                            title: "Stay Connected",
                            items: [
                                {
                                    label: "GitHub",
                                    href: "https://github.com/microsoft/z3guide",
                                },
                                {
                                    label: "Twitter",
                                    href: "https://twitter.com/RiSE_MSR",
                                },
                                {
                                    label: "RiSE @ MSR",
                                    href: "https://www.microsoft.com/en-us/research/group/research-software-engineering-rise/",
                                },
                            ],
                        },
                        {
                            title: "Legal",
                            items: [
                                {
                                    label: "Privacy & Cookies",
                                    href: "https://go.microsoft.com/fwlink/?LinkId=521839",
                                },
                                {
                                    label: "Terms of Use",
                                    href: "https://www.microsoft.com/en-us/legal/intellectualproperty/copyright",
                                },
                                {
                                    label: "Trademarks",
                                    href: "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general",
                                },
                            ],
                        },
                    ],
                    copyright: `${linkToCommit}${langVerInfo}Copyright © ${new Date().getFullYear()} Microsoft Corporation.`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                    additionalLanguages: ["lisp"],
                },
            }),
    };

    const renderCodeBlocks = await (
        await import("./src/remark/render-code-blocks.mjs")
    ).default();

    // add custom codeblocks to the default docs
    config.presets[0][1].docs.remarkPlugins.push(renderCodeBlocks);

    // add custom codeblocks to the programming docs
    config.plugins[0][1].remarkPlugins.push(renderCodeBlocks);

    // add custom codeblocks to the programming docs
    config.plugins[1][1].remarkPlugins.push(renderCodeBlocks);

    // [NEW DOCS] add custom codeblocks to the new docs
    // Example:
    // config.plugins[1][1].remarkPlugins.push(renderCodeBlocks);

    config.scripts.push({
        src: `${config.baseUrl}coi-serviceworker.js`,
        type: "text/javascript",
        defer: true,
    });

    config.scripts.push({
        src: `${config.baseUrl}z3-built.js`,
        type: "text/javascript",
        defer: true,
    });

    return config;
}
