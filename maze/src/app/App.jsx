import React from 'react';
import GamePage from '../pages/GamePage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Лабиринт</header>
      <main>
        <GamePage />
      </main>
    </div>
  );
};

export default App;
