This repo is a test of several patterns and approaches for writing Angular 1.x applications with ES6.

The goal is to better understand the use of classes and how it can impact the development process. Secondary goals are to understand how different tooling systems work.

### Get started

Clone the repo, install node modules, install jspm packages, and run gulp for dev server.

    git clone https://github.com/gnomeontherun/angular-1x-es6.git
    cd angular-1x-es6
    npm install
    jspm install
    gulp

# Services

There is only one service currently, implemented as a class. Notice the number of times we have to declare the dependencies.

# Directives

There are two versions of the same directive, `github-commits-class` and `github-commits-proto`.
