# Deployment Guide - GitHub Pages

This guide provides step-by-step instructions for deploying the LearnTechComm website to GitHub Pages.

## Prerequisites

- A GitHub account
- The LearnTechComm repository pushed to GitHub
- Repository ownership or admin access

## Deployment Steps

### Option 1: Deploy from Main Branch (Recommended)

1. **Navigate to Repository Settings**
   - Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/LearnTechComm`
   - Click on the "Settings" tab in the repository menu

2. **Access GitHub Pages Settings**
   - In the left sidebar, scroll down and click on "Pages" under the "Code and automation" section

3. **Configure Source**
   - Under "Build and deployment" section
   - Under "Source", select "Deploy from a branch"
   - Under "Branch", select your main branch (usually `main` or `master`)
   - Select the folder: `/ (root)` (since our HTML files are in the root directory)
   - Click "Save"

4. **Wait for Deployment**
   - GitHub will automatically build and deploy your site
   - This process usually takes 1-3 minutes
   - Refresh the page to see the deployment status

5. **Access Your Site**
   - Once deployed, your site will be available at:
     - `https://YOUR_USERNAME.github.io/LearnTechComm/`
   - The URL will be displayed at the top of the GitHub Pages settings page

### Option 2: Deploy from a Specific Branch

If you want to deploy from a different branch (e.g., `gh-pages`):

1. Create and switch to a new branch:
   ```bash
   git checkout -b gh-pages
   ```

2. Push the branch to GitHub:
   ```bash
   git push -u origin gh-pages
   ```

3. Follow steps 1-2 from Option 1

4. Under "Branch", select `gh-pages` instead of `main`

5. Select the folder: `/ (root)` and click "Save"

## Verifying Deployment

After deployment, verify your website is working correctly:

1. **Homepage**: Visit the main URL and verify the homepage loads with all 9 cards
2. **Navigation**: Click on each card to ensure all subfield pages load correctly
3. **Styling**: Verify that CSS styles are applied properly
4. **JavaScript**: Check that interactive features work (smooth scrolling, back-to-top button)
5. **Responsiveness**: Test the site on different screen sizes (desktop, tablet, mobile)

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a domain registrar
2. In your DNS settings, add a CNAME record pointing to `YOUR_USERNAME.github.io`
3. In the GitHub Pages settings, add your custom domain in the "Custom domain" field
4. Enable "Enforce HTTPS" for secure connections

## Troubleshooting

### Site Not Loading

- **Issue**: 404 error or blank page
- **Solution**:
  - Verify the branch and folder settings are correct
  - Ensure `index.html` is in the root of your selected folder
  - Check that all file paths in your HTML use relative paths (e.g., `css/styles.css` not `/css/styles.css`)

### CSS/JavaScript Not Loading

- **Issue**: Site loads but without styling or functionality
- **Solution**:
  - Check browser console for errors
  - Verify file paths are relative (e.g., `css/styles.css`, not absolute paths)
  - Ensure file names match exactly (case-sensitive)

### Changes Not Appearing

- **Issue**: Updated files not showing on the live site
- **Solution**:
  - Wait a few minutes for GitHub to rebuild
  - Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
  - Check if your changes were committed and pushed to the correct branch

### Images or Links Broken

- **Issue**: Internal links or images not working
- **Solution**:
  - Use relative paths throughout the site
  - For links from subfield pages back to home: `../index.html`
  - For CSS from subfield pages: `../css/styles.css`

## Updating the Live Site

To update your deployed website:

1. Make changes to your local files
2. Test changes locally by opening `index.html` in a browser
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. Push to GitHub:
   ```bash
   git push origin main
   ```
   (Replace `main` with your deployment branch if different)
5. GitHub Pages will automatically rebuild and deploy (1-3 minutes)

## Local Testing

Before deploying, test your site locally:

### Simple Method (Using Browser)
1. Open `index.html` directly in your web browser
2. Navigate through the site to test functionality

### Using Python (Recommended)
1. Navigate to the project directory in terminal
2. Run a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```
3. Open browser and visit: `http://localhost:8000`

### Using Node.js
1. Install a simple HTTP server:
   ```bash
   npm install -g http-server
   ```
2. Run the server:
   ```bash
   http-server
   ```
3. Open the URL shown in the terminal

## Performance Optimization

For optimal GitHub Pages performance:

- **Image Optimization**: Compress images before uploading
- **Minification**: Consider minifying CSS and JavaScript for production
- **Caching**: GitHub Pages automatically handles caching headers
- **CDN**: GitHub Pages uses a CDN for faster global delivery

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

## Support

If you encounter issues not covered in this guide:

1. Check the GitHub Pages status: https://www.githubstatus.com/
2. Review GitHub Pages documentation
3. Check repository issues or create a new issue
