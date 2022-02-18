import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export default class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  // This function will set the state to be what is typed in the form
  handleInput = (ev) => {
    // determines which part of the form sets what part of the state
    if (ev.target.name === 'email') {
      this.setState({email: ev.target.value})
      
    } else if (ev.target.name === 'password') {
      this.setState({password: ev.target.value})
    }
  }

  // This function will deliver an axios post request and ask it to validate
  // via knock and jwt
  handleSubmit = (ev) => {
    const request = {'email': this.state.email, 'password': this.state.password} // object to be passed through POST

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
        <input onChange = {this.handleInput}
          name = "email"
          type = "email"
          placeholder = 'Email:' 
        />
        <br />
        <input onChange = {this.handleInput}
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