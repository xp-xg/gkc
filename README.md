# Global Kenya Containers Website

A modern, responsive website for Global Kenya Containers - a leading provider of shipping containers in Kenya.

## Features

- Material Design styling with elevation and shadows
- Responsive design that works on all devices
- Professional navigation with contact information
- Hero section showcasing main services
- Service cards for different container types
- About section with company statistics
- Contact form and information
- SEO optimized

## How to Use in VSCode

### Prerequisites
- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- VSCode - [Download here](https://code.visualstudio.com/)
- Git - [Download here](https://git-scm.com/)

### Installation Steps

1. **Clone or Download the Repository**
   ```bash
   # If using Git
   git clone <YOUR_GIT_URL>
   
   # Or download the ZIP file and extract it
   ```

2. **Open in VSCode**
   - Launch VSCode
   - File → Open Folder
   - Select the project folder

3. **Install Dependencies**
   - Open the integrated terminal in VSCode (Terminal → New Terminal or Ctrl+`)
   - Run:
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   - The site will open at `http://localhost:8080`
   - Changes auto-reload as you edit files

5. **Build for Production**
   ```bash
   npm run build
   ```
   - Creates optimized files in the `dist` folder

### Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.tsx    # Navigation bar
│   ├── Hero.tsx      # Hero section
│   ├── Services.tsx  # Services section
│   ├── About.tsx     # About section
│   ├── Contact.tsx   # Contact section
│   ├── Footer.tsx    # Footer
│   └── ui/           # Shadcn UI components
├── pages/
│   └── Index.tsx     # Main homepage
├── assets/           # Images and media files
├── index.css         # Global styles and design tokens
└── App.tsx           # App configuration

```

### Customization

**Change Colors:**
- Edit `src/index.css` - modify CSS variables under `:root`

**Edit Content:**
- `src/components/Hero.tsx` - Hero section text
- `src/components/Services.tsx` - Service offerings
- `src/components/About.tsx` - Company information
- `src/components/Contact.tsx` - Contact details

**Add New Sections:**
1. Create new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`

**Change Images:**
- Replace images in `src/assets/`
- Update imports in components

### Recommended VSCode Extensions

- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

### Troubleshooting

**Port already in use:**
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

**Dependencies issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment

This project can be deployed to:
- **Lovable**: Click "Publish" in the Lovable editor (fastest deployment)
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Material Design Components
- React Router

## Support

For issues or questions:
- Email: info@globalkenyacontainers.com
- Phone: +254716068548

## License

© 2025 Global Kenya Containers. All rights reserved.
# gkc
