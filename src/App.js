import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Store from './Components/Store/Store';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Store></Store>
      </header>
    </div>
  );
}

export default App;
