# Jukebox front-end in React

## Get started

### Install Node

Check if you have node installed via:

    $ node

Otherwise install it from: [nodejs.org](https://nodejs.org)

### Install Node dependencies

`React` is installed via NPM and (along with other dependencies) are located in `/node_modules`.

Install these via:

    $ npm install

### Start the app

    $ npm start

Then in another terminal window:

    $ python -m SimpleHTTPServer

### Run the specs

    $ npm test

### Browserify

[http://browserify.org](http://browserify.org)

Browserify lets you require(‘modules’) in the browser by bundling up all of your dependencies.

### Babelify

[https://github.com/babel/babelify](https://github.com/babel/babelify)

[Babel](https://github.com/babel/babel) Allows new ES6 syntax to be used.

Combines the [Babel](https://github.com/babel/babel) js compiler to work with `Browserify`

### Watchify

[https://github.com/substack/watchify](https://github.com/substack/watchify)

Auto re-compiles any changes you make to the js files automatically for you.

### Flux

[https://facebook.github.io/flux/](https://facebook.github.io/flux/)

"An application architecture for React utilizing a unidirectional data flow."

Essentially it allows us to easily share state between isolated components.

### Karma

[https://karma-runner.github.io](https://karma-runner.github.io)

Karma is a test runner we use for running the specs.

It is configured to run the specs in a headless PhantomJS browser.

It also handles Browserify, Babelify and auto-reloading the specs.

### Jasmine

[http://jasmine.github.io/](http://jasmine.github.io/)

Jasmine is the testing framework we use for writing the specs.

### Immutable

[https://facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)

Immutable js allows the data in the store to be immutable.

This provides an optimisation for React, as it can detect exactly the data that
has changed and thus only re-renders the components effected.
