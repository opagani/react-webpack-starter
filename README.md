# React Webpack Starter

App built using [Webpack](https://webpack.github.io/) as a module bundler, [React](http://facebook.github.io/react/) as a view layer.

## Running it with webpack-dev-server

This is the preferred way to do development.  It uses webpack-dev-server and hot reloading.

You'll need the latest stable version of [Node.js](http://nodejs.org/) installed first.  At least you need node v4.2.2.

```
git clone https://github.com/opagani/react-webpack-starter.git
cd react-webpack-starter
npm install
npm start
```

Then open your browser to: http://localhost:4000

When you run it using `npm start` it will be in development mode which means styles and React components are hotloaded without needing any browser extensions, simply make changes in your editor and save.

## To run a node server (express)

If you preferred to run a node server (express) instead of the webpack-dev-server.  It can also be used for development because it has hot reloading.

```
npm run server
```

Then open your browser to: http://localhost:3000

## To build:

```
npm run build
```

When you run `npm run build` a static site gets created in `/build` which can be deployed to production. You do not need to build the app while you are developing.

## To delete the build directory

```
npm run clean
```

## To add components

Just run `npm start`, write your React components in the `src/components` directory (feel free to use ES6 and JSX).