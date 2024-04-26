import React,{useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + inputValue)}>Artır</button>
      <button onClick={() => setCount(count - inputValue)}>Azalt</button>
    </div>
  );
};

export default Counter;
