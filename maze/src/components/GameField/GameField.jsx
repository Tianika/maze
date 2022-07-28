import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { changeUserSelection } from '../../redux/reducers/GameSlice';
import { answerSelector, userSelectionSelector } from '../../redux/selectors/GameSelectors';
import { store } from '../../redux/store/store';
import Cell from '../Cell/Cell';
import './GameField.css';

const GameField = ({ startX, startY, difficulty }) => {
  const [dataForGame, setDataForGame] = useState(null);
  const [isSelect, setIsSelect] = useState(false);
  const { userX, userY } = useSelector(userSelectionSelector);
  const { answerX, answerY } = useSelector(answerSelector);

  const getField = () => {
    const field = [];

    for (let i = 1; i < difficulty + 1; i += 1) {
      const row = [];
      for (let j = 1; j < difficulty + 1; j += 1) {
        row.push({
          x: j,
          y: i,
        });
      }
      field.push(row);
    }

    return field;
  };

  useEffect(() => {
    setDataForGame(getField());
  }, []);

  const handleClick = (x, y) => {
    setIsSelect(!isSelect);
    store.dispatch(changeUserSelection({ x, y }));
  };

  const getCellStyle = (x, y) => {
    if (isSelect) {
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

    if (!isSelect && x === startX && y === startY) {
      return 'start';
    }

    return '';
  };

  return (
    <>
      <div>
        Cтарт startX:{startX} startY:{startY}
      </div>
      {dataForGame && (
        <div className="game-field-table">
          {dataForGame.map((row) => {
            return row.map(({ x, y }) => {
              return (
                <Cell
                  key={`cell${x}${y}`}
                  handleClick={() => handleClick(x, y)}
                  cellStyle={getCellStyle(x, y)}
                />
              );
            });
          })}
        </div>
      )}
    </>
  );
};

export default GameField;
