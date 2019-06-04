// import React, { Component } from 'react';
// import 'react-hot-loader'

import * as React from "react";
import { render } from 'react-dom';

const a = 1;

class App extends React.Component {

  render() {
    return (
      <div>
        <div>react-hot-loader111</div>
      </div>
    );
  }

}

render(
  <App />,
  document.getElementById('app')
);
