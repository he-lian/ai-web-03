# Deployment Guide - GitHub Pages

## Step 1: Prepare Your Repository

1. Create a new repository on GitHub
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

## Step 2: Configure GitHub Pages

### Option A: Automatic Deployment with GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: true

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         
         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Setup Pages
           uses: actions/configure-pages@v4
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. Go to your repository on GitHub
3. Go to Settings > Pages
4. Under "Build and deployment", select:
   - Source: GitHub Actions
5. Push your changes, the site will deploy automatically!

### Option B: Manual Deployment

1. Update `vite.config.ts`, uncomment and set the `base` to your repo name:
   ```typescript
   export default defineConfig({
     base: '/YOUR-REPO-NAME/', // Add this line
     // ... rest of config
   })
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```

4. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

5. Deploy:
   ```bash
   npm run deploy
   ```

## Step 3: Custom Domain (Optional)

1. Go to your repository Settings > Pages
2. Under "Custom domain", enter your domain (e.g., blog.yourdomain.com)
3. Create a CNAME file in `public/` with your domain:
   ```
   blog.yourdomain.com
   ```
4. Update your domain's DNS settings with your domain provider:
   - CNAME record: `blog` pointing to `YOUR-USERNAME.github.io`

## Adding New Articles

1. Open `src/content/data.ts`
2. Add your article to the `articles` array (use the template in `src/content/article-template.ts`)
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new article: [Title]"
   git push
   ```
4. GitHub Actions will automatically deploy the update!

## Google AdSense Integration

1. Sign up for Google AdSense: https://ads.google.com/
2. Get your ad code
3. Add the AdSense script to `index.html`
4. Replace the placeholder in `ArticleDetail.tsx` with your actual ad units
