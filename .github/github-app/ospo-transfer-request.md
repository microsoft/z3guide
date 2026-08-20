# OSPO request: move z3-guide-app to the organization

> **Filed:** https://github.com/microsoft/github-operations/issues/1726
> (2026-08-20). Kept here as the record of what was requested and why. The next
> action is initiating the transfer from
> <https://github.com/settings/apps/z3-guide-app/advanced>, as the ticket
> instructs.

Ready-to-submit answers for the
[**Transfer and configure a first-party GitHub App**](https://github.com/microsoft/github-operations/issues/new?template=transfer-and-configure-a-first-party-github-app.yml)
form on [`microsoft/github-operations`](https://github.com/microsoft/github-operations).

The App now **exists**: `z3-guide-app`, App ID `4662589`, Client ID
`Iv23li6lyE3PHafpr9qb`, currently owned by `@levnach`. The ticket asks you to
initiate the transfer as soon as it is filed, so it is ready to submit. The form
fields carry no `id:` attributes, so GitHub cannot pre-fill them from a URL;
copy the answers below into the form.

Suggested issue title: `[App] Accept a GitHub App transfer — z3-guide-app to microsoft`

---

**GitHub app name**

```
z3-guide-app
```

(App ID `4662589`, currently owned by `@levnach`.)

**Which GitHub organization do you want to transfer the app to?**

```
microsoft
```

> `microsoft` is the org that owns `z3guide`, which keeps the App and the
> repository it serves under one owner. The App is **public** ("Any account"),
> not because it is meant for outside use but because OSPO's config-as-code
> review bot resolves the App through `GET /apps/{slug}`, which returns `404`
> for a private App — the already-approved `z3prover-ci-bot` is public for the
> same reason. If OSPO would rather route this to `microsoftengineering` — the
> destination the form calls out for Apps addressing reduced PAT lifetimes —
> that also works; the App Managers would then need to join that org.

**What type of app is this?**

- [x] First-party app used for internal scenarios, engineering, development

> It is not a "reduced PAT lifetime" App in the strict sense: it exists because
> organization policy blocks `GITHUB_TOKEN` from creating pull requests. Using a
> PAT instead would also hit the ~7-day fine-grained PAT expiry with no renewal
> API, which is a secondary reason to prefer an App.

**Initial App Managers**

```
levnach
NikolajBjorner
```

**Does this app have any side-effects if it is installed into all repos in an organization?**

```
Yes, it has side effects and you should be careful if installing to all repos in an org
```

> The App pushes a branch and opens a pull request on the repositories it is
> installed on. It must be installed on **selected repositories only** —
> currently just `microsoft/z3guide`. Please do not install it org-wide.

**Is this app hosted securely at Microsoft?**

```
There is no hosted service. The App is a credential-only automation identity: it
has no webhook (webhooks are disabled in the manifest), no callback URL and no
backend. It is used exclusively from GitHub Actions in microsoft/z3guide, where
actions/create-github-app-token exchanges the App private key for a short-lived
installation token scoped to that single repository. The private key is stored
as the repository secret Z3GUIDE_APP_PRIVATE_KEY on microsoft/z3guide. Because
nothing is deployed, there is no Service Tree node or SDL review to reference.
```

**If someone asks to have this app installed on all repos in an official Microsoft organization**

```
include the app managers in the approval discussion
```

**Additional notes**

```
Purpose: the "Update Z3 parameter documentation" workflow in microsoft/z3guide
regenerates three reference pages from each new Z3Prover/z3 release and opens a
pull request with the result. Organization policy prevents GITHUB_TOKEN from
creating pull requests, so the workflow needs a separate identity.

Requested permissions (least privilege, derived from the workflow):
  Contents = write        push the automation/update-z3-parameters branch
  Pull requests = write   open/update the regeneration pull request
  Metadata = read         mandatory
No Issues permission, no account or organization permissions, no webhook.

Installation scope: selected repositories, microsoft/z3guide only. The install
request will follow as a config-as-code pull request adding
apps/microsoft/z3-guide-app.yml (the file is prepared in this repo at
.github/github-app/z3-guide-app.install.yml).

Prior art: the same pattern is already approved and running as z3prover-ci-bot
(App ID 4310239) in the Z3Prover org, installed on Z3Prover/z3, Z3Prover/bench
and Z3Prover/coz3.

Tracking pull request: https://github.com/microsoft/z3guide/pull/258
```

---

## After filing

1. App settings → **Advanced** → **Transfer ownership** → target org.
2. Open the install pull request on `microsoft/github-operations` adding
   `.github/github-app/z3-guide-app.install.yml` as
   `apps/microsoft/z3-guide-app.yml`. It already carries the real Client ID and
   App ID.
3. Set `Z3GUIDE_APP_CLIENT_ID` and `Z3GUIDE_APP_PRIVATE_KEY` on
   `microsoft/z3guide` (see `README.md`, step 4).
