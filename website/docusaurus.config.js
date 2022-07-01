// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


async function createConfig() {

  const repo = process.env.RISE4FUN_GITHUB_REPOSITORY;
  const sha = process.env.RISE4FUN_GITHUB_SHA;

  let linkToCommit = '';
  if (repo && sha) {
    linkToCommit = `<a href=https://github.com/${repo}/commit/${sha} target="_blank" rel="noopener noreferrer">${sha.slice(0, 8)}</a> | `
  }

  /** @type {import('@docusaurus/types').Config} */
  // where information such as course title, description etc. are configured
  const config = {
    title: 'RiSE4Fun',
    tagline: 'Learn Z3 online!',
    url: 'https://microsoft.github.io/',
    baseUrl: '/rise4fun/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'microsoft', // Usually your GitHub org/user name.
    projectName: 'rise4fun', // Usually your repo name.
    deploymentBranch: 'gh-pages', // name of the deployment branch

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        '@docusaurus/preset-classic',
        // /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            remarkPlugins: [],
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/microsoft/rise4fun/tree/main/website',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'RiSE4Fun',
          items: [
            { 
              type: 'doc',
              docId: 'guide/intro',
              position: 'left',
              label: 'Tutorial',
            },

            { 
              type: 'doc',
              docId: 'fixedpoints/intro',
              position: 'left',
              label: 'Fixed Point',
            },

            { 
              type: 'doc',
              docId: 'optimization/intro',
              position: 'left',
              label: 'Optimization',
            },
            { 
              type: 'doc',
              docId: 'strategies/intro',
              position: 'left',
              label: 'Strategies',
            },
            // link to the github repo of this site
            {
              href: 'https://github.com/microsoft/rise4fun',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Learn Z3',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/intro',
                },
                {
                  label: 'Programming Z3 in Python',
                  href: 'https://theory.stanford.edu/~nikolaj/programmingz3.html',
                },
                {
                  label: 'Z3 on GitHub',
                  href: 'https://github.com/Z3Prover/z3'
                }
              ],
            },
            {
              title: 'Stay Connected',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/microsoft/rise4fun',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/RiSE_MSR',
                },
                {
                  label: 'RiSE @ MSR',
                  href: 'https://www.microsoft.com/en-us/research/group/research-software-engineering-rise/',
                }
              ],
            },
            {
              title: 'Legal',
              items: [
                {
                  label: 'Privacy & Cookies',
                  href: 'https://go.microsoft.com/fwlink/?LinkId=521839',
                },
                {
                  label: 'Terms of Use',
                  href: 'https://www.microsoft.com/en-us/legal/intellectualproperty/copyright',
                },
                {
                  label: 'Trademarks',
                  href: 'https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general'
                }
              ]
            }
          ],
          copyright: `${linkToCommit}Copyright © ${new Date().getFullYear()} Microsoft Corporation.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };

  const renderCodeBlocks = (await import('./src/remark/render-code-blocks.mjs')).default;
  config.presets[0][1].docs.remarkPlugins.push(renderCodeBlocks);


  return config;
}

module.exports = createConfig;
