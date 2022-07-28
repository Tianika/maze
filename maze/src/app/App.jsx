import React from 'react';
import { useSelector } from 'react-redux';
import GamePage from '../pages/GamePage/GamePage';
import StartPage from '../pages/StartPage/StartPage';
import { isGameSelector } from '../redux/selectors/GameSelectors';
import './App.css';

const App = () => {
  const isGame = useSelector(isGameSelector);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Лабиринт</h1>
      </header>
      <main>
        {!isGame && <StartPage />}
        {isGame && <GamePage />}
      </main>
    </div>
  );
};

export default App;
