# Deploy a React App in Minutes: Codespaces & GH Pages

## Commands to type in codespace:
- `npm install`
- `npm install --save gh-pages`


## in `package.json` add:
```json
"homepage": "https://muslewski.github.io/repo-name",
```
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
```


## in `vite.config.js` add:
```js
export default defineConfig({ 
  base: '/pol-med.tech/',
  ...
})
```

## Deploy your app
`npm run deploy`
