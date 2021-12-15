import React, { useState } from 'react';
import './ButtonOptions.css';

const ButtonOptions = ({uName, repName, formColor}) => {
  const [userName, setUserName] = useState('');
  const [reposName, setReposName] = useState('');
  const [color, setColor] = useState('white');

  const inputNameHandler = event => {
    setUserName(event.target.value);
    uName(event.target.value);
  };

  const inputRepNameHandler = event => {
    setReposName(event.target.value);
    repName(event.target.value);
  };

  const changeColorHandler=(event)=>{
      setColor(event.target.value);
      formColor(event.target.value);
  }

  return (
    <div className="form">
      <h2 className='formTitle'>Button options</h2>
      <div className="container">
        <label>Enter username: </label>
        <input
          className="inputName"
          type="text"
          value={userName}
          onChange={inputNameHandler}
        ></input>
      </div>
      <div className="container">
        <label>Enter repository: </label>
        <input className="inputRep" type="text" value={reposName}
          onChange={inputRepNameHandler}></input>
      </div>
      <div className="container">
        <label>Select a color: </label>
        <select className="selectColor" type="color" onChange={changeColorHandler} style={{backgroundColor: `${color}`}}>
          <option className="colSelector0" value="white">
            Pick a color
          </option>
          <option className="colSelector1" value="darkcyan">
            Cyan
          </option>
          <option className="colSelector2" value="darkkhaki">
            Khaki
          </option>
          <option className="colSelector3" value="darkorange">
            Orange
          </option>
        </select>
      </div>
    </div>
  );
};

export default ButtonOptions;
