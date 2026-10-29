# Kazi Sajedul Mahbub Arpon | Portfolio

A fast, fully responsive personal portfolio website for **Kazi Sajedul Mahbub Arpon**, a Full Stack Developer and Computer Science & Engineering student at Daffodil International University (DIU).

**Live site:** https://kaziaurpon.github.io/Kazi-Arpon-Portfolio/

---

## Overview

This portfolio presents my background, skills, education, leadership experience and featured projects in one clean, easy-to-navigate site. It is built with plain HTML, CSS and JavaScript, so it loads fast and needs no build step.

## Features

- **Responsive navbar** with a mobile menu and active-section highlighting
- **Hero section** with my designation, professional photo, resume download button and social links
- **About Me** section covering my journey, the work I enjoy and my interests
- **Skills** shown as animated progress bars, grouped by category (Frontend, Backend & Database, Tools)
- **Education** and **Experience & Leadership** timelines
- **Projects** shown as cards, each linking to a detailed page with the tech stack, description, live link, GitHub repository, challenges faced and future improvements
- **Contact** section with email, phone and WhatsApp
- **Fully responsive** layout for desktop, laptop, tablet and mobile

## Featured Projects

| Project | Description | Live | Code |
| --- | --- | --- | --- |
| **Bazar-Dor** | Bangla web app that tracks the daily prices of everyday essentials in Bangladesh | [Live](https://bazar-dor-beryl-five.vercel.app) | [GitHub](https://github.com/kaziaurpon/Bazar-Dor) |
| **FitLog** | Dark-themed workout library with a daily plan and live exercise, minute and calorie totals | [Live](https://fitlog-by-aurpon.vercel.app) | [GitHub](https://github.com/kaziaurpon/FitLog-by-Aurpon) |
| **Tender Package Builder** | Frontend-only app that validates tender PDFs and generates a complete submission package | [Live](https://ai-dev-fest-2026-kazi-aurpon-4edoxhvpx-aurpon.vercel.app) | [GitHub](https://github.com/kaziaurpon/AI-Dev-Fest-2026-Kazi_Aurpon) |

## Tech Stack

- **HTML5** for structure
- **CSS3** for layout, theming and responsive design (Grid, Flexbox, media queries)
- **JavaScript (ES6)** for rendering content, navigation behavior and scroll animations
- **GitHub Pages** for hosting

## Project Structure

```
Kazi-Arpon-Portfolio/
├── index.html          # Main page (all sections)
├── project.html        # Project details page (loads a project by id)
├── css/
│   └── style.css       # All styles and responsive rules
├── js/
│   ├── data.js         # All personal content (profile, skills, projects, contact)
│   ├── main.js         # Renders the main page and handles navigation
│   └── project.js      # Renders the project details page
└── assets/             # Photo, resume and project screenshots
```

All content lives in `js/data.js`, so the site can be updated without touching the HTML.

## Run Locally

```bash
# Clone the repository
git clone https://github.com/kaziaurpon/Kazi-Arpon-Portfolio.git
cd Kazi-Arpon-Portfolio
```

Then open the folder in VS Code and run **index.html** with the Live Server extension, or start any local server, for example:

```bash
python3 -m http.server 5500
```

and open `http://localhost:5500`.

## Customize

1. Edit `js/data.js` to change your name, designation, about text, skills, education, experience, projects and contact details.
2. Replace the images in `assets/` (photo and project screenshots) and put your resume at `assets/resume.pdf`.

## Deployment

The site is deployed with **GitHub Pages** from the `main` branch (root folder). Every `git push` to `main` updates the live site automatically. It can also be deployed on Vercel or Netlify with no extra configuration.

## Contact

- **Email:** kaziaurpon1@gmail.com
- **GitHub:** [github.com/kaziaurpon](https://github.com/kaziaurpon)
- **LinkedIn:** [linkedin.com/in/kazi-arpon](https://www.linkedin.com/in/kazi-arpon)

---

&copy; 2026 Kazi Sajedul Mahbub Arpon. All rights reserved.
