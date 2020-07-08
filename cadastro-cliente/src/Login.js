import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from './actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="email"
            data-testid="input-email"
          />
          <input
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
            placeholder="senha"
            data-testid="input-senha"
          />
        </div>
        <Link
          to="/clients"
          onClick={() => this.props.login({ email, password })}
          data-testid="btn-login"
        >
          Entre
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(login(e)),
});

export default connect(null, mapDispatchToProps)(Login);
