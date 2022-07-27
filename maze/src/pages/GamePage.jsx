import { useSelector } from 'react-redux';
import GameField from '../components/GameField/GameField';
import { difficultySelector } from '../redux/selectors/GameSelectors';
import { getRandomNum } from '../utils/common';

const GamePage = () => {
  const difficulty = useSelector(difficultySelector);
  const startField = {
    x: getRandomNum(difficulty),
    y: getRandomNum(difficulty),
  };

  return (
    <>
      <div>
        {startField.x} {startField.y}
      </div>
      <GameField startX={startField.x} startY={startField.y} difficulty={difficulty} />
    </>
  );
};

export default GamePage;
