import React, { useState } from 'react';
import IconSelector from './Components/IconSelector/IconSelector';
import Header from './Components/Header/Header';
import ButtonOptions from './Components/ButtonOptions/ButtonOptions';
import Preview from './Components/Preview/Preview';
import GeneratedPage from './Components/GeneratedPage/GeneratedPage';
import './App.css';

function App() {
  const [pickedIcon, setPickedIcon] = useState(null);
  const [userName, setUserName] = useState(null);
  const [repName, setRepName] = useState(null);
  const [formColor, setFormColor] = useState(null);
  const [genPageShown, setGenPageShown]=useState(false);

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
 const showGenPageHandler=()=>{
   setGenPageShown(!genPageShown);
 }

  return (
    <div className="App">
      {genPageShown&&<GeneratedPage icoName={pickedIcon} uName={userName} repName={repName} formColor={formColor} showGenPage={showGenPageHandler}/>}
      {!genPageShown&&<div className='startPage'>
      <Header />
      <IconSelector selectIco={pickIconHandler} />
      <div className="bodyPage">
        <ButtonOptions uName={setUserNameHandler} repName={setRepNameHandler} formColor={setColorHandler}/>
        <Preview icoName={pickedIcon} uName={userName} repName={repName} formColor={formColor} showGenPage={showGenPageHandler}/>
      </div>
      </div>}
    </div>
  );
}

export default App;
