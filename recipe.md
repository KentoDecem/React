## in `package.json` add:
"homepage": "https://muslewski.github.io/repo-name",

"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},


## in 'vite.config.js' add:
export default defineConfig({ 
  base: '/pol-med.tech/',
  ...
})
