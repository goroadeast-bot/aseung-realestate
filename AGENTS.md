# Project work records

- Keep this project's important changes, decisions, publications, failures and recoveries in `docs/WORK_LOG.md`. If the project already has a canonical changelog or work log, use that file and update this path.
- At the first substantive task, create the log if needed. Before reporting later substantive work complete, append a dated entry stating what changed or was learned, why it matters, relevant files or links, the observed result, and any open issue. Label estimates as estimates.
- Keep the entry short. Do not put secrets in the log. Preserve existing project instructions when adding this section to an existing `AGENTS.md`.

# Shared GPT skills and programs

- Reuse `D:\GPT_project\Gpt_program` for this Windows user's shared Codex skills and programs. Consult its `README.md` and relevant `docs/INSTALLATIONS.md` entries before installing or updating shared tools.
- Preserve this project's dependency versions and permissions. Record shared installations in the hub's inventory and work log.

# Browser preference

- Use Aside first for interactive browser work. After one bounded recovery fails, use Codex's built-in in-app browser (`iab`) in the background; this fallback is authorized. Recheck the URL, account and login state. Do not launch desktop Chrome as the alternative.

# Deployment

- The production site is https://xn--2q1b16p8rcqvc8ye.com/ and its repository is `goroadeast-bot/aseung-realestate`. GitHub Pages deploys the root of `main`.
- Deployment uses Git and GitHub CLI directly and does not require Headroom or resuming a particular chat. Follow [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) from any chat opened in this project.
- A request to deploy the listings includes fetching the current rankings, checking all selected detail links and photos, updating the static data and cache version, committing the intended files, pushing `main`, and verifying Pages and the live files. An explicit request for deployment setup or documentation alone does not request a listing refresh.
- Preserve existing unrelated untracked files, including `.agents/` and prior planning documents. Stage only files belonging to the requested work.
