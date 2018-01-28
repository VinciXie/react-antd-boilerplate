import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

class App extends Component {

  render() {
    return (
      <div>
        <h1>React App</h1>
        <div>react-hot-loader</div>
      </div>
    );
  }

}

export default hot(module)(App);
