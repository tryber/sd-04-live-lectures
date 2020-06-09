import React, { Component } from 'react';
class Mae extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
    this.turnShowOff = this.turnShowOff.bind(this)
  }

  turnShowOff() {
    this.setState({ show: false }) // como executei um setState, o Render é executado novamente
  }

  render() {
    return (
      <div>
        { this.state.show && <Titulo buttonOff={this.turnShowOff} /> }
      </div>
    )
  }
}
class Titulo extends React.Component {
  componentWillUnmount(){
    // seria executado
  }

  //O único método obrigatório de se definir é o render!
  render() {
    const { buttonOff } = this.props;
    return (
      <div>
        <button onClick={() => buttonOff()}></button>
      </div>
    )
  }
}