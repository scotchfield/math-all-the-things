# Math All The Things!
Math study helper with Preact and Aphrodite

<img width="1053" alt="math-all-the-things" src="https://cloud.githubusercontent.com/assets/5611966/26362024/c33fccd0-3faa-11e7-9f8e-4a41f4e99390.png">

## Building the bundle
Clone the repo and run npm install followed by webpack. The bundled JavaScript should be available in public/bundle.js. Yay!

## Adding new operations
Each operation button is generated using the object exported from src/operations.js. To add a new operation, you just need to provide an appropriate key, and an object with two properties: a symbol string which specifies the button content and how the question is formatted, and a function f which accepts two arguments and produces the content for the answer block.

## Component styling
Components are defined using [Preact](https://preactjs.com/) and are styled using [Aphrodite](https://github.com/Khan/aphrodite).
