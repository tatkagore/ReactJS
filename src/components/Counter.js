import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (i) => {
    setCount(count + i)
  }

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Counter : {count} </p>
      <button onClick={ handleDecrement }>-1</button>
      <button onClick={() => handleIncrement(5)}>+5</button>
    </div>
  );
};

export default Counter;
