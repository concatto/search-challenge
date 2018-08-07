import React, { Component } from 'react';
import Search from '@material-ui/icons/Search';
import Mood from '@material-ui/icons/Mood';
import './App.css';

import Sequencer from './components/Sequencer';

const iconStyle = {
  marginTop: 10,
  fontSize: 72
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search style={iconStyle}/>
          <Mood style={iconStyle}/>
          <h1 className="App-title">Busca Humana</h1>
          <h3>Encontre o número na lista o mais rápido possível!</h3>
        </header>

        <Sequencer/>
      </div>
    );
  }
}

export default App;
