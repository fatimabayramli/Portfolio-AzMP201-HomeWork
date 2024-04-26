import React,{useState} from "react";

const Calculator = () => {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);
  
    return (
      <div>
        <input type="number" value={input1} onChange={(e) => setInput1(Number(e.target.value))} />
        <input type="number" value={input2} onChange={(e) => setInput2(Number(e.target.value))} />
        <button onClick={() => setResult(input1 + input2)}>+</button>
        <button onClick={() => setResult(input1 - input2)}>-</button>
        <button onClick={() => setResult(input1 * input2)}>*</button>
        <button onClick={() => setResult(input1 / input2)}>÷</button>
        <h2>Nəticə: {result}</h2>
      </div>
    );
}

export default Calculator