import React from 'react';
// Busca os componentes e funções que o React trás, 
// como por exemplo, a possibilidade converter código JSX em HTML

import logo from './logo.svg';

import './App.css'; // É quem busca pelo CSS que foi criado 
// no arquivo App.css para que possamos utilizá-lo

const myName = (name) => { // Functional Componenets
  return (<h1>Meu nome é {name}</h1>)
}

// function App() retorna um JSX que será transformado em HTML pelo React
class ShoopingCart extends React.Component { // Nossa classe é uma derivação de um componente react
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        Hello Xablau!
        {myName('Cacique')}
        </header>
      </div>
    );
  }
}

export default App; // Deixa visível e acessível o componente App para o restante da aplicação

// usando JSX
// const element = (
//   <h1 className="greeting">
//       Hello, xablau!
//   </h1>
// );

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, xablau!'
// );