# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LearnTechComm is a static website that showcases nine key areas of Technical Communication. It's designed as an educational resource to help aspiring technical writers explore career opportunities and prepare for the job market. The website is built using vanilla HTML, CSS, and JavaScript, and is optimized for deployment on GitHub Pages.

## Project Purpose

The website provides comprehensive information about technical communication careers, featuring:
- Overview of the Technical Communication field
- Detailed pages for 9 technical writing specializations
- Career-focused insights including required skills and daily responsibilities
- Modern, responsive design suitable for all devices

## Repository Structure

```
LearnTechComm/
├── index.html              # Homepage with field intro and navigation cards
├── css/
│   └── styles.css          # All styling, responsive design, animations
├── js/
│   └── main.js             # Interactive features and accessibility
├── pages/                  # Individual subfield pages (9 total)
│   ├── instructional-documentation.html
│   ├── technical-reports.html
│   ├── policy-procedures.html
│   ├── white-papers.html
│   ├── grants-proposals.html
│   ├── api-documentation.html
│   ├── sops.html
│   ├── marketing-promotional.html
│   └── legal-documents.html
├── README.md               # Project documentation
├── DEPLOYMENT.md           # GitHub Pages deployment instructions
└── CLAUDE.md               # This file
```

## Technology Stack

- **HTML5**: Semantic markup, accessible structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, CSS variables
- **Vanilla JavaScript**: No frameworks or dependencies
- **GitHub Pages**: Hosting platform

## Development Workflow

### Local Development

1. **Viewing the site locally**:
   ```bash
   # Option 1: Open index.html directly in browser

   # Option 2: Run a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

2. **Testing changes**:
   - Open files in a modern browser
   - Test responsive design using browser dev tools
   - Verify all internal links work correctly
   - Check JavaScript console for errors

### Git Branches

- Default development branch: `claude/init-project-011CUxnq5hGX6CkA3mjTB3FJ`
- All feature branches should follow the pattern: `claude/*`

### Git Operations

When making changes:
```bash
git add .
git commit -m "Description of changes"
git push -u origin <branch-name>
```

## Code Architecture

### HTML Structure

- **index.html**: Homepage with hero section, intro content, and 9 navigation cards
- **pages/*.html**: Consistent structure across all subfield pages
  - Header with back navigation
  - Page header with title and subtitle
  - Content sections with overview, skills, and daily tasks
  - Footer with return link

### CSS Organization

**File**: `css/styles.css`

Structure:
1. Reset & Base Styles
2. CSS Variables (colors, shadows, transitions)
3. Header & Navigation
4. Hero Section
5. Cards & Grid Layout
6. Subfield Pages
7. Footer
8. Responsive Breakpoints (@media queries)
9. Accessibility Features

**Key CSS Features**:
- CSS Grid for card layout (responsive: 3 cols → 1 col)
- CSS Variables for consistent theming
- Flexbox for component layouts
- Modern gradient backgrounds
- Smooth transitions and hover effects

### JavaScript Functionality

**File**: `js/main.js`

Features:
- Smooth scrolling for anchor links
- Scroll-triggered card animations (Intersection Observer)
- Back-to-top button on subfield pages
- Accessibility enhancements (skip links, keyboard navigation)
- Print-friendly styles

## File Path Conventions

**Critical**: All file paths must be relative for GitHub Pages compatibility

From root pages (index.html):
- CSS: `css/styles.css`
- JS: `js/main.js`
- Links to pages: `pages/example.html`

From subfield pages (pages/*.html):
- CSS: `../css/styles.css`
- JS: `../js/main.js`
- Back to home: `../index.html`

## Content Guidelines

### Adding New Subfield Pages

If adding additional technical communication areas:

1. Create new HTML file in `pages/` directory
2. Follow existing page structure (copy from existing page)
3. Update content sections: Overview, Skills, Daily Tasks
4. Add card to homepage `index.html` in the cards-grid section
5. Ensure all links use relative paths

### Content Structure

Each subfield page should include:
- **Overview**: 2-3 paragraphs explaining the field
- **Essential Skills**: Organized by category with bullet lists
- **Daily Tasks**: Grouped by activity type with bullet lists
- **Highlight Boxes**: Career tips or industry insights

## Styling Conventions

### Colors (CSS Variables)

Located in `:root` selector in `css/styles.css`:
- Primary: `--primary-color: #2563eb`
- Secondary: `--secondary-color: #10b981`
- Accent: `--accent-color: #8b5cf6`

### Responsive Breakpoints

- Desktop: Default (>768px)
- Tablet: `@media (max-width: 768px)`
- Mobile: `@media (max-width: 480px)`

## Common Development Tasks

### Updating Content

1. Edit HTML files directly in `index.html` or `pages/`
2. Test locally by opening in browser
3. Commit and push changes

### Modifying Styles

1. Edit `css/styles.css`
2. Use browser dev tools to test changes
3. Ensure responsive design still works
4. Test on multiple screen sizes

### Adding Features

1. Add functionality to `js/main.js`
2. Follow existing code structure (IIFE pattern)
3. Ensure accessibility is maintained
4. Test across browsers

## Deployment

### GitHub Pages

The site is designed for GitHub Pages deployment:

1. Push code to repository
2. Enable GitHub Pages in repository settings
3. Select branch and `/ (root)` folder
4. Site will be live at: `https://USERNAME.github.io/LearnTechComm/`

See `DEPLOYMENT.md` for detailed instructions.

### Important Deployment Notes

- All paths must be relative (never absolute)
- Files are case-sensitive on GitHub Pages
- Changes take 1-3 minutes to deploy
- Test locally before pushing

## Browser Compatibility

Target browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Skip to main content link
- Sufficient color contrast ratios
- Responsive font sizing
- Focus indicators for interactive elements

## Performance Considerations

- No external dependencies (no CDNs, frameworks)
- Minimal JavaScript (vanilla only)
- CSS is non-blocking
- Images should be optimized before adding
- Uses system fonts for fast loading

## Content Sources

All content is researched from authoritative sources:
- U.S. Bureau of Labor Statistics
- Technical writing industry publications
- Professional organizations (STC, etc.)
- Academic resources

## Maintenance

### Regular Updates

- Keep content current with industry changes
- Update salary information annually
- Refresh skills based on job market trends
- Test on new browser versions

### Quality Checks

Before committing significant changes:
- [ ] Test all navigation links
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Check JavaScript console for errors
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Test accessibility (keyboard navigation)
- [ ] Proofread content for typos

## Future Enhancements

Potential improvements to consider:
- Add search functionality
- Include video content or tutorials
- Add job board integration
- Create downloadable career guides
- Add interactive skill assessment
- Include portfolio examples

## Notes

- This is a static website with no backend or database
- No build process or bundling required
- No package.json or node_modules
- Pure HTML/CSS/JS for maximum simplicity and portability
