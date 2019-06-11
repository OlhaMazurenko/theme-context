import React, {Component} from 'react';
import './App.css';
import Page from '../src/components/page/Page';
import {UserContecst} from './context';
import LoginForm from './components/page/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      lastName: null
    }
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.addEventListener('load', ()=> {
      const data = JSON.parse(xhr.response);
      const [name, lastName] = data[0].name.split(' ');
      this.setState({
       name: name,
       lastName: lastName
      });
    })
    xhr.send();
  }

  render() {
    const contextObject = {
      name: 'Olga',
      lastName: 'Mazurenko'
    };
    return (
      <UserContecst.Provider value={this.state}>
        <LoginForm /> 
        <Page />
      </UserContecst.Provider>
    );
  }
}

export default App;
