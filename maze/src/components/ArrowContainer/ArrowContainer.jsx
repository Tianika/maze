import Arrow from '../Arrow/Arrow';

const ArrowContainer = ({ arrows }) => {
  return (
    <div className="arrow-container">
      {arrows.map((arrow, index) => {
        return <Arrow key={`${arrow + index}`} arrow={arrow} />;
      })}
    </div>
  );
};

export default ArrowContainer;
