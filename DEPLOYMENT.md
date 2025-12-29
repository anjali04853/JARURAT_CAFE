# Deployment Guide

This guide provides step-by-step instructions for deploying the Cancer Awareness & Support web page to GitHub Pages, Netlify, or Vercel.

## Prerequisites

- Git installed on your machine
- GitHub account (for all deployment options)
- Internet connection

## Step 1: Prepare Your Repository

### 1.1 Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `cancer-awareness-support`
4. Add description: "A responsive web application for cancer awareness and support"
5. Choose "Public" (required for free GitHub Pages)
6. Click "Create repository"

### 1.2 Connect Local Repository to GitHub

```bash
# Set the remote URL (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cancer-awareness-support.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Option 1: GitHub Pages (Free)

### Setup Instructions

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section

2. **Configure GitHub Pages**
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"

3. **Wait for Deployment**
   - GitHub will automatically build and deploy your site
   - You'll see a notification when deployment is complete
   - Your site will be available at: `https://YOUR_USERNAME.github.io/cancer-awareness-support/`

### Automatic Deployments

The repository includes a GitHub Actions workflow that automatically:
- Runs tests on every push to `main`
- Deploys to GitHub Pages on successful tests
- Provides deployment status in your repository

### Custom Domain (Optional)

To use a custom domain:
1. Go to Settings > Pages
2. Under "Custom domain", enter your domain
3. Update your domain's DNS records to point to GitHub Pages
4. GitHub will automatically provision an SSL certificate

---

## Option 2: Netlify (Recommended for Ease)

### Setup Instructions

1. **Sign Up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up"
   - Choose "GitHub" as your sign-up method
   - Authorize Netlify to access your GitHub account

2. **Create New Site**
   - Click "New site from Git"
   - Select "GitHub" as your Git provider
   - Search for and select `cancer-awareness-support` repository
   - Click "Connect"

3. **Configure Build Settings**
   - Build command: (leave empty)
   - Publish directory: `.` (root directory)
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify will automatically deploy your site
   - You'll receive a URL like: `https://your-site-name.netlify.app`
   - Your site is now live!

### Automatic Deployments

Every time you push to `main`:
- Netlify automatically detects the change
- Deploys your site
- Sends you a notification

### Custom Domain

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificate

### Environment Variables (if needed)

1. Go to Site settings > Build & deploy > Environment
2. Add any environment variables your site needs
3. Redeploy to apply changes

---

## Option 3: Vercel (Best Performance)

### Setup Instructions

1. **Sign Up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign up"
   - Choose "GitHub" as your sign-up method
   - Authorize Vercel to access your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Search for and select `cancer-awareness-support`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: "Other"
   - Root Directory: `.`
   - Build Command: (leave empty)
   - Output Directory: `.`
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will automatically deploy your site
   - You'll receive a URL like: `https://cancer-awareness-support.vercel.app`
   - Your site is now live!

### Automatic Deployments

- Every push to `main` triggers automatic deployment
- Preview deployments for pull requests
- Automatic rollback on failed deployments

### Custom Domain

1. Go to Project Settings > Domains
2. Click "Add"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Vercel provides free SSL certificate

### Analytics & Monitoring

Vercel provides built-in:
- Performance analytics
- Error tracking
- Deployment history
- Real-time logs

---

## Deployment Comparison

| Feature | GitHub Pages | Netlify | Vercel |
|---------|-------------|---------|--------|
| Cost | Free | Free | Free |
| Setup Time | 5 minutes | 3 minutes | 3 minutes |
| Performance | Good | Excellent | Excellent |
| Custom Domain | Yes | Yes | Yes |
| SSL Certificate | Free | Free | Free |
| Analytics | Limited | Good | Excellent |
| Build System | Simple | Advanced | Advanced |
| Ease of Use | Easy | Very Easy | Very Easy |

---

## Post-Deployment Verification

After deployment, verify your site works correctly:

### 1. Test Functionality
- [ ] Open the deployed URL in your browser
- [ ] Test the contact form
- [ ] Verify form validation works
- [ ] Test the quote functionality
- [ ] Check responsive design on mobile

### 2. Check Performance
- [ ] Page loads quickly
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No console errors

### 3. Verify Accessibility
- [ ] Tab through form fields
- [ ] Test with screen reader
- [ ] Check color contrast
- [ ] Verify keyboard navigation

### 4. Test on Different Browsers
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## Troubleshooting

### Site Not Deploying

**GitHub Pages:**
- Ensure branch is set to `main` in Settings > Pages
- Check that files are in the root directory
- Verify `.gitignore` isn't excluding important files

**Netlify:**
- Check build logs for errors
- Ensure publish directory is correct
- Verify all files are committed to Git

**Vercel:**
- Check deployment logs
- Ensure project settings are correct
- Verify environment variables if needed

### Site Shows 404 Error

- Verify the correct URL is being used
- Check that `assingment/index.html` exists
- Ensure rewrite rules are configured (Netlify/Vercel)

### Styles or Scripts Not Loading

- Clear browser cache (Ctrl+Shift+Delete)
- Check file paths are correct
- Verify files are committed to Git
- Check browser console for errors

### Form Not Working

- Verify JavaScript is enabled
- Check browser console for errors
- Test in different browser
- Verify API endpoint is accessible

---

## Updating Your Deployment

### Making Changes

1. Make changes to your local files
2. Test locally
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. Push to GitHub:
   ```bash
   git push origin main
   ```
5. Your deployment platform automatically updates

### Rollback to Previous Version

**GitHub Pages:**
- Revert commit in Git
- Push to main
- GitHub Pages automatically redeploys

**Netlify:**
- Go to Deploys
- Click on previous deployment
- Click "Publish deploy"

**Vercel:**
- Go to Deployments
- Click on previous deployment
- Click "Promote to Production"

---

## Security Best Practices

1. **Keep Dependencies Updated**
   - Regularly check for security updates
   - Update package.json dependencies

2. **Use HTTPS**
   - All deployment platforms provide free SSL
   - Always use HTTPS URLs

3. **Protect Sensitive Data**
   - Never commit API keys or passwords
   - Use environment variables for secrets
   - Add to `.gitignore`

4. **Monitor Deployments**
   - Check deployment logs regularly
   - Set up notifications for failures
   - Review error tracking

---

## Performance Optimization

### Caching Strategy

The deployment configurations include:
- Long cache for CSS/JS files (1 year)
- Short cache for HTML (1 hour)
- Automatic cache busting on updates

### Content Delivery

- **GitHub Pages**: Uses GitHub's CDN
- **Netlify**: Uses Netlify's global CDN
- **Vercel**: Uses Vercel's edge network

### Monitoring Performance

1. **GitHub Pages**: Use Lighthouse in DevTools
2. **Netlify**: Built-in Analytics
3. **Vercel**: Built-in Web Analytics

---

## Support & Resources

### Documentation
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)

### Community
- GitHub Discussions
- Netlify Community
- Vercel Community

### Issues
- Check deployment logs first
- Search existing issues
- Create new issue with details

---

## Next Steps

After successful deployment:

1. **Share Your Site**
   - Share the URL with stakeholders
   - Add to your portfolio
   - Share on social media

2. **Monitor Performance**
   - Check analytics regularly
   - Monitor error rates
   - Track user engagement

3. **Gather Feedback**
   - Collect user feedback
   - Monitor form submissions
   - Track quote API usage

4. **Plan Updates**
   - Plan new features
   - Fix reported issues
   - Optimize performance

---

**Last Updated**: December 2024
**Version**: 1.0.0
