import React, { useState } from "react";

function UseState() {
  const [number, setNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleSum = () => {
    const numberInt = parseInt(number);
    const secondNumberInt = parseInt(secondNumber);
    setResult(numberInt + secondNumberInt);
  };

  return (
    <div>
      <label htmlFor="number">Número</label>
      <input
        type="text"
        name="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <label htmlFor="secondNumber">Segundo Número</label>
      <input
        type="text"
        name="secondNumber"
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <button onClick={handleSum}>Somar</button>
      <label htmlFor="result">Resultado</label>
      <input type="text" name="result" value={result} />
    </div>
  );
}

export default UseState;
