import React from 'react';
import IconSelector from './Components/IconSelector/IconSelector';
import Header from './Components/Header/Header';
import ButtonOptions from './Components/ButtonOptions/ButtonOptions';
import Preview from './Components/Preview/Preview';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <IconSelector />
      <div className='bodyPage'>
        <ButtonOptions />
        <Preview/>
      </div>
    </div>
  );
}

export default App;
