import React, { Component, Fragment } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
    this.loginField = React.createRef();
  }

  componentDidMount() {
    this.loginField.current.focus();
  }
  render() {
    return (
      <React.Fragment>
        <label>
          Login:
          <input type='text' value={this.state.login} 
            onChange={(event) => this.setState({ login: event.target.value })} 
            ref={this.loginField}/>
        </label>
        <label>
          Password:
          <input type='password' value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
        </label>
      </React.Fragment>
    );
  }
}

export default LoginForm;
