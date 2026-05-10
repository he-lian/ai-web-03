# Simple Sustainable Living

A modern, content-focused website about eco-friendly living, built with React and deployed on GitHub Pages. Perfect for driving organic traffic and monetizing with Google AdSense.

## 🎯 Features

- **6 Article Categories**: Zero Waste, Energy Saving, Eco Shopping, Sustainable Food, Eco Home, Green Transport
- **Beautiful UI**: Clean, modern design with smooth animations
- **Markdown Support**: Write articles in Markdown for easy content creation
- **SEO Optimized**: Built with search engines in mind
- **Google AdSense Ready**: Placeholder for easy ad integration
- **Responsive Design**: Looks great on all devices
- **GitHub Pages Deploy**: Automatic deployment with GitHub Actions

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view your site.

### Adding Articles

1. Open `src/content/data.ts`
2. Add your article to the `articles` array:
   ```typescript
   {
     slug: "your-article-slug",
     title: "Your Article Title",
     description: "Article description for SEO",
     category: "zero-waste",
     date: "2024-01-01",
     thumbnail: "https://images.unsplash.com/...",
     featured: false,
     content: `# Your Article Content Here...`,
   }
   ```
3. Save and your article is live!

See `src/content/article-template.ts` for a complete template.

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Step 1: Create a GitHub Repository

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository Settings > Pages
2. Under "Build and deployment", select **GitHub Actions** as the source
3. Push any change to trigger the deployment
4. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Custom Domain

1. Add your custom domain in Settings > Pages
2. Create a `public/CNAME` file with your domain (e.g., `blog.yourdomain.com`)
3. Update your domain's DNS records with a CNAME pointing to `YOUR-USERNAME.github.io`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **React Markdown** - Content rendering
- **Lucide React** - Icons
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## 📁 Project Structure

```
/workspace
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── content/          # Articles and data
│   │   ├── data.ts       # Articles and categories
│   │   └── article-template.ts
│   ├── types/            # TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions deployment
└── DEPLOYMENT.md         # Deployment guide
```

## 💰 Google AdSense Integration

1. Sign up for [Google AdSense](https://ads.google.com/)
2. Get your ad code
3. Add the script tag to `index.html`
4. Replace the placeholder in `src/pages/ArticleDetail.tsx` with your ad units

## 📄 License

MIT

## 🌟 Why This Niche?

**Sustainable Living** is an excellent niche because:
- 🌱 High and growing search volume in the US
- 💰 Good CPC (Cost Per Click) rates
- 📚 Easy to create AI-generated content
- 🏆 Less competition than broader topics
- 🎯 Passionate, engaged audience

Perfect for building a passive income stream through content marketing and ads!
