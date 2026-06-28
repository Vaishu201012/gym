# Beast Gym - React + Vite + Tailwind

Beast gym landing page Figma design-ஐ React, Vite, Tailwind CSS use பண்ணி build பண்ணது.

## Folder Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Facilities.jsx
    CalculateBmi.jsx
    Schedule.jsx
    Reviews.jsx
    Pricing.jsx
    Coaches.jsx
    Blog.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

## Local-ல run பண்ண (Step by Step)

```bash
npm install
npm run dev
```

Browser-ல `http://localhost:5173` open ஆகும்.

## Production build

```bash
npm run build
```

`dist` folder-ல build output கிடைக்கும்.

## GitHub-ல Push பண்ண (Step by Step)

1. github.com-ல login பண்ணி, புது repository create பண்ணுங்க (e.g. `beast-gym`). README/.gitignore add பண்ணாதீங்க, already இருக்கு.
2. Terminal-ல இந்த project folder-க்கு போங்க, பின் இந்த commands run பண்ணுங்க:

```bash
git init
git add .
git commit -m "Beast gym landing page - React Vite Tailwind"
git branch -M main
git remote add origin https://github.com/<your-username>/beast-gym.git
git push -u origin main
```

## Netlify-ல Deploy பண்ண (Step by Step)

1. https://app.netlify.com -ல login பண்ணுங்க (GitHub account-ஓட login பண்ணலாம்).
2. "Add new site" -> "Import an existing project" click பண்ணுங்க.
3. GitHub select பண்ணி, உங்க `beast-gym` repo select பண்ணுங்க.
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. "Deploy site" click பண்ணுங்க. சில நிமிஷத்தில் live link கிடைக்கும்.

## Vercel-ல Deploy பண்ண (Alternative)

1. https://vercel.com -ல login பண்ணி "Add New Project" click பண்ணுங்க.
2. GitHub repo import பண்ணுங்க (`beast-gym`).
3. Framework preset automatic-ஆ "Vite" detect ஆகும். அப்படியே "Deploy" click பண்ணுங்க.
4. Deploy முடிஞ்சதும் live URL கிடைக்கும்.

## Submission-ல என்ன கொடுக்கணும்

- GitHub Repository link: `https://github.com/<your-username>/beast-gym`
- Live Deployment link: Netlify அல்லது Vercel கொடுக்கும் URL
