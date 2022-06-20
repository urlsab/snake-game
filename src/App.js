import React from 'react';
import './App.css';
import Board from './Components/Board/Board';
import KeyPress from './Components/KeyPress/KeyPress';

const App = () => {
  
  return (
      <div className="App">
        <KeyPress />
        <Board />
      </div>
    );
};

export default App;