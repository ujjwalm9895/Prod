# Fix: "Incorrect store password" Error

## Problem
You're seeing: `Incorrect store password` when trying to authenticate with Shopify CLI.

## Solution 1: Use OAuth Login (Recommended)

**Don't use password-based authentication.** Use OAuth instead:

```bash
# Cancel the current prompt (Ctrl+C) and run:
shopify auth login
```

This will:
1. Open your browser
2. Let you log in with your email/password in the browser
3. Authorize the CLI app
4. Complete authentication without entering password in terminal

## Solution 2: Check Store Password Protection

If your store has password protection enabled:

1. Go to Shopify Admin: https://admin.shopify.com/store/smykaz-yu/
2. Go to **Online Store** → **Preferences**
3. Scroll to **Password protection**
4. **Disable password protection** (if you want to test locally)
5. Save

**Note:** Password protection blocks access to your store, which can cause CLI authentication issues.

## Solution 3: Use Store Flag

If you need to specify your store:

```bash
shopify auth login --store=smykaz-yu.myshopify.com
```

## Solution 4: Update CLI (if needed)

Make sure you have the latest version:

```bash
npm install -g @shopify/cli@latest @shopify/theme@latest
```

## Solution 5: Clear Authentication Cache

If authentication is stuck:

```bash
# Clear Shopify CLI cache
shopify auth logout
shopify auth login
```

## After Authentication

Once authenticated, you can use commands without password:

```bash
shopify theme dev
shopify theme push
shopify theme check
```

---

**Your Store:** `smykaz-yu.myshopify.com`  
**Admin URL:** `https://admin.shopify.com/store/smykaz-yu/`
