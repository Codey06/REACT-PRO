

import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Tip Calculator</h1>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <div className="input-container">
        <label>How much was the bill?</label>
        <input
          type="text"
          placeholder="Enter bill amount"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div className="select-container">
        <label>How did you like the service?</label>
        <select value={percentage1} onChange={(e) => setPercentage1(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was Okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely Amazing! (20%)</option>
        </select>
      </div>

      <div className="select-container">
        <label>How did you find the service?</label>
        <select value={percentage2} onChange={(e) => setPercentage2(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was Okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely Amazing! (20%)</option>
        </select>
      </div>

      {bill > 0 && (
        <div className="output-container">
          <h3>You pay ${bill + tip} (${bill} + ${tip.toFixed(2)} tip)</h3>
          <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
