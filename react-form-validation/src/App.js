import React, { Component } from 'react';
import './App.css';
import FormErrors from './FormErrors'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' }
    }
  }

  // name = email
  // value = junio@gmail.com
  // this.setState({email: junio@gmail.com})
  changeHandler = event => {
    const { name, value } = event.target
    console.log(`${name}: ${value}`)

    this.setState((state) => ( // esse state no parametro é o mesmo que está no constructor
      {
        [name]: value, // email: 'junio@gmail.com'
        formErrors: { // {email: 'ta invalido', password: ''}
          // email: '',
          // password: '',
          // email: 'toot'
          ...state.formErrors,
          [name]: this.validateField(name, value)
          // email: 'ta invalido'
        }
      }
    ))

  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) // regex verifica se tem @ .com
        return isValid ? '' : 'email está invalido'

      case 'password':
        return value.length >= 6 ? '' : ' senha pequena demais'

      default:
        break;
    }
  }


  render() {
    return (
      <div>
        <form>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.email} // ''
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </div>
        </form>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

export default App;