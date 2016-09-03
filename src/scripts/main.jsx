window.React = require('react');
window.ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div className="helloWorld">
        Hello, world!
      </div>
    );
  }
});
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('react-container')
);
