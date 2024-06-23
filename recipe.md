# Deploy a React App in Minutes: Codespace & GH Pages

## Commands to type in codespace:
```shell
$ npm install
$ npm install --save gh-pages
```


## in `package.json` add:
```diff
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://muslewski.github.io/react-gh-pages",
  "private": true,

  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d dist"
  },
```



## in `vite.config.js` add:
```diff
export default defineConfig({
+ base: '/repo-name/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
```

## Deploy your app
```shell
$ npm run deploy
```
