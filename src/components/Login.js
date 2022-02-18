import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export default class Login extends React.Component {
  state = {
    name: '',
    password: ''
  }

  // This function will set the state to be what is typed in the form
  handleInput = (ev) => {
    // determines which part of the form sets what part of the state
    switch(ev.target.name) {  
      case 'name':
        this.setState({name: ev.target.value})
        break;
      case 'password':
        this.setState({password: ev.target.value})
    }
  }

  // This function will deliver an axios post request and ask it to validate
  // via knock and jwt
  handleSubmit = (ev) => {
    const request = {'name': this.state.name, 'password': this.state.password} // object to be passed through POST

    axios.post(`${BASE_URL}/user_token`, {auth: request})
    .then(result => {
      localStorage.setItem("jwt", result.data.jwt)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.jwt;
      this.props.setCurrentUser();
      this.props.history.push('/');

    })
    .catch(err => {
      console.warn(err)
    })
    ev.preventDefault();
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>Login Form</label>
        <br />
        <input 
          name = "name"
          type = "text"
          placeholder = 'Username:' 
        />
        <br />
        <input 
          name = "password"
          type = "password"
          placeholder = 'Password:' 
        />
        <br />
        <button>Login</button>
      </form>
    )
  }
}