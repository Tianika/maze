import { useEffect, useState } from 'react';
import { changeUserSelection } from '../../redux/reducers/GameSlice';
import { store } from '../../redux/store/store';
import Cell from '../Cell/Cell';
import './GameField.css';

const GameField = ({ startX, startY, difficulty }) => {
  const [dataForGame, setDataForGame] = useState(null);
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

  useEffect(() => {
    setDataForGame(getField());
  }, []);

  const handleClick = (x, y) => {
    store.dispatch(changeUserSelection(x, y));
  };

  const getCellStyle = (x, y) => {
    return x === startX && y === startY ? 'start' : '';
  };

  return (
    <>
      <div>Cтарт</div>
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
