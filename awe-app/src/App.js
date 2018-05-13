import React, { Component } from 'react';
import Agenda from './agenda/agenda';
import agenda2018 from './2018/agenda';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>AWE 2018</h1>
        <Agenda agenda={agenda2018} />
      </div>
    );
  }
}

export default App;
