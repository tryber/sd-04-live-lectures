import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cofre.css';

class Cofre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctPassword: false,
      inputContent: ''
    };
  }


  inputDigits(digit) { // Nosso handler de alterar o input a medida que o usuario insere os digitos
    this.setState(state => ({ inputContent: `${state.inputContent}${digit}` }));
  }

  checkPassword = () => {
    const { safeOwner, alertPhrase } = this.props.alertMessageData;

    if (this.state.inputContent === this.props.correctPassword) {
      this.setState({ correctPassword: true });
    } else {
      alert(`${safeOwner} - ${alertPhrase}`);
      this.setState({ inputContent: '' });
    }
  }

  render() {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (this.state.correctPassword) {
      return <div>{this.props.children}</div>
    }

    return (
      <div className="safe">
        <div className="keyboard">
          <input
            className="keyboard-element"
            type="text"
            value={this.state.inputContent}
            readOnly
          />
          {digits.map(digit => (
            <button
              key={digit}
              type="button"
              className="keyboard-button"
              onClick={() => this.inputDigits(digit)}
            >
              {digit}
            </button>
          ))}
          <button type="button" className="keyboard-element" onClick={this.checkPassword}>
            Inserir senha
          </button>
        </div>
      </div>

    );
  }
}

Cofre.defaultProps = {
  alertMessageData: { safeOwner: 'Hamaji', alertPhrase: 'Teu acesso foi negado hamajito' }
}

Cofre.propTypes = {
  children: PropTypes.element.isRequired,
  correctPassword: PropTypes.string.isRequired,
  alertMessageData: PropTypes.shape({
    safeOwner: PropTypes.string,
    alertPhrase: PropTypes.string
  })
}

export default Cofre;