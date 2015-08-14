var TodoApp = require('./components/TodoApp.react.jsx')
var TodoApp2 = require('./components/secondVersions/TodoApp.2.react.jsx')
var React = require('react')

React.render(
  React.createElement(TodoApp, {}),
  document.getElementById('todoapp')
);

// React.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );


React.render(
  React.createElement(TodoApp2, {}),
  document.getElementById('todoapp2')
);



;
