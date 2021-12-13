import React from 'react';
import IconSelector from './Components/IconSelector/IconSelector';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <IconSelector />
      <Form />
    </div>
  );
}

export default App;
