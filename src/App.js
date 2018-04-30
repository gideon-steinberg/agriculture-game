import React, { Component } from 'react';
import './App.css';
import MainPane from './MainPane';
import Prompt from './Prompt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPane/>
        <hr />
        <Prompt />
      </div>
    );
  }
}

export default App;
