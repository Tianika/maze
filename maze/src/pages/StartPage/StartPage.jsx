import { useSelector } from 'react-redux';
import { store } from '../../redux/store/store';
import { levelSelector, movesSelector } from '../../redux/selectors/GameSelectors';
import { changeIsGame } from '../../redux/reducers/GameSlice';
import './StartPage.css';

const StartPage = () => {
  const level = useSelector(levelSelector);
  const moves = useSelector(movesSelector);

  const handleClick = () => {
    store.dispatch(changeIsGame());
  };

  return (
    <>
      {level && <div>Уровень: {level}</div>}
      {moves && <div>Ходов: {moves}</div>}
      <input type="button" value="Начать игру" className="start-button" onClick={handleClick} />
    </>
  );
};

export default StartPage;
