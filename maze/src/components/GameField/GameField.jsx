import Cell from '../Cell/Cell';
import './GameField.css';

const GameField = ({ level, dataForGame, handleClick, getCellStyle }) => {
  return (
    <>
      <h2>Уровень {level}</h2>
      {dataForGame && (
        <div className="game-field-table">
          {dataForGame.map((row) => {
            return (
              <div className="game-field-row" key={`row${row[0].x + row[0].y}`}>
                {row.map(({ x, y }) => {
                  return (
                    <Cell
                      key={`cell${x}${y}`}
                      handleClick={() => handleClick(x, y)}
                      cellStyle={getCellStyle(x, y)}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GameField;
