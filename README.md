# Portfolio Website - Ameli Weller

A responsive, privacy-focused personal portfolio website built from scratch. Designed to showcase my projects and skills as a frontend developer, with a focus on clean code, performance, and accessibility.

**Live Demo:** [https://glitch3dcore.github.io/portfolio/](https://glitch3dcore.github.io/portfolio/)

---

## Features

- **Pure Vanilla Stack:** Built with HTML5, CSS3, and plain JavaScript. No heavy frameworks like React or Angular were used to ensure maximum performance and control.
- **Bilingual Support (i18n):** Includes a custom-built, lightweight localization system (JSON-based) to switch seamlessly between German and English.
- **Privacy First (GDPR compliant):** All fonts (Google Fonts) and icons (FontAwesome) are hosted locally. No data is sent to third-party servers like Google or CDNs.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices using CSS Flexbox and Grid.
- **Dark Mode Aesthetic:** A modern, high-contrast design with custom CSS variables.

## Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Properties/Variables), JavaScript (ES6+)
- **Assets:** FontAwesome (Local), Google Fonts (Local: Roboto & Montserrat)
- **Deployment:** GitHub Pages

## Project Structure

```text
/
├── assets/          # PDF files (Resume)
├── css/             # Stylesheets (icons.css)
├── fonts/           # Local font files
├── images/          # Project screenshots & profile pictures
├── locales/         # JSON translation files (de.json, en.json)
├── webfonts/        # Local icon font files
├── index.html       # Main entry point
├── script.js        # Logic for language switch & UI interactions
└── style.css        # Main stylesheet