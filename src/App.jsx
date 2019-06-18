// import React, { Component } from 'react';
// import 'react-hot-loader'

import * as React from "react";
import { render } from 'react-dom';
import Hello from "./components/Hello";
import styles from './components/style';
// const a = 1;

class App extends React.Component {

  render() {
    return (
      <div>
        <div>adadfadsfaf dfadsfasdf</div>
        <div className={styles.aaa}>react-hot-loader111</div>
        <Hello compiler="babel" framework="react" />
      </div>
    );
  }

}

render(
  <App />,
  document.getElementById('app')
);
