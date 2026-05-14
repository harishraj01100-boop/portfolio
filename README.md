# Harish Raj T - Portfolio Website

A professional, corporate-styled portfolio website built with React and Tailwind CSS, designed to showcase full-stack development skills and attract full-time employment opportunities.

## 🎨 Design Features

- **Professional Corporate Aesthetic**: Clean, sophisticated design with navy/slate color scheme and strategic gold accents
- **Premium Typography**: Crimson Pro for elegant headings paired with Work Sans for clarity
- **Smooth Animations**: Subtle fade-in effects and micro-interactions for a polished feel
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO-Friendly**: Semantic HTML structure for better search engine visibility

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Create a new React app with Vite**:
```bash
npm create vite@latest harishraj-portfolio -- --template react
cd harishraj-portfolio
```

2. **Install dependencies**:
```bash
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Configure Tailwind CSS** - Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. **Update `src/index.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Replace `src/App.jsx`** with the portfolio component code

6. **Run the development server**:
```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

## 📁 Project Structure

```
harishraj-portfolio/
├── public/
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── index.css        # Tailwind CSS imports
│   └── main.jsx         # React entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Customization Guide

### Adding Project Screenshots

When you have screenshots of your Billing System project:

1. Create an `assets` folder in `src/`
2. Add your images there
3. Update the projects array in the component:

```javascript
const projects = [
  {
    title: 'Billing System Management',
    image: '/src/assets/billing-screenshot.png', // Add this line
    // ... rest of the project data
  }
];
```

### Updating Contact Information

All contact details are already populated from your resume:
- Email: harishraj01100@gmail.com
- Phone: +91 9092890495
- LinkedIn: linkedin.com/in/harishraj25/
- GitHub: github.com/harishraj01100-boop

### Adding More Projects

Add new projects to the `projects` array:

```javascript
{
  title: 'Your Project Name',
  type: 'Project Type',
  description: 'Brief description',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  features: [
    'Feature 1',
    'Feature 2'
  ],
  link: 'https://github.com/yourusername/project'
}
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update `package.json`**:
```json
{
  "homepage": "https://harishraj01100-boop.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update `vite.config.js`**:
```javascript
export default {
  base: '/portfolio/',
  // ... other config
}
```

4. **Deploy**:
```bash
npm run deploy
```

### Option 2: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy
5. Your site will be live at `https://your-project.vercel.app`

### Option 3: Netlify

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live instantly

### Option 4: Custom Domain (harishraj.dev)

Once you purchase your domain:

**For Vercel:**
1. Go to your project settings
2. Add custom domain
3. Update DNS records as instructed

**For Netlify:**
1. Site settings → Domain management
2. Add custom domain
3. Configure DNS

## 📱 Sections Overview

1. **Hero Section**: Eye-catching introduction with clear CTA buttons
2. **About Section**: Professional summary highlighting MCA degree and expertise
3. **Skills Section**: Organized by category (Languages, Web, Mobile, Tools)
4. **Projects Section**: Detailed showcase of Billing System and WordPress projects
5. **Experience Section**: Timeline of internships at Pentagon Innovations and Folkus Network
6. **Contact Section**: Multiple contact methods prominently displayed

## 🎨 Color Palette

- Primary Navy: `#0f172a` (slate-900)
- Secondary Slate: `#334155` (slate-700)
- Accent Gold: `#d97706` (amber-600)
- Light Background: `#f8fafc` (slate-50)
- White: `#ffffff`

## 💡 Tips for Success

### Before Sending to Recruiters:

1. ✅ Add screenshots of your Billing System project
2. ✅ Ensure all GitHub project links work
3. ✅ Test on mobile devices
4. ✅ Add a professional headshot (optional but recommended)
5. ✅ Update meta tags for social sharing
6. ✅ Add Google Analytics (optional)

### SEO Optimization:

Update `index.html` with:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Harish Raj T - Full-Stack Developer specializing in Flutter, React, and database optimization. MCA Graduate seeking full-time opportunities." />
  <meta name="keywords" content="Full-Stack Developer, Flutter Developer, React Developer, Chennai, MCA Graduate" />
  <meta property="og:title" content="Harish Raj T - Full-Stack Developer" />
  <meta property="og:description" content="Building scalable solutions with Flutter, React, and modern web technologies" />
  <title>Harish Raj T | Full-Stack Developer</title>
</head>
```

## 🔧 Troubleshooting

### Tailwind styles not working?
- Ensure `tailwind.config.js` has the correct content paths
- Check that `index.css` has the `@tailwind` directives

### Icons not showing?
- Verify `lucide-react` is installed: `npm install lucide-react`

### Build errors?
- Clear cache: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`

## 📈 Next Steps

1. **Add Analytics**: Track visitor behavior with Google Analytics
2. **Blog Section**: Share technical articles to demonstrate expertise
3. **Testimonials**: Add recommendations from internship supervisors
4. **Certificate Showcase**: Display relevant certifications
5. **Dark Mode Toggle**: Add theme switching capability

## 📞 Support

If you need help customizing or deploying:
- Email: harishraj01100@gmail.com
- LinkedIn: [linkedin.com/in/harishraj25/](https://www.linkedin.com/in/harishraj25/)

## 📄 License

This portfolio template is free to use and modify for personal purposes.

---

**Built with ❤️ using React, Tailwind CSS, and Vite**

Good luck with your job search! 🚀
