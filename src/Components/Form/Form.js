import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form">
      <div className="container">
        <label>Enter username: </label>
        <input className="inputName" type="text"></input>
      </div>
      <div className="container">
        <label>Enter repository: </label>
        <input className="inputRep" type="text"></input>
      </div>
      <div className="container">
        <label>Select a color: </label>
        <select className="selectColor" type="color">
          <option className="colSelector1" value="0" selected>
            Pick a color
          </option>
          <option className="colSelector1" value="1">
            Cyan
          </option>
          <option className="colSelector2" value="2">
            Khaki
          </option>
          <option className="colSelector3" value="3">
            Orange
          </option>
        </select>
      </div>
    </div>
  );
};

export default Form;
