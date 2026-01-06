# Deployment Guide for Tanti Automatics Website

## Important Notes

**Next.js requires Node.js hosting** - GoDaddy's standard shared hosting (Linux/Windows) typically does NOT support Next.js applications as they are PHP-based.

### Your Options:

1. **Vercel (Recommended)** - Free, optimized for Next.js
2. **Netlify** - Free tier available
3. **GoDaddy VPS** - If you have a VPS with Node.js support
4. **Other VPS providers** - DigitalOcean, AWS, etc.

## Pre-Deployment Checklist

✅ All code changes are committed
✅ Production build tested locally
✅ Environment variables configured (if any)

## Step 1: Create Production Build ✅ COMPLETED

The production build has been successfully created! The build includes:
- ✅ All TypeScript errors fixed
- ✅ All hydration errors resolved
- ✅ 29 static pages generated
- ✅ Optimized bundle sizes (161 kB shared JS)

The `.next` folder contains the optimized production files ready for deployment.

## Step 2: Deployment Options

### Option A: Deploy to Vercel (Easiest - Recommended)

1. **Sign up at [vercel.com](https://vercel.com)** (free)
2. **Connect your Git repository** (GitHub, GitLab, or Bitbucket)
3. **Import your project**
4. **Vercel will automatically:**
   - Detect Next.js
   - Build your project
   - Deploy it
   - Give you a free domain (or connect your GoDaddy domain)

**To connect your GoDaddy domain:**
- In Vercel dashboard → Your Project → Settings → Domains
- Add your domain
- Update DNS records in GoDaddy as instructed

### Option B: Deploy to Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your Git repository
3. Build command: `yarn build`
4. Publish directory: `.next`
5. Add your GoDaddy domain in Netlify settings

### Option C: Deploy to GoDaddy VPS (If Available)

If you have GoDaddy VPS with Node.js:

1. **SSH into your server**
2. **Install Node.js** (if not installed):
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Upload your project files** (via FTP/SFTP or Git)
4. **Install dependencies:**
   ```bash
   yarn install --production
   ```

5. **Build the project:**
   ```bash
   yarn build
   ```

6. **Start the production server:**
   ```bash
   yarn start
   ```

7. **Use PM2 to keep it running:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "tanti-website" -- start
   pm2 save
   pm2 startup
   ```

8. **Configure Nginx/Apache** as reverse proxy to port 3000

### Option D: Static Export (If you don't need server-side features)

If your site doesn't need API routes or server-side rendering:

1. **Update `next.config.js`** to add:
   ```javascript
   output: 'export',
   ```

2. **Build:**
   ```bash
   yarn build
   ```

3. **Upload the `out` folder** to GoDaddy's public_html via FTP

## Step 3: Update DNS (If using external hosting)

If deploying to Vercel/Netlify but using GoDaddy domain:

1. **In Vercel/Netlify:** Add your domain
2. **In GoDaddy DNS settings:**
   - Change A record to point to hosting provider's IP
   - Or change CNAME to hosting provider's domain
   - Follow specific instructions from your hosting provider

## Current Changes to Deploy

The following fixes have been made and need to be deployed:

1. ✅ Fixed hydration error in `components/header/Logo.tsx` (removed `fetchPriority`)
2. ✅ Fixed `index is not defined` error in `components/features.tsx` (using `absoluteIndex`)
3. ✅ Optimized image loading with proper `priority` and `loading` attributes
4. ✅ Performance optimizations in `next.config.js`

## Quick Deploy Commands

```bash
# 1. Build production version
yarn build

# 2. Test production build locally
yarn start

# 3. If everything works, proceed with deployment
```

## Need Help?

- **Vercel Support:** https://vercel.com/docs
- **Netlify Support:** https://docs.netlify.com
- **Next.js Deployment:** https://nextjs.org/docs/deployment

