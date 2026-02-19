# How to Find Your Shopify Store Domain

When using Shopify CLI commands, you need your store's `.myshopify.com` domain name.

## Method 1: From Shopify Admin (Easiest)

1. **Log in to Shopify Admin:**
   - Go to https://www.shopify.com/login
   - Enter your email and password

2. **Check the URL bar:**
   
   **New Admin Format** (most common):
   - URL looks like: `https://admin.shopify.com/store/smykaz-yu/`
   - Your store identifier is: `smykaz-yu`
   - Your store domain is likely: `smykaz-yu.myshopify.com`
   - **Verify:** Go to **Settings** → **Domains** to confirm
   
   **Old Admin Format:**
   - URL looks like: `https://your-store-name.myshopify.com/admin`
   - Your store domain is: `your-store-name.myshopify.com`

## Method 2: From Settings → Domains

1. In Shopify Admin, go to **Settings** → **Domains**
2. Your primary domain will be listed (the `.myshopify.com` one)
3. It will look like: `your-store-name.myshopify.com`

## Method 3: From Online Store

1. In Shopify Admin, go to **Online Store**
2. Click **"View your store"** or check the store URL
3. The URL will show your store domain

## Examples

Your store domain will look like one of these formats:
- `mystore.myshopify.com`
- `r2f-wear.myshopify.com`
- `smykaz-yu.myshopify.com` ← **Your store!**
- `store-12345.myshopify.com`

## Important Notes

- **Always use `.myshopify.com` domain** for CLI commands, even if you have a custom domain
- The format is: `[your-store-name].myshopify.com`
- Don't include `https://` or `/admin` in CLI commands
- Just use: `your-store-name.myshopify.com`

## Using in Commands

Once you have your store domain, use it like this:

```bash
# Development server
shopify theme dev --store=smykaz-yu.myshopify.com

# Push theme
shopify theme push --store=smykaz-yu.myshopify.com

# Or if you've authenticated, you can skip --store flag
shopify theme dev
shopify theme push
```

**For your store (`smykaz-yu`):**
- Your store domain: `smykaz-yu.myshopify.com`
- **Verify:** Go to **Settings** → **Domains** in Shopify admin to confirm

## If You Have Multiple Stores

If you have multiple Shopify stores:
1. Run `shopify auth login`
2. You'll see a list of your stores
3. Select the one you want to use
4. After that, you can use commands without `--store` flag

---

**Need help?** Check your Shopify admin URL - it always shows your store domain!
