import React, { useState } from "react";

import useStore from "./sumReducer";

function ReducerHook() {
  const [number, setNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  const [store, dispatch] = useStore();

  const handleForm = (type) => {
    const numberInt = parseInt(number);
    const secondNumberInt = parseInt(secondNumber);
    type === "sum" ? handleSum(numberInt, secondNumberInt) : handleSub(numberInt, secondNumberInt)
  }

  const handleSum = (firstNumb, secondNumb) => {
    dispatch({
      type: "SUM",
      payload: firstNumb + secondNumb,
    });
  };

  const handleSub = (firstNumb, secondNumb) => {
    dispatch({
      type: "SUB",
      payload: firstNumb - secondNumb,
    });
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
      <button onClick={() => handleForm("sum")}>Somar</button>
      <button onClick={() => handleForm("sub")}>Subtrair</button>
      <label htmlFor="result">Resultado</label>
      <input type="text" name="result" value={store.result} readOnly />
    </div>
  );
}

export default ReducerHook;
