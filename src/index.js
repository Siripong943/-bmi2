import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BmiCalculator from './bmi'; // เพิ่มการ import BmiCalculator

const bmiRoot = ReactDOM.createRoot(document.getElementById('root')); // เปลี่ยน ID ที่ใช้ในการ render

bmiRoot.render(
  <React.StrictMode>
    <BmiCalculator />
  </React.StrictMode>
);

reportWebVitals();
