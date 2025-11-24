# Portfolio Context & Documentation

## Project Overview

This is Joshua Atkinson's Master's Capstone Portfolio for Learning Design & Technology (LDT) program.
The portfolio showcases 23 artifacts demonstrating competency across all major ID domains.

## Technology Stack

- **Frontend Framework**: React 18 with Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v3 (glassmorphism design system)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (from `/docs` folder)

## Project Structure

```text
client/
├── src/
│   ├── App.jsx              # Main router component
│   ├── main.jsx             # React entry point
│   ├── index.css            # Tailwind directives
│   ├── components/
│   │   ├── Navigation.jsx   # Shared navigation bar
│   │   └── Footer.jsx       # Shared footer
│   ├── pages/
│   │   ├── Home.jsx         # Landing page with hero
│   │   ├── Portfolio.jsx    # 23 artifacts with filtering
│   │   ├── About.jsx        # Philosophy & background
│   │   └── Daydream.jsx     # Capstone project showcase
│   └── data/
│       └── artifacts.js     # All 23 portfolio artifacts with reflections
├── public/                  # Static assets
├── index.html               # HTML entry point
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies
```

## Pages

### Home (`/`)

Landing page with hero section and featured work cards linking to Portfolio, About, and Daydream pages.

### Portfolio (`/portfolio`)

Main competency showcase with all 23 artifacts, category filtering, and modal reflections.

### About (`/about`)

Philosophy, background, core competencies, and mission statement.

### Daydream (`/daydream`)

Capstone project showcase with problem statement, solution, technical architecture, and impact.

## Key Files to Edit

### 1. Home Page (`src/pages/Home.jsx`)

The landing page with hero section and featured work cards.

- Edit lines 30-50 for hero content
- Edit lines 80-120 for featured work descriptions

### 2. Portfolio Page (`src/pages/Portfolio.jsx`)

All 23 artifacts with category filtering and modal reflections.
This is the main competency showcase.

### 3. About Page (`src/pages/About.jsx`)

Philosophy, background, and competencies.

- Edit bio section (lines 40-60) to update personal information
- Edit philosophy section (lines 65-95) for design principles
- Edit competencies (lines 100-120)

### 4. Daydream Page (`src/pages/Daydream.jsx`)

Capstone project showcase with technical details.

- Edit problem statement (lines 40-55)
- Edit solution features (lines 60-100)
- Edit technical stack (lines 120-140)

### 5. Navigation (`src/components/Navigation.jsx`)

Shared navigation bar across all pages.
Routes: `/`, `/portfolio`, `/about`, `/daydream`

### 6. Artifact Data (`src/data/artifacts.js`)

Each artifact has this structure:

```javascript
{
  id: "uniqueId",
  title: "Display Title",
  challenge: "Challenge: Competency Statement",
  category: "One of 5 categories",
  iconPath: "SVG path data",
  summary: "Brief overview (shows on card)",
  reflection: `<p>Full HTML reflection...</p>`,
  linkText: "Link button text",
  linkUrl: "URL to artifact"
}
```

### 7. Categories (`src/data/artifacts.js`)

The 5 competency categories:

- Professional Foundations
- Planning & Analysis
- Design & Development
- Evaluation & Implementation
- Applying ID Research & Theory

## Design System

- **Background**: `bg-slate-950` (very dark)
- **Cards**: `bg-slate-800/40` with glassmorphism (`backdrop-blur-md`)
- **Accents**: Indigo/Purple/Pink gradients
- **Text**: White headings, `slate-300` body
- **Animations**: Pulse effects, hover transitions
- **Navigation**: Sticky top bar with active state highlighting

## Common Edits

### Change Bio/Introduction

Edit `src/pages/Home.jsx` (hero section) and `src/pages/About.jsx` (bio section)

### Add/Edit Artifacts

Edit `src/data/artifacts.js` - add new objects to the ARTIFACTS array

### Change Color Scheme

Search and replace color classes across pages:

- `indigo-` → change to another color
- `purple-` → change to another color
- `slate-` → change to another dark color

### Update Links

Edit the `linkUrl` property in each artifact object in `src/data/artifacts.js`

### Add New Pages

1. Create new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

## Running Locally

```bash
cd client
npm install
npm run dev
```

Site runs at: <http://localhost:5173>

## Deployment to GitHub Pages

The old `docs_backup/` folder contains the previous static HTML site.
The new React app in `client/` needs to be built:

```bash
cd client
npm run build
# This creates a 'dist' folder
```

Then copy `dist/` contents to `docs/` and push to GitHub.

## Current Status

- ✅ All 23 artifacts added with full reflections
- ✅ Multi-page structure with routing
- ✅ Home, Portfolio, About, and Daydream pages
- ✅ Responsive navigation
- ✅ Styling working (Tailwind v3)
- ✅ Modal reflections working
- ✅ Category filtering working

## Future Enhancements

- Add search functionality across artifacts
- Add print/PDF export for portfolio
- Add image galleries for each artifact
- Add video embeds for presentation artifacts
- Add dark/light mode toggle
- Add accessibility improvements (ARIA labels)

## Contact

Joshua Atkinson  
Master's Student - Learning Design & Technology  
Purdue University
