# GARNE
Setting up a stack with **G**raphQL, **A**pollo, **R**eact, **N**ext and **E**xpress

## What is the purpose of this project
In the company where I work, we have a newly developed stack which is using Apollo & GraphQL. Because I wasn't involved at the time in the development, but still wanted to understand how it works behind the scenes, I tried to recreate the setup by myself. 
should

For me personally the primary goal is to elaborate a very clean commit history which should visualize all required steps for setting up such a stack. At the end this project will hopefully result in kind of a base-project setup, which can be used for developing Web-Apps.

## Environment Setup
1. install [Node.js](https://nodejs.org/en/)
2. install [Yarn](https://yarnpkg.com/lang/en/)

## How to start the client
1. open the CMD and cd to GARNE/client
2. run `yarn` to install all the dependencies
3. to start the project in DEV-Mode run `yarn dev`
4. to create and start a production ready build, run first `yarn build` and afterwards `yarn start`

## How to start the server
1. open the CMD and cd to GARNE/server
2. run `yarn` to install all the dependencies
3. to start the project in DEV-Mode run `yarn dev` (currently there is only a Dev-Mode available)

## Progress
* Apollo & Graphql client setup [done]
* Apollo & Graphql server setup [ongoing]