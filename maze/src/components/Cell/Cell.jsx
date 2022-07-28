import { ANSWERS } from '../../utils/constants';
import './Cell.css';

const Cell = ({ handleClick, cellStyle }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={handleClick} className={`cell ${cellStyle}`}>
      {ANSWERS[cellStyle]}
    </div>
  );
};

export default Cell;
