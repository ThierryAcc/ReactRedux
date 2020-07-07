Babel, next Gen Javascript
compile modern js features so they run in all browsers
can not send jsx to browser. babel compiles jsx to js

Internet Explorer lacks ES6 support
Babel does a React.createElement out of a jsx

Transpile jsx to js
"babel": {
"presets": [
"babel-preset-react-app"
]
},

"scripts": {
"start": "webpack-dev-server --config webpack.config.dev.js --port 3000"
},

ESLINT
Alert if we make mistakes
package.json rules no-console: off means console is allowed

FUNCTIONAL COMPONENT
const HelloWorld = (props) => <h1>Hello World</h1>
benefits:

- easier
- no this
- no binding
- less code to babel
- better performance
- easy to test
- High Signal to Noise ratio

WHEN TO USE CLASS VS FUNCTION

- when you need componentDidError or getSnapshotBeforeUpdate

CONTAINER (smart, stateful, controller view) VS PRESENTATIONAL (dumb, stateless, view)
-CONTAINER : little to no markup, backend for the frontend
--> passing data to child components and presentation components
--> created uses redux's connect function on the bottom of the file
--> know about redux
--> pass data down
--> often stateful
-PRESENTATION: nearly all markup
--> know nothing about redux
--> receive data via props
--> no state
