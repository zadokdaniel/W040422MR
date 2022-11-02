import { useState } from "react";

const ConditionalRendering = () => {
  const [data, setData] = useState([0, 1, 2, 3, 4, 5]);

  const remove = () => setData((data) => data.slice(0, -1));

  if (!data.length) {
    return <div>no data yet</div>;
  }

  return (
    <>
      <div>{data}</div>
      <button onClick={remove}>remove</button>
      <button onClick={remove}>remove</button>
    </>
  );

  //   return (
  //     <>
  //       <div>{!data.length ? "no data yet" : data}</div>
  //       {!data.length ? (
  //         <>
  //           <button onClick={remove}>remove</button>
  //           <button onClick={remove}>remove</button>
  //         </>
  //       ) : null}
  //     </>
  //   );
};

export default ConditionalRendering;
