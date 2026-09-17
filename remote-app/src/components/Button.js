import React from 'react';
import useCounterStore from '../store/useCounterStore';
export default function Button(){
  const {count,increment,decrement} = useCounterStore();
  return (
    <div>
      <p>Count: {count}</p>
       <button
      style={{
        background: "#6a1b9a",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onClick={increment}
    >Increment</button>
      <button
      style={{
        background: "#6a1b9a",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onClick={decrement}
    >Decrement</button>
    </div>
  );
}