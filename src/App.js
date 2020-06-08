import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameBlock from './NameBlock';
import babyNameData from './babyNameData.json'


function App() {
  return (
    <div className="App">
      <NameBlock allName={babyNameData} />
    </div>
  );
}

export default App;
