# LTD Atkinson Portfolio Website

A modern, premium portfolio website showcasing instructional design work and expertise.

## 🌟 Features

- **Premium Dark Mode Design** - Glassmorphism effects, gradient animations, and smooth transitions
- **Responsive Layout** - Works beautifully on desktop, tablet, and mobile devices
- **Interactive Portfolio** - Filterable project showcase with detailed cards
- **Modern Tech Stack** - Built with Rust/Axum backend (Node.js fallback included)
- **SEO Optimized** - Proper meta tags, semantic HTML, and accessibility features

## 🚀 Quick Start

### Using Node.js (Recommended for now)

```bash
# Start the development server
npm start

# Or use Node directly
node server.js
```

The website will be available at `http://localhost:3000`

### Using Rust/Axum (Requires MSVC Build Tools)

```bash
# Build the project
cargo build --release

# Run the server
cargo run --release
```

## 📁 Project Structure

```
ltdatkinson/
├── static/              # Frontend files
│   ├── css/
│   │   ├── design-system.css  # Design tokens and utilities
│   │   └── main.css           # Main styles
│   ├── js/
│   │   └── app.js            # Interactive JavaScript
│   ├── images/               # Project images
│   ├── index.html           # Homepage
│   ├── portfolio.html       # Portfolio page
│   └── about.html           # About page
├── src/
│   └── main.rs              # Rust/Axum server
├── server.js                # Node.js fallback server
├── Cargo.toml               # Rust dependencies
└── package.json             # Node.js configuration
```

## 🎨 Design System

The website uses a comprehensive design system with:

- **Color Palette**: Deep purples, vibrant blues, and accent gradients
- **Typography**: Playfair Display for headings, Inter for body text
- **Components**: Glass cards, gradient buttons, animated sections
- **Animations**: Fade-in effects, smooth scrolling, hover transitions

## 📄 Pages

1. **Home** (`/`) - Hero section, featured projects, core competencies
2. **Portfolio** (`/portfolio.html`) - Complete project showcase with filtering
3. **About** (`/about.html`) - Professional background and philosophy

## 🔧 Technologies

- **Backend**: Rust with Axum web framework (Node.js fallback)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design**: Custom design system with CSS variables
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 🌐 Deployment

This website is ready to deploy to **ltdatkinson.com**. Deployment options:

1. **Static Hosting** (Netlify, Vercel, GitHub Pages)
   - Deploy the `static/` folder directly
   
2. **VPS/Cloud** (DigitalOcean, AWS, Azure)
   - Run the Rust server or Node.js server
   - Configure reverse proxy (nginx/caddy)
   
3. **Rust Deployment**
   - Build release binary: `cargo build --release`
   - Deploy binary and static files to server

## 📝 Content

Portfolio projects are based on your LTD portfolio documents:

- Daydream ADDIE
- Daydream Initiative: Content Synthesis
- Technology Badge Content Creation
- Instructional Design Document
- Evaluating Instructional Design Ethics
- Portfolio Badge Content Creation
- File Completion Guide

## 🎯 Next Steps

1. **Add Content**: Update project descriptions with detailed content from your Word documents
2. **Add Images**: Place project screenshots in `static/images/`
3. **Customize**: Adjust colors, fonts, or content to match your preferences
4. **Deploy**: Choose a hosting provider and deploy to ltdatkinson.com

## 📞 Support

For questions or issues, refer to the implementation plan in the `.gemini` artifacts directory.

---

**Built with ❤️ for LTD Atkinson | ltdatkinson.com**
