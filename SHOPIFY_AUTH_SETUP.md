# 🔐 Shopify Authentication Setup

Guide to authenticate with Shopify CLI and connect to your store.

## Step 1: Authenticate with Shopify

```bash
shopify auth login
```

This will:
1. Open your browser
2. Ask you to log in to Shopify
3. Authorize the CLI
4. Save your credentials

## Step 2: Select Your Store

After authentication, you'll be asked to select your store. Choose:
- Your store domain (e.g., `r2f-wear.myshopify.com`)

## Step 3: Verify Connection

```bash
shopify theme list
```

This should show your themes without errors.

## Alternative: Set Store Manually

If you want to specify the store directly:

### Option 1: Use --store flag
```bash
shopify theme check --store=your-store.myshopify.com
shopify theme dev --store=your-store.myshopify.com
shopify theme push --store=your-store.myshopify.com
```

### Option 2: Set Environment Variable

**Windows PowerShell:**
```powershell
$env:SHOPIFY_FLAG_STORE="your-store.myshopify.com"
shopify theme check
```

**Windows CMD:**
```cmd
set SHOPIFY_FLAG_STORE=your-store.myshopify.com
shopify theme check
```

**Git Bash / Linux / Mac:**
```bash
export SHOPIFY_FLAG_STORE="your-store.myshopify.com"
shopify theme check
```

### Option 3: Create .env File

Create `.env` file in `shopify-theme/` directory:

```env
SHOPIFY_FLAG_STORE=your-store.myshopify.com
```

## Quick Start Commands

### 1. Authenticate First
```bash
shopify auth login
```

### 2. Navigate to Theme
```bash
cd "Cycle 2/Prod/shopify-theme"
```

### 3. Check Theme
```bash
shopify theme check
```

### 4. Start Development
```bash
shopify theme dev
```

## Troubleshooting

### "A store is required"
- Run `shopify auth login` first
- Or use `--store=your-store.myshopify.com` flag
- Or set `SHOPIFY_FLAG_STORE` environment variable

### "Not authenticated"
- Run `shopify auth login` again
- Make sure you're logged into Shopify in your browser

### "Store not found"
- Check your store domain is correct
- Format: `your-store.myshopify.com` (not `https://`)

## Example Workflow

```bash
# 1. Authenticate
shopify auth login

# 2. Navigate to theme
cd "Cycle 2/Prod/shopify-theme"

# 3. Check theme
shopify theme check

# 4. Start dev server
shopify theme dev

# 5. Push to Shopify
shopify theme push
```

---

**Replace `your-store.myshopify.com` with your actual Shopify store domain!**
