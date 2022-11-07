import Counter from "./counter";

const CounterList = ({ counters }) => {
  return (
    <div className="counters-list">
      {counters.map((counter, index) => {
        return <Counter key={index} {...counter} />;
      })}
    </div>
  );
};

export default CounterList;
