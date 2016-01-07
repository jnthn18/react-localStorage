require('./../stylesheets/global.sass');

'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var LocalStorage = React.createClass({
  getInitialState: function(){
    return {counter: 0};
  },
  componentDidMount: function(){
    if(!localStorage.getItem('count')){
      return;
    } else {
      var storedCount = parseInt(localStorage.getItem('count'));
      this.setState({counter: storedCount});
    }
  },
  Counter: function(){
    var newCount = this.state.counter+1;
    localStorage.setItem('count', newCount);
    this.setState({counter: newCount});
  },
  resetCount: function(){
    localStorage.setItem('count', 0);
    this.setState({counter: 0});
  },
  render: function() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.Counter}>Click Me</button>
        <button onClick={this.resetCount}>Restart Counter</button>
      </div>
    );
  }
});

ReactDOM.render(
  <LocalStorage />,
  document.getElementById('container')
);