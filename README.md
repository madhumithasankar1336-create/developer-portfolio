# Developer Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript (no frameworks, no build step). It has a dark/light theme, project modals, a validated contact form and a resume download area.

> Everything is a template: personal links, resume and project URLs are placeholders until you fill them in. Nothing here is deployed yet.

## Features
- Fixed navbar, smooth scrolling, active-link highlight, mobile hamburger menu
- Dark theme by default, light theme option saved in `localStorage`
- Hero, About, Skills, Projects, Education, Achievements (hidden until filled), Resume, Contact
- Project cards with detail modals; missing links show "Coming Soon"
- Contact form with validation and honest status messages
- Scroll reveal animations, back-to-top button, reduced-motion support
- All personal data lives in `js/config.js` and `js/projects.js`

## Technologies
HTML5, CSS3 (Flexbox, Grid), JavaScript ES6+, Google Fonts (Inter, Sora), Font Awesome icons (CDN).

## Folder structure
```
developer-portfolio/
├── index.html
├── css/style.css
├── js/
│   ├── main.js        (rendering and interactions)
│   ├── projects.js    (your projects)
│   └── config.js      (your personal details)
├── assets/
│   ├── images/
│   │   ├── profile-placeholder.png
│   │   └── projects/
│   └── resume.pdf     (you add this)
├── README.md
└── .gitignore
```

## Run locally
1. Install VS Code and the **Live Server** extension.
2. Open the `developer-portfolio` folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (or just double-click `index.html`).

Internet is needed for Google Fonts and Font Awesome icons.

## Customize your details
Open `js/config.js` and edit:
- `name`, `role`, `headline`, `intro`
- `links.email`, `links.github`, `links.linkedin` (leave `""` until you have them)
- `about`, `skills`, `education` (fill in your degree and graduation year)
- `achievements`: add only real, verified items. The section appears once the list is not empty.

Profile photo: save a square image as `assets/images/profile-placeholder.png` (or change `profileImage`).

## Add or edit projects
Open `js/projects.js`. Copy one object, change its fields and save. Set `demoUrl` and `repoUrl` to real URLs when they exist; empty values show "Coming Soon". For a project image, put a file in `assets/images/projects/` and set `image: "assets/images/projects/name.png"`. To remove a project, delete its object.

## Add your resume
1. Save your PDF as `assets/resume.pdf`.
2. In `js/config.js` set `resume: { path: "assets/resume.pdf", available: true }`.

## Make the contact form really send
The form validates input but sends nothing until you connect a service:
1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint URL.
2. Paste it into `formEndpoint` in `js/config.js`.
(Netlify Forms or EmailJS also work, but need small code changes.)

## Put it on GitHub
1. Sign in at github.com, click **New repository**, name it (for example `developer-portfolio`), leave it empty, click **Create**.
2. In the project folder, run:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/developer-portfolio.git
git push -u origin main
```

## Deploy
**GitHub Pages:** repository **Settings > Pages**, set Source to *Deploy from a branch*, choose `main` and `/ (root)`, Save. After a minute the URL appears at the top of that page: `https://YOUR-USERNAME.github.io/developer-portfolio/`.

**Netlify:** log in at netlify.com, **Add new site > Import an existing project**, pick your GitHub repo. Leave build command empty and publish directory as `/`, then **Deploy**. The live URL is shown on the site dashboard.

**Vercel:** log in at vercel.com, **Add New > Project**, import the repo, set Framework Preset to *Other*, leave build settings empty, **Deploy**. The URL appears after the deploy finishes.

## Update after changes
```
git add .
git commit -m "Update portfolio"
git push
```
GitHub Pages, Netlify and Vercel redeploy automatically.

## Screenshots
Add your own after deploying:
- `![Home](screenshots/home.png)` (placeholder)
- `![Projects](screenshots/projects.png)` (placeholder)
- `![Light mode](screenshots/light.png)` (placeholder)
