import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Papayawhip from './components/papayawhip';
import Lightseagreen from './components/lightSeaGreen';
import Darkbluepurple from './components/darkbluepurple';
import ShadesofVermillion from './components/shadesOfVermillion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Papayawhip />
        <Lightseagreen />
        <Darkbluepurple />
        <ShadesofVermillion />
      </div>
    );
  }
}
export default App;
