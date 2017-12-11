import React, { Component } from 'react';
import Clock from './clock/Clock.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Corso React</h1>
        </header>
        <Clock preTxt="Sono le" postTxt="" />
      </div>
    );
  }
}

export default App;
