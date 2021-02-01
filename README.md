# TypeScript Web Scraper

## This is an API for web scraping

### This project uses the [simple typescript starter](https://github.com/stemmlerjs/simple-typescript-starter) project. The project follows the clean architecture 

### &nbsp;

## Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

### &nbsp;

## Libraries used
* This project uses [puppeteer](https://github.com/berstend/puppeteer-extra) for web scraping
* This project uses the [express](https://github.com/expressjs/express) router