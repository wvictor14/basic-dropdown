# wvictor14/template-js

Template repository created for JS.

Contains basic configuration for Js projects. Use when starting a new git repo, select as template

## Features:  

### Webpack for bundler

### Linting 

Eslint for JS

To use, install eslint manually and follow interactive prompts
  
- `npm init @eslint/config@latest`
- JS modules
       
### Formatter: Prettier
  
### scripts

In `package.json`

`npm run deploy` 

- what it does: pushes dist folder to gh-pages branch
- setup: turn on gh-pages and set to publish `/dist` foler in github repo settings

### src/

-  empty `template.html`, `index.js`, and `styles.css` files under `/src`

### plugins

  - html
  - css loader
  - source map (dev)
  - asset loader (e.g. images)
