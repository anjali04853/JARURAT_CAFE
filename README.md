# Cancer Awareness & Support Web Page

🔗 **Live Site**: [https://capable-truffle-96a81b.netlify.app/](https://capable-truffle-96a81b.netlify.app/)

A responsive, accessible web application dedicated to cancer awareness, support, and inspiration. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Contact Form**: Fully validated form with real-time feedback
- **Daily Inspiration**: Integrated quote API with fallback quotes
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation
- **Cross-browser Compatible**: Works on all modern browsers
- **Smooth Animations**: Enhanced UX with CSS animations and transitions

## Project Structure

```
├── assingment/
│   └── index.html          # Main HTML file
├── script.js               # JavaScript functionality
├── styles.css              # CSS styling
├── script.test.js          # Property-based tests
├── test-runner.js          # Test execution script
├── .kiro/
│   └── specs/              # Feature specifications
├── README.md               # This file
└── .gitignore              # Git ignore rules
```

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for running tests)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cancer-awareness-support.git
cd cancer-awareness-support
```

2. Open the application:
   - Simply open `assingment/index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. Visit `http://localhost:8000/assingment/` in your browser

### Running Tests

```bash
node test-runner.js
```

This runs all property-based tests to verify correctness properties.

## Features Overview

### Contact Form
- Validates name, email, and message fields
- Real-time validation feedback
- Success/error messages
- Clears form after successful submission

### Daily Inspiration
- Fetches quotes from Quotable API
- Fallback quotes for offline scenarios
- Loading state indicator
- Smooth quote transitions

### Responsive Layout
- Mobile: Optimized for small screens
- Tablet: Medium spacing and layout adjustments
- Desktop: Full-width experience with enhanced spacing

## Deployment Options

### Option 1: GitHub Pages

1. Push code to GitHub:
```bash
git add .
git commit -m "Initial commit: Cancer Awareness & Support web page"
git branch -M main
git remote add origin https://github.com/yourusername/cancer-awareness-support.git
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Click Save

3. Your site will be available at: `https://yourusername.github.io/cancer-awareness-support/`

### Option 2: Netlify

1. Connect your GitHub repository:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository

2. Configure build settings:
   - Build command: (leave empty - static site)
   - Publish directory: `.` (root directory)

3. Deploy:
   - Click "Deploy site"
   - Your site will be live at a Netlify URL

### Option 3: Vercel

1. Deploy with Vercel CLI:
```bash
npm i -g vercel
vercel
```

2. Or connect via GitHub:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. Your site will be available at a Vercel URL

## Accessibility

This project follows WCAG 2.1 guidelines:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Reduced motion support

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Performance

- Optimized CSS with minimal specificity
- Vanilla JavaScript (no framework overhead)
- CSS gradients instead of images
- Lazy loading ready for images
- Minimal bundle size

## Testing

The project includes comprehensive property-based tests covering:
- Form validation correctness
- Form submission behavior
- Quote display functionality
- API failure handling
- Responsive layout behavior

Run tests with: `node test-runner.js`

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything passes
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please:
- Open an issue on GitHub
- Contact the development team
- Check the project documentation

## Acknowledgments

- Quote API: [Quotable.io](https://quotable.io)
- Inspiration from cancer awareness organizations
- Community feedback and support

---

**Last Updated**: December 2025
**Version**: 1.0.0
