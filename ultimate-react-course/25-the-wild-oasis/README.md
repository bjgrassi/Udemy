## How to deploy on Netlify (No continuous integration)

1. `npm run build`
2. add the **netfly.toml** on **dist** file
3. import the **dist** folder

## How to deploy on Vercel (Continuous integration)

1. Import the git repository
2. Configure the project. "Framework Present" ought to be **Vite**

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
