import React from 'react';
import colors from './data'
import './App.css';
import Table from './Table'

class App extends React.Component { // Componente Mae superior Ao componente Table
  constructor(props) {
    // o objeto this.props não está disponível imediatamente e pode levar a erros. 
    // Este construtor lançaria um erro: com o console abaixo descomentado
    // console.log(this.props)
    super(props);
    // o objeto this.props não está disponível imediatamente e pode levar a erros. 
    // Este construtor lançaria um erro:
    this.state = {
      filter: 'all'
    };
  };

  // Essa propriedade gerencia um evento. Evento é algo que acontece 
  // com um elemento, veremos mais sobre isso amanhã. 

  // Por hora, basta saber o seguinte: toda vez que determinado evento acontece, 
  // a função associada à propriedade daquele evento é chamada. 

  // Aqui, o evento onChange representa qualquer mudança que ocorra no conteúdo do input. 
  // Sempre que o conteúdo do input mudar, a função associada à propriedade onChange 
  // será chamada.

  setFilterValue = event => { // Funciona como um Listener lembram ?
    this.setState({
      filter: event.target.value === '' ? 'all' : event.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.setFilterValue} type="text" />
          <Table filter={this.state.filter} colors={colors} />
        </header>
      </div>
    );
  }
}

export default App;