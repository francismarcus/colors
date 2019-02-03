import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Papayawhip from './components/papayawhip';
import Lightseagreen from './components/lightSeaGreen';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Papayawhip />
        <Lightseagreen />
      </div>
    );
  }
}
export default App;
