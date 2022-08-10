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
3. [Manually Updating `z3-solver`](#manually-updating-z3-solver)
4. [Releases](#releases)
5. [Code of Conduct](#microsoft-open-source-code-of-conduct)
6. [Trademarks](#trademarks)

## Developer Setup

### Local Setup (not using Codespaces)

- install node.js >= 16.15.1
- install yarn globally if needed

```
npm install -g yarn
```

- Set up repo and start development following the steps in [Development](#development).


### Codespaces

These instruction use GitHub Codespaces, a convienient way to get a perfect cloud development environment. Your organization may or may not support Codespaces.

- From [this repository](https://github.com/microsoft/z3guide/), click on the green `<> Code` button, select the `Codespaces` tab and then `Create codespaces on main`. The setup might take a couple of minutes.

- From there, a VSCode tab will open in your browser. You may now edit, test and commit to the repository just like on your local machine.

  - All command line instructions assume a bash-like terminal.

- Set up repo and start development following the steps in [Development](#development).

### Microsoft Employees ONLY

- Join the Microsoft github organization from [Microsoft Open Source](https://opensource.microsoft.com/) via the `Employee sign-in` at the bottom.

  - From there, go to the `GitHub for Open Source at Microsoft` tab and follow the instructions to join the organization via the management portal.

## Development

- Change the working directory to `website`:

```
cd website
```

- From `website`, run the script to install dependencies

```
yarn
```

- Launch the docs server (which does client-side rendering and allows for hot reloading, so that you see your changes immediately reflected to the locally running page)

```
yarn clear; # for clearing cache
yarn start; 
```

- Click on the generated URL in the terminal output to see the website now running locally.

### Inspecting the Output from the Build
- In case you want to inspect the output (.html files etc. from server-side rendering) from the build, you can run

```
yarn clear; # clearing your cache first is always recommended
yarn build;
```

and if successful, you should see a `build` directory under `website`.

- If you want to see how these output files are rendered in the browser, you may run 
```
yarn serve
```
Note that this is _different_ from `yarn start`, as `yarn serve` does not do hot-reloading because it is simply _serving_ the files under `build` rather than rebuilding everything from scratch for every change you make, like what `yarn start` does.
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


## Manually Updating `z3-solver`
Upgrades of `z3-solver` should be done ONLY you are certain that the latest version of `z3-solver` works well with the existing examples and website infrastructure. We provide a script to automate the manual upgrade process:

```
# remember to switch into the `website` directory first
yarn upgrade-z3
```

The script will update `z3-solver` to the latest and then try to build the website. If the build fails, then it will downgrade `z3-solver` to the version before your upgrade. It is unlikely that the update itself fails.

After done, make sure the field `dependencies.z3-solver` in `website/package.json` is exactly the version that you just upgraded to. For example, if you just upgraded to version 4.10.1, it should look like
```js
{
  //...
  "dependencies": {
    //...
    "z3-solver": "4.10.1" // it should not be "^4.10.1" or "~4.10.1" or any other values that contain other symbols
  }
}
```
So that we make sure that `yarn install` always picks up the _exact_ version of `z3-solver` that you mean for the website to run on.

## Releases
We ONLY deploy changes to our github pages when we decide to _release_ current changes, so that we avoid nightly changes that might affect user experience. To do so, you would need to merge the `main` branch into the `release` branch, which is reserved for releases. The configured github actions will only make a release AND deploy to gh-pages when commits are pushed onto the `release` branch.

In command line, assuming you have a local `main` branch that is up-to-date with `origin/main`, it looks like the following:

```bash
git fetch
# fetches all remote branches
git checkout release
# switch into the release branch
git merge main
# merge commits on the main branch into the release branch
# and resolve merge conflicts accordingly
git push origin release
# push the `release` branch and trigger CI
```
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
