import React from 'react';
import axios from 'axios';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

import Login from './components/Login'
import MyProfile from './components/MyProfile'
import { API_ROOT } from './constants';
// const API_ROOT = 'http://localhost:3000'


export default class App extends React.Component{

  //App state
  state = {
    currentUser: undefined
  } 

  //function to run on component mounting
  componentDidMount(){
    this.setCurrentUser();
  }

  //function to set the state to the current logged in user
  setCurrentUser = () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    const res = axios.get( `${API_ROOT}/users/current`, {
      headers: {
        'Authorization' : token
      }
    })
    .then(res => {
      this.setState({currentUser: res.data})
    })
    .catch(err => console.warn(err));
  }

  //function to log the user out.
  handleLogout = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = undefined
  }

  render(){
    return (
      <Router>
        <header>
          <nav>
            { // This is a tenary expression that displays a login/sign up link if !currentUser
              // or a logout/myProfile link if currentUser === true
              this.state.currentUser !== undefined
              ?
              (
                <ul>
                  <li> G'day {this.state.currentUser.name} |</li>
                  <li><Link to = '/my_profile'>My Profile</Link></li>
                  <li><Link onClick = {this.handleLogout} to = '/'>Logout</Link></li>
                </ul>
              )
              :
              (
                <ul>
                  <li><Link to = '/login'>Log In</Link></li>
                </ul>
              )
            }
          </nav>
          <hr />
        </header>
        <Route exact path = '/my_profile' component = {MyProfile}/>
        <Route 
          exact path = '/login' 
          render={(props) => <Login setCurrentUser = {this.setCurrentUser}{...props}/>}
        />


      </Router>

    ); // return
  } // render
} //class App