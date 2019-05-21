import React from 'react';
import './App.css';
import ComponentList from './ComponentList';

function App() {
  var elements = ["Amarillo", "Azul", "Rojo", "Verde"]

  return (
    <div className="App">
      <ComponentList data={elements} />
    </div>
  );
}

export default App;
