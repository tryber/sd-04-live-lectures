import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }

    console.log("Construtor do filho iniciado")
  }

  componentDidMount() {
    console.log("Componente filho foi Montado")
    this.timerID = setInterval(
      () => this.setState({ date: new Date() }),
      1000
    )
  }

  componentDidUpdate(nextProps, prevStates) {
    console.log("O componente acabou de ser atualizado")
  }

  componentWillUnmount() {
    console.log("Componente mãe parou de chamar o componente filho")
    console.log("Logo vamos desligar os setIntervals")
    clearInterval(this.timerID)
  }

  render() {
    // Não facam isso em casa
    // setInterval(
    //   () => this.setState({ date: new Date() }),
    //   1000
    // ) // Causa Loop infinitasso
    // console.log("Renderizando seu JSX")
    const { buttonOff } = this.props;

    return (
      <div>
        <h1>Relógio</h1>
        <h2>Agora são {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={() => buttonOff()}>Desliga ai pra nos</button>
      </div>
    )
  }
}

export default Clock;