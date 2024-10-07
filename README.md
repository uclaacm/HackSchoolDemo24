## Useful Links

- [Vite's Official Documentation](https://vitejs.dev/guide/)

# Styling
- [Tailwind CSS Guide for Vite](https://tailwindcss.com/docs/guides/vite)
- [Tailwind CSS Plugins Documentation](https://tailwindcss.com/docs/plugins)
- [tailwindcss-animate GitHub](https://github.com/tailwindlabs/tailwindcss-animate)
- [@tailwindcss/typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- [ShadCN Themes](https://ui.shadcn.com/themes)
- [Emojis](https://unicode.org/emoji/charts/full-emoji-list.html)

```bash
# Create a new Vite project with React and TypeScript
npm create vite@latest name-of-my-react-app -- --template react-ts

# Navigate to your project folder
cd name-of-my-react-app

# Install dependencies
npm install

# Run the development server
npm run dev

# Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS configuration files
npx tailwindcss init -p

# Install additional Tailwind CSS plugins for animations and typography
npm install -D tailwindcss-animate @tailwindcss/typography

# Install React Router DOM and type definitions for TypeScript
npm install react-router-dom
npm install @types/react-router-dom