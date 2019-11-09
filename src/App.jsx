// import React, { Component } from 'react';
// import 'react-hot-loader'

import React from "react";
import { render } from 'react-dom';
import Hello from "./components/Hello";
import styles from './components/style.css';
// const a = 1;

function App() {
  return (
    <div>
      <div>adadfadsfaf dfadsfasdf</div>
      <div className={styles.aaa}>react-hot-loader111</div>
      <Hello compiler="babel" framework="react" />
    </div>
  );
}

render(
  <App />,
  document.getElementById('app')
);
