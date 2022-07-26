# Z3Guide Documentation

This repository contains sources of [Z3Guide](https://microsoft.github.io/z3guide/), an online tutorial for [Z3](https://z3prover.github.io/) powered by [RiSE at Microsoft Research](https://www.microsoft.com/en-us/research/group/research-software-engineering-rise/).

The rest of this page is for developers contributing to the tutorial docs of Z3.

## Table of Content
1. [Developer Setup](#developer-setup)
    1. [Local Setup](#local-setup-not-using-codespaces)
    2. [Codespaces](#codespaces-microsoft-internal-only)
2. [Development](#development)
    1. [Contributing to Existing Materials](#contributing-to-existing-tutorial-materials)
    2. [Creating New Tutorial Materials](#creating-new-tutorial-materials)
3. [Code of Conduct](#microsoft-open-source-code-of-conduct)
4. [Trademarks](#trademarks)

## Developer Setup

### Local Setup (not using Codespaces)

- install node.js >= 16.15.1
- install yarn globally if needed

```
npm install -g yarn
```

- Set up repo and start development following the steps in [Development](#development).


### Codespaces (Microsoft Internal ONLY)

- Join the Microsoft github organization from [Microsoft Open Source](https://opensource.microsoft.com/) via the `Employee sign-in` at the bottom.

  - From there, go to the `GitHub for Open Source at Microsoft` tab and follow the instructions to join the organization via the management portal.

- From [this repository](https://github.com/microsoft/z3guide/), click on the green `<> Code` button, select the `Codespaces` tab and then `Create codespaces on main`. The setup might take a couple of minutes.

- From there, a VSCode tab will open in your browser. You may now edit, test and commit to the repository just like on your local machine.

  - All command line instructions assume a bash-like terminal.

- Set up repo and start development following the steps in [Development](#development).


## Development

- From the root directory, build docusaurus

```
./build.sh
```

If the build fails after pulling, try

```
cd website && yarn clean && cd ../
```

- Launch the docs server

```
./run.sh
```

- Click on the generated URL in the terminal output to see the website now running locally.

### Contributing to Existing Tutorial Materials

The online Z3 Guide serves multiple instances of tutorial materials: currently it has a [Z3 tutorial in SMTLIB format](https://microsoft.github.io/z3guide/docs/logic/intro), and [Programming Z3 in different language bindings](https://microsoft.github.io/z3guide/programming/Programming%20Z3/Using%20Z3%20from%20Python/Introduction). 

The instances are hosted under `website/docs-smtlib` and `website/docs-programming`, respectively. To contribute to existing tutorial materials, you may add/edit materials in either directory.

-   You may find the Docusaurus documentation on [Docs](https://docusaurus.io/docs/docs-introduction) useful, especially for configuring the sidebar.

-   Note that Docusaurus does live reload, so that every change you make to `website/docs` will be immediately reflected in the locally running tab.

-   For all Z3-SMTLIB code snippets, please use the following Markdown code blocks format:
    ~~~
    ```z3
    (exec-this-command arg)
    ```
    ~~~

- Any Z3 runtime error with the code specified in the code block above would fail the build.
    However, you may intentionally bypass the errors by using flags of `no-build` or `ignore-errors`:

    ~~~
    ```z3 no-build
    give me the error on the webpage I know it is invalid
    ```
    ~~~

    or
    ~~~
    ```z3 ignore-errors
    I know this snippet is problematic but I want to teach about error messages so show them
    ```
    ~~~

- You may also add Z3-JavaScript or Z3-Python code snippets using Markdown code blocks, e.g.,:

  ~~~
  ```z3-js
  // some z3-js code
  ```
  ~~~

  and 

  ~~~
  ```z3-python
  # some z3-python code
  ```
  ~~~

  and the flags of `no-build` and `ignore-errors` remain applicable to these code blocks.

  Note that we currently support output rendering and code editing for Z3-SMTLIB and Z3-JavaScript code snippets, with similar support for Z3-Python coming soon.

- Programming Z3 in other language bindings is not supported at the moment.

- Sidebar content is maintained in files under `website/sidebars`. The Z3-SMTLIB guide uses `website/sidebars/smtlibSidebars.js`, while the Programming Z3 (with other language bindings) guide uses `website/sidebars/programmingSidebars.js`. If you find your new content missing from either sidebar, please modify the respective sidebar file accordingly.

### Creating New Tutorial Materials

The process of creating new tutorial materials is similar to the above, except for the following additional steps:

1. You will need to create a new `docs-*` directory under `website`. E.g., `website/docs-api`.
2. You will need a JavaScript file for configuring the sidebar for your docs under `website/sidebars`. The sidebar can be generated automatically. You may simply make a renamed copy of `programmingSidebars.js` for such automation.
3. You will need to go to `docusaurus.config.js` to add additional configurations so that the build process can pick up the new directories. Search for comments beginning with `[NEW DOCS]` within the file for more instructions.

## Microsoft Open Source Code of Conduct

This project is hosted at https://github.com/microsoft/z3guide/.
This project has adopted the
[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).

Resources:

- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- [Microsoft Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)
- Contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with questions or concerns

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
