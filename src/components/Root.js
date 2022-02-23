import React, { Component } from 'react';
import axios from 'axios'
import UserRoot from './users/UserRoot'
import Lobby from './users/Lobby'

import HostLobby from './host/HostLobby'
import HostGame from './host/HostGame'
import HostRoot from './host/HostRoot'
import RoomsList from './RoomsList'


import Login from './Login'
import SignUp from './SignUp'

import MyProfile from './MyProfile'

import {HashRouter as Router, Route, Link} from 'react-router-dom'

import "./Root.css"

const BASE_URL = 'http://localhost:3000'

class Root extends Component {
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
    const res = axios.get( `${BASE_URL}/users/current`, {
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

    render() {
        return (
            <div>
              <Router>
                <header>
                  <nav>
                    <div class="grid grid-cols-3 divide-y" className ="login-container" >
                        { // This is a tenary expression that displays a login/sign up link if !currentUser
                        // or a logout/myProfile link if currentUser === true
                        this.state.currentUser !== undefined
                        ?
                        (
                            <ul>
                            <li className="nav-links"> G'day {this.state.currentUser.name} |</li>
                            <li><Link to = 'my_profile' className="nav-links">My Profile</Link></li>
                            <li><Link onClick = {this.handleLogout} to = '/' className="nav-links">Logout</Link></li>
                            </ul>
                        )
                        :
                        (
                            <ul>
                            <li><Link to = '/login' className="nav-links">Log In</Link></li>
                            <li><Link to = '/signup' className="nav-links" >Sign Up</Link></li>
                            </ul>
                        )
                        }
                        <Route 
                        exact path = '/login' 
                        render={(props) => <Login setCurrentUser = {this.setCurrentUser}{...props}/>}
                        />
                        <Route exact path="/signup" component={SignUp}/> 
                    </div>
                  </nav>
                </header>
                <hr/>
                    
                  <h1>QUIPLASH: ROOT</h1>
                  <Link to="/">GameStart</Link> |&nbsp; 
                  <Link to="/play">Root player page</Link> |&nbsp; 
                  <Link to="/play/lobby">LOBBY PAGE</Link> |&nbsp; 
                  <Link to="/host/lobby">Host PAGE</Link>|&nbsp; 
                  <Link to="/host/game">Host GAME(test)</Link>

                  <Route exact path="/play" component={UserRoot}/> 
                  <Route exact path="/play/lobby/" component={UserRoot}/> 
                  {/* <Route exact path="/play/lobby/:id" component={Lobby}/>  */}
                  <Route exact path="/host/lobby" component={HostRoot}/>
                  <Route exact path="/host/game" component={HostGame}/>
                  <Route exact path = '/my_profile' component = {MyProfile}/>
                  <Route exact path="/lobbies" component={RoomsList}/>
                  {/* <Route exact path="/host/lobby" components={HostRoot}/> */}
                  <Route exact path="/host/lobby/:id" component={HostLobby}/> 
              </Router>

              <body>
                <div>
                  
                </div>
              </body>
            </div>
        );
    }
}

export default Root;