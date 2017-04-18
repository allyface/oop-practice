# Bike Shop

Model the inventory of a bike shop (bicycle types and parts) using object-oriented JavaScript.

There are 4 stages, each which builds upon some core OOP concept:

1. Object **literals**
2. **Constructor** functions
3. Instance **methods**
4. Classical **inheritance**

Each of these stages has its own test file in `test/` and source code file in `src/`. Run the tests and edit the source code files to make them pass.

## Installation

To run the tests, you need a working copy of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).

Once you have those set up, install all dependencies specified in the `package.json` with the `npm install` command:

```shell
$ cd /path/to/bike-shop
$ npm install
...
```

## Usage

Run your tests with variants of the `$ npm run test` command:

```shell
$ npm test              # run all tests
$ npm run test:stage1   # run stage 1 tests only
$ npm run test:stage2   # run stage 2 tests only
$ npm run test:stage3   # run stage 3 tests only
$ npm run test:stage4   # run stage 4 tests only
```

Edit the corresponding source code files in `src/` to make the tests pass.

For the curious, the tests are written with the [Jest](https://facebook.github.io/jest/) testing framework.
