import React, { Component } from 'react';
import axios from 'axios'
import UserRoot from './users/UserRoot'
import Lobby from './users/Lobby'
import HostLobby from './host/HostLobby'
import GameStart from './GameStart'
import HostGame from './host/HostGame'
import HostRoot from './host/HostRoot'


import Login from './Login'
import MyProfile from './MyProfile'

import {HashRouter as Router, Route, Link} from 'react-router-dom'

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
                        { // This is a tenary expression that displays a login/sign up link if !currentUser
                        // or a logout/myProfile link if currentUser === true
                        this.state.currentUser !== undefined
                        ?
                        (
                            <ul>
                            <li> G'day {this.state.currentUser.name} |</li>
                            <li><Link to = 'my_profile'>My Profile</Link></li>
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
                        <Route 
                        exact path = '/login' 
                        render={(props) => <Login setCurrentUser = {this.setCurrentUser}{...props}/>}
                        />
                    </nav>
                    <hr />
                </header>
                    <h1>TESTING PAGE: ROOT</h1>
                    <Link to="/">GameStart</Link> |&nbsp; 
                    <Link to="/play">Root player page</Link> |&nbsp; 
                    <Link to="/play/lobby">LOBBY PAGE</Link> |&nbsp; 
                    <Link to="/host/lobby">Host PAGE</Link>|&nbsp; 
                    <Link to="/host/game">Host GAME(test)</Link>


                    <Route exact path="/" component = {GameStart} />
                    <Route exact path="/play" component={UserRoot}/> 
                    <Route exact path="/play/lobby" component={UserRoot}/> 
                    {/* <Route exact path="/play/lobby/:id" component={Lobby}/>  */}
                    <Route exact path="/host/lobby" component={HostRoot}/>
                    <Route exact path="/host/game" component={HostGame}/>
                    <Route exact path = '/my_profile' component = {MyProfile}/>
                    
                </Router>


            </div>
        );
    }
}

export default Root;