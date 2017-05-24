# Math All The Things!
Math study helper with Preact and Aphrodite

<img width="1053" alt="math-all-the-things" src="https://cloud.githubusercontent.com/assets/5611966/26362024/c33fccd0-3faa-11e7-9f8e-4a41f4e99390.png">

Click the **Question** button to generate a question, see if you can come up with the answer, and click **Toggle Answer** to check your work!

Use the row of numbers to include or exclude numbers from the generated questions. For example, clicking on the zero will prevent zero from appearing in the question.

Use the row of operations to choose which operator to generate questions with. For example, if you want to work on your times-tables, choose the multiplication operator, and generate questions until you've completed a good study session.

## Building the bundle
Clone the repo and run npm install followed by webpack. The bundled JavaScript should be available in public/bundle.js. Yay!

## Adding new operations
Each operation button is generated using the object exported from src/operations.js. To add a new operation, you just need to provide an appropriate key, and an object with two properties: a symbol string which specifies the button content and how the question is formatted, and a function f which accepts two arguments and produces the content for the answer block.

## Component styling
Components are defined using [Preact](https://preactjs.com/) and are styled using [Aphrodite](https://github.com/Khan/aphrodite).
