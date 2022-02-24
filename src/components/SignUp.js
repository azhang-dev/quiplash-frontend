import React from 'react'
import axios from 'axios'
import { API_ROOT } from '../constants';



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
    } else if (ev.target.name === 'name') {
      this.setState({name: ev.target.value})
    }
  }

  // This function will deliver an axios post request and ask it to validate
  // via knock and jwt
  handleSubmit = (ev) => {
    const newAccount = {'email': this.state.email, 'password': this.state.password, 'name': this.state.name} // object to be passed through POST

    axios.post(`${API_ROOT}/user`, newAccount)
    .then(result => {
      // console.log(result)

    })
    .catch(err => {
      
    })
    ev.preventDefault();
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>Create an Account</label>
        <br />
        <input onChange = {this.handleInput}
          name = "name"
          type = "name"
          placeholder = 'Name:' 
        />
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