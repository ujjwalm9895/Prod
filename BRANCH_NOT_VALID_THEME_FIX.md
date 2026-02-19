# Why "Branch isn't a valid theme" — and how to fix it

## What’s wrong

Shopify only accepts a branch that **is** a theme at the **root** of the repo.

- **Required:** At the **root** of the branch you must see:
  - `layout/` (e.g. `layout/theme.liquid`)
  - `templates/` (e.g. `templates/index.json`)
  - `sections/`
  - `assets/`
  - `config/`
  - `locales/`
  - etc.

- **Your current setup:**  
  The repo connected to Shopify is **Prod** (`https://github.com/ujjwalm9895/Prod`).  
  The **root** of that repo is the Next.js project, not the theme:

  ```
  Prod (branch root)     ← Shopify looks HERE
  ├── app/
  ├── components/
  ├── package.json
  ├── shopify-theme/     ← Theme is INSIDE here
  │   ├── layout/
  │   ├── sections/
  │   ├── templates/
  │   └── ...
  └── ...
  ```

  So Shopify sees a Next.js app at the root, not a theme → **"Branch isn't a valid theme"**.

---

## Code flow (where GitHub is)

| Location              | What it is                    | Git repo          |
|-----------------------|-------------------------------|-------------------|
| `d:\Cycle 2\Cycle 2\Prod` | Next.js app + docs            | **Prod** (origin)  |
| `d:\Cycle 2\Cycle 2\Prod\shopify-theme` | The actual Shopify theme     | Its **own** .git (no remote yet) |

- **Prod** is pushed to GitHub as `ujjwalm9895/Prod`.  
- **shopify-theme** has a separate `.git` and is **not** pushed to GitHub yet (no remote).  
- Shopify is connected to **Prod**, so it only ever sees the Next.js root → invalid theme.

---

## Fix: use a theme-only repo (theme at root)

You need **one GitHub repo** where the **root of the branch** is the theme (the contents of `shopify-theme/`), and connect **that** repo to Shopify.

### Option A: New repo from `shopify-theme` (recommended)

1. **Create a new empty repo on GitHub**
   - Name it e.g. `r2f-shopify-theme`.
   - Do **not** add a README or .gitignore (keep it empty).

2. **Use the existing git in `shopify-theme` and add that repo as remote**
   ```powershell
   cd "d:\Cycle 2\Cycle 2\Prod\shopify-theme"
   git remote add origin https://github.com/ujjwalm9895/r2f-shopify-theme.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect Shopify to this repo**
   - Shopify Admin → **Online Store** → **Themes**
   - **Add theme** → **Connect from GitHub**
   - Choose repo: **r2f-shopify-theme**
   - Branch: **main**
   - Connect.

Then the branch root will be:

```
r2f-shopify-theme (branch root)   ← Shopify sees this
├── layout/
├── sections/
├── templates/
├── assets/
├── config/
├── locales/
├── snippets/
└── ...
```

That is a valid theme, so the error goes away.

### Option B: New repo with theme at root (no subfolder)

If you prefer a brand-new repo and don’t care about keeping the existing `shopify-theme` git history:

1. Create a new empty repo on GitHub (e.g. `r2f-shopify-theme`).
2. Clone it into a new folder:
   ```powershell
   cd "d:\Cycle 2\Cycle 2\Prod"
   git clone https://github.com/ujjwalm9895/r2f-shopify-theme.git r2f-theme-repo
   cd r2f-theme-repo
   ```
3. Copy **only the contents** of `shopify-theme` into this repo root (so `layout/`, `sections/`, etc. are at the root of `r2f-theme-repo`).
4. Commit and push:
   ```powershell
   git add .
   git commit -m "R2F Shopify theme"
   git push -u origin main
   ```
5. In Shopify: **Add theme** → **Connect from GitHub** → select **r2f-shopify-theme** and **main**.

---

## Checklist

- [ ] Repo connected to Shopify has **theme at branch root** (layout/, sections/, templates/, etc.).
- [ ] Repo is **theme-only** (e.g. `r2f-shopify-theme`), **not** the full Prod repo.
- [ ] Branch name (e.g. `main`) is the one you select when connecting in Shopify.

After this, “Branch isn’t a valid theme” should be resolved. If it persists, check that the branch you selected in Shopify is the one you just pushed (e.g. `main`) and that the root of that branch has the structure above.
