import React, { useRef, useState } from 'react';
import './BmiCalculator.css'; // import ไฟล์ CSS ที่สร้างขึ้น

const BmiCalculator = () => {
  const w_inputRef = useRef(null);
  const h_inputRef = useRef(null);
  const [bmi, setBmi] = useState(null);

  const calBmi = () => {
    let w = parseFloat(w_inputRef.current.value);
    let h = parseFloat(h_inputRef.current.value);

    if (isNaN(w) || isNaN(h)) {
      alert("Please enter valid weight and height.");
      return;
    }

    const calculatedBmi = w / Math.pow(h / 100, 2);
    setBmi(calculatedBmi);
  };

  const resetInputs = () => {
    w_inputRef.current.value = '';
    h_inputRef.current.value = '';
    setBmi(null);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="header">BMI Calculator</h3>
        Weight<input
          type="text"
          className="input"
          ref={w_inputRef}
          placeholder="Enter weight in kg."
        /><br />
        Height<input
          type="text"
          className="input"
          ref={h_inputRef}
          placeholder="Enter height in cm."
        /><br />
        <button className="button" onClick={calBmi}>Calculate</button>
        <button className="button reset-button" onClick={resetInputs}>Reset</button><br />
        {bmi !== null && (
          <>
            <h1 className="result">BMI value : {bmi.toFixed(2)}</h1>
            <div className="bmi-category">{getBmiCategory(bmi)}</div>
          </>
        )}
      </div>
    </div>
  );
};

const getBmiCategory = (bmi) => {
  if (bmi < 18.5) return 'Underweight (ผอม)';
  if (bmi >= 18.5 && bmi < 24.9) return 'Normal (ปกติ)';
  if (bmi >= 25 && bmi < 29.9) return 'Overweight (โรคอ้วนระดับ 1)';
  if (bmi >= 30 && bmi < 34.9) return 'Obesity Class 2 (โรคอ้วนระดับ 2)';
  if (bmi >= 35 && bmi < 39.9) return 'Obesity Class 3 (โรคอ้วนระดับ 3)';
  return 'Obesity Class 4 (อันตรายมาก)';
};

export default BmiCalculator;
