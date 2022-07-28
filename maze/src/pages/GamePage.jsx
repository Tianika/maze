import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { difficultySelector, movesSelector } from '../redux/selectors/GameSelectors';
import GameField from '../components/GameField/GameField';
import { getRandomNum, shuffleArray } from '../utils/common';
import ArrowContainer from '../components/ArrowContainer/ArrowContainer';
import { DIRECTIONS, DIRECTIONS_MAP } from '../utils/constants';
import { store } from '../redux/store/store';
import { changeAnswer } from '../redux/reducers/GameSlice';

const GamePage = () => {
  const difficulty = useSelector(difficultySelector);
  const moves = useSelector(movesSelector);
  const [startField, setStartField] = useState(null);
  const [answerField, setAnswerField] = useState(null);
  const [arrows, setArrows] = useState(null);

  const checkDirection = (direction, answer) => {
    const x = answer.x + DIRECTIONS_MAP[direction].x;
    const y = answer.y + DIRECTIONS_MAP[direction].y;

    if (x > 0 && x < difficulty + 1 && y > 0 && y < difficulty + 1) {
      return { isCanMove: true, x, y };
    }

    return { isCanMove: false, x, y };
  };

  const getArrows = () => {
    let answer = {
      x: startField.x,
      y: startField.y,
    };
    const res = [];

    while (res.length < moves) {
      shuffleArray(DIRECTIONS);
      const direction = DIRECTIONS[0];
      const { isCanMove, x, y } = checkDirection(direction, answer);

      if (isCanMove) {
        answer = {
          x,
          y,
        };
        res.push(direction);
      }
    }

    setArrows([...res]);
    setAnswerField({ ...answer });
    store.dispatch(changeAnswer({ ...answer }));
  };

  useEffect(() => {
    setStartField({
      x: getRandomNum(difficulty),
      y: getRandomNum(difficulty),
    });
  }, []);

  useEffect(() => {
    if (startField) {
      getArrows();
    }
  }, [startField]);

  return (
    <>
      {startField && (
        <GameField startX={startField.x} startY={startField.y} difficulty={difficulty} />
      )}
      {answerField && (
        <div>
          Ответ X:{answerField.x} Y:{answerField.y}
        </div>
      )}
      {arrows && <ArrowContainer arrows={arrows} />}
    </>
  );
};

export default GamePage;
