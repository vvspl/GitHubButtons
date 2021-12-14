import React, { useState } from 'react';
import IconSelector from './Components/IconSelector/IconSelector';
import Header from './Components/Header/Header';
import ButtonOptions from './Components/ButtonOptions/ButtonOptions';
import Preview from './Components/Preview/Preview';
import './App.css';

function App() {
  const [pickedIcon, setPickedIcon] = useState(null);
  const [userName, setUserName] = useState(null);
  const [repName, setRepName] = useState(null);
  const [formColor, setFormColor] = useState(null);

  const pickIconHandler = value => {
    setPickedIcon(value);
  };
  const setUserNameHandler=(value)=>{
     setUserName(value);
  }
  const setRepNameHandler=(value)=>{
    setRepName(value);
 }
 const setColorHandler=(value)=>{
    setFormColor(value);
 }

  return (
    <div className="App">
      <Header />
      <IconSelector selectIco={pickIconHandler} />
      <div className="bodyPage">
        <ButtonOptions uName={setUserNameHandler} repName={setRepNameHandler} formColor={setColorHandler}/>
        <Preview icoName={pickedIcon} uName={userName} repName={repName} formColor={formColor}/>
      </div>
    </div>
  );
}

export default App;
