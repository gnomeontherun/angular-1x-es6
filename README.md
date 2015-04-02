This repo is a test of several patterns and approaches for writing Angular 1.x applications with ES6.

The goal is to better understand the use of classes and how it can impact the development process. Secondary goals are to understand how different tooling systems work.

This app is not intended to be representative of quality application structure, but designed to more quickly compare the same concepts with different patterns.

### Get started

Clone the repo, install node modules, install jspm packages, and run gulp for dev server.

    git clone https://github.com/gnomeontherun/angular-1x-es6.git
    cd angular-1x-es6
    npm install
    jspm install
    gulp

# Services

There are two versions of the `Commits` service, one implemented as a class (`app/services/commits-class.js`) and the other just as a function (`app/services/commits-proto.js`).

# Directives

There are two versions of the `githubCommits` directive, one implemented as a class (`app/components/github-commits-class.js`) and the other just as a function (`app/components/github-commits-proto.js`).
