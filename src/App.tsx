// import React, { Component } from 'react';
// import { hot } from 'react-hot-loader'

import * as React from "react";
import { render } from 'react-dom';


class App extends React.Component {

  render() {
    return (
      <div>
        <h1>React App with ts</h1>
        <div>react-hot-loader</div>
      </div>
    );
  }

}



render(
  <App />,
  document.getElementById('app')
)

// export default hot(module)(App);
