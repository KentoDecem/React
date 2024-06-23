# Deploy a React App in Minutes: Codespaces & GH Pages

## Commands to type in codespace:
```shell
$ npm install
$ npm install --save gh-pages
```


## in `package.json` add:
```json
"homepage": "https://muslewski.github.io/repo-name",
```
```diff
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://gitname.github.io/react-gh-pages",
  "private": true,
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d dist"
  },
```

```json

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
