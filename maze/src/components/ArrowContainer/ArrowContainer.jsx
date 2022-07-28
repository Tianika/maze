import Arrow from '../Arrow/Arrow';

const ArrowContainer = ({ arrows }) => {
  return (
    <>
      {arrows.map((arrow, index) => {
        return <Arrow key={`${arrow + index}`} arrow={arrow} />;
      })}
    </>
  );
};

export default ArrowContainer;
