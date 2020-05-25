import React from 'react';
import logoConexão from './logo-conexão.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logoConexão} className="logo-conexão" alt="logo" />
        <h1>Bem vindo ao tutorial do <strong>Conexão Panvel</strong></h1>
    </div>
  );
}

export default App;
