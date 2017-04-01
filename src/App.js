import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>To-Do <small>List</small></h1>
        <Todos />
      </div>
    );
  }
}

export default App;
