import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      message : "Welcome to new Todo in 2019"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
           {this.state.message}
          </h2>
        </header>
      </div>
    );
  }
}

export default App;
