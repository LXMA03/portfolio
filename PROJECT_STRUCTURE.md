# Project Structure

This portfolio is a Vite + React application for showcasing personal projects, skills, and contact information.

```text
my-portfolio/
├── public/
│   ├── instagram-svgrepo-com.svg
│   ├── linkedin-svgrepo-com.svg
│   └── projects/
│       └── project assets and screenshots
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── toast.jsx
│   │   │   └── toaster.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── hooks/
│   │   └── use-toast.js
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── dist/                  # generated production build
├── node_modules/          # installed dependencies
└── .DS_Store              # macOS metadata file
```

## Purpose of the main folders

- `public/`: static assets and project images that are served directly.
- `src/components/`: reusable UI sections for the portfolio page.
- `src/pages/`: page-level components such as the home and not-found views.
- `src/hooks/`: custom React hooks.
- `src/lib/`: utility functions used across the app.
- `src/assets/`: project assets and media not served as public files.

## Notes

This structure reflects the actual project layout and is intended to help you understand where to add or edit portfolio content, styling, or app logic.
