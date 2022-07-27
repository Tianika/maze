import './Cell.css';

const Cell = ({ handleClick, cellStyle }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={handleClick} className={`cell ${cellStyle}`}>
      {cellStyle}
    </div>
  );
};

export default Cell;
