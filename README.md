# Shopify Theme Template 2.0 - Boilerplate

This is a boilerplate for Shopify theme development. It includes a Webpack setup with SCSS and ES6 support, as well as a few other goodies.

## Features

- Webpack 5
- SCSS support
- ES6 support
- Tailwind CSS
- Shopify Theme Kit

## Getting Started

1. Clone this repository
2. Configure your `config.yml` file
3. Run `npm install`
4. Run `npm run dev` to start the development server

## Define JS and SCSS

Define JS, SCSS file or directories of the `src` directory in the `modules.json` file. This file is used to generate the entry points for Webpack. Each file will be compiled to a separate file in the `assets` directory as `.min.js` or `.min.css.`

## Deployment

- Run `npm run build` to build and minimize the theme
- Run `npm run deploy` to build and deploy the theme to Shopify

## License

This project is open source. Enjoy your coding!
