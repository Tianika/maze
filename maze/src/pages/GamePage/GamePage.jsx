import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { store } from '../../redux/store/store';
import {
  difficultySelector,
  levelSelector,
  movesSelector,
} from '../../redux/selectors/GameSelectors';
import GameField from '../../components/GameField/GameField';
import { getRandomNum, shuffleArray } from '../../utils/common';
import ArrowContainer from '../../components/ArrowContainer/ArrowContainer';
import { DIRECTIONS, DIRECTIONS_MAP } from '../../utils/constants';
import { changeLevel } from '../../redux/reducers/GameSlice';

const GamePage = () => {
  const difficulty = useSelector(difficultySelector);
  const moves = useSelector(movesSelector);
  const level = useSelector(levelSelector);

  const [startField, setStartField] = useState({
    x: getRandomNum(difficulty),
    y: getRandomNum(difficulty),
  });
  const [userSelection, setUserSelection] = useState(null);
  const [answerField, setAnswerField] = useState(null);
  const [dataForGame, setDataForGame] = useState(null);
  const [arrows, setArrows] = useState(null);
  const [isNext, setIsNext] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

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

      if (isCanMove && direction !== res[res.length - 1]) {
        answer = {
          x,
          y,
        };
        res.push(direction);
      }
    }

    setArrows([...res]);
    setAnswerField({ ...answer });
  };

  const getStartField = () => {
    setStartField({
      x: getRandomNum(difficulty),
      y: getRandomNum(difficulty),
    });
  };

  const getField = () => {
    const field = [];

    for (let i = 1; i < difficulty + 1; i += 1) {
      const row = [];
      for (let j = 1; j < difficulty + 1; j += 1) {
        row.push({
          x: i,
          y: j,
        });
      }
      field.push(row);
    }

    return field;
  };

  const handleClick = (x, y) => {
    if (!isNext) {
      setIsSelect(true);
      setUserSelection({ x, y });
    }
  };

  const getCellStyle = (x, y) => {
    if (isSelect) {
      const userX = userSelection.x;
      const userY = userSelection.y;
      const answerX = answerField.x;
      const answerY = answerField.y;
      setIsNext(true);

      if (x === userX && y === userY && userX === answerX && userY === answerY) {
        return 'right';
      }

      if (x === answerX && y === answerY) {
        return 'answer';
      }

      if (x === userX && y === userY) {
        return 'wrong';
      }
    }

    if (!isSelect && x === startField.x && y === startField.y) {
      return 'start';
    }

    return '';
  };

  const nextLevel = () => {
    store.dispatch(changeLevel(level + 1));
    setIsSelect(false);
    setUserSelection(null);
    setAnswerField(null);
    getStartField();
    setDataForGame(getField());
    setIsNext(false);
  };

  useEffect(() => {
    setDataForGame(getField());
  }, []);

  useEffect(() => {
    if (startField) {
      getArrows();
    }
  }, [startField]);

  return (
    <>
      {startField && (
        <GameField
          level={level}
          dataForGame={dataForGame}
          handleClick={handleClick}
          getCellStyle={getCellStyle}
        />
      )}
      {arrows && <ArrowContainer arrows={arrows} />}
      {isNext && <input type="button" value="Продолжить" onClick={nextLevel} className="button" />}
    </>
  );
};

export default GamePage;
