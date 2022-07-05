# Z3Guide Documentation
This repository contains sources of [Z3Guide](https://microsoft.github.io/z3guide/), an online tutorial for [Z3](https://z3prover.github.io/) powered by [RiSE at Microsoft Research](https://www.microsoft.com/en-us/research/group/research-software-engineering-rise/).

The rest of this page is for developers contributing to the tutorial docs of Z3.
## Developer setup

### Codespaces (Microsoft Internal ONLY)
-   Join the Microsoft github organization from [Microsoft Open Source](https://opensource.microsoft.com/) via the `Employee sign-in` at the bottom. 
    - From there, go to the `GitHub for Open Source at Microsoft` tab and follow the instructions to join the organization via the management portal.

-   From [this repository](https://github.com/microsoft/z3guide/), click on the green `<> Code` button, select the `Codespaces` tab and then `Create codespaces on main`. The setup might take a couple of minutes.

-   From there, a VSCode tab will open in your browser. You may now edit, test and commit to the repository just like on your local machine.

    -   All command line instructions assume a bash-like terminal.

-   Set up repo and start development following the steps in [Development](#development).


### Local Setup (not using Codespaces)

-   install node.js >= 16.15.1
-   install yarn globally if needed

```
npm install -g yarn
```

-   Set up repo and start development following the steps in [Development](#development).

#### Updating dependencies

Use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to upgrade all dependencies expect blockly*, tfjs, mdx.


## Development

-   From the root directory, build docusaurus

```
./build.sh
```
If the build fails after pulling, try

```
cd website && yarn clean && cd ../
```

-   Launch the docs server

```
./run.sh
```

-   Click on the generated URL in the terminal output to see the website now running locally.

-   Start adding / editing tutorial materials in `website/docs`.

    -   You may find the Docusaurus documentation on [Docs](https://docusaurus.io/docs/docs-introduction) useful, especially for configuring the sidebar.

    -   Note that Docusaurus does live reload, so that every change you make to `website/docs` will be immediately reflected in the locally running tab.

    -   For all Z3 code snippets, please use the following Markdown Code blocks format:
    ```
        ```z3
        (exec-this-command arg)
        ```
    ```



## Microsoft Open Source Code of Conduct

This project is hosted at https://github.com/microsoft/z3guide/.
This project has adopted the
[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).

Resources:

-   [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
-   [Microsoft Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)
-   Contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with questions or concerns


## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
