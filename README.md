# my-vinyls-vue

Playing around with vue 3 composition API and vite.

## generate pages

On an up-to-date `gh-pages` branch, run
```
npm install && npm run build
git add dist -f
git commit -m "update gh-pages"
git subtree push --prefix dist origin gh-pages
```