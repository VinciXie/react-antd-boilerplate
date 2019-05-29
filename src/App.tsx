// import React, { Component } from 'react';
// import { hot } from 'react-hot-loader'

import * as React from "react";
import { render } from 'react-dom';
import Hello from './components/Hello'

interface Props {

}

class App extends React.Component<Props> {

  render() {
    return (
      <div>
        <Hello compiler="ts-loader" framework="react" />
        <div>react-hot-loader111</div>
      </div>
    );
  }

}



render(
  <App />,
  document.getElementById('app')
)

// export default hot(module)(App);
