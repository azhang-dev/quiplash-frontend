import React, { Component } from 'react';
import axios from 'axios'
import UserRoot from './users/UserRoot'
import "./Root.css";
import Lobby from './users/Lobby'

import HostLobby from './host/HostLobby'
import HostGame from './host/HostGame'
import HostRoot from './host/HostRoot'
import RoomsList from './RoomsList'
import { API_ROOT } from '../constants';


import Login from './Login'
import SignUp from './SignUp'

import MyProfile from './MyProfile'
import Questionbank from './Questionbank'

import {HashRouter as Router, Route, Link} from 'react-router-dom'


class Root extends Component {
    //App state
  state = {
    currentUser: undefined,
    roomId: ''
  }

  //function to run on component mounting
  componentWillMount(){
    this.setCurrentUser();
    // console.log("------------------MOUNTED ROOT PAGE-------------------", this.state)
  }

  //function to set the state to the current logged in user
  setCurrentUser = () => {
    
    const res = axios.get( `${API_ROOT}/users/current` )
    .then(res => {
      this.setState({currentUser: res.data})
      // console.log(res)
    })
    .catch(err => console.warn(err));
  }

  //function to log the user out.
  handleLogout = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = undefined
  }

  handleChange = (e) => {
    this.setState({roomId: e.target.value})

  }

    render() {
        return (
            <div className="container">
              <Router>
                <header>
                  <nav className="navbar">
                        { // This is a tenary expression that displays a login/sign up link if !currentUser
                        // or a logout/myProfile link if currentUser === true
                        this.state.currentUser !== undefined
                        ?
                        (
                            <ul>
                            <li className="nav-links-header"> G'day {this.state.currentUser.name} </li>
                            <li><Link to = '/my_profile' className="nav-links-header">My Profile</Link> </li>
                            <li><Link onClick = {this.handleLogout} to = '/' className="nav-links">Logout</Link></li>
                            </ul>
                        )
                        :
                        (
                            <ul>
                            <li><Link to = '/login' className="nav-links-header">Log In</Link></li>
                            <li><Link to = '/signup' className="nav-links-header" >Sign Up</Link></li>
                            </ul>
                        )
                        }
                        <Route 
                        exact path = '/login' 
                        render={(props) => <Login setCurrentUser = {this.setCurrentUser}{...props}/>}
                        />
                        <Route exact path="/signup" component={SignUp}/> 
                  </nav>
                </header>
                <hr/>
                    
                    <h1 className='homeLogo'>SPY-FALL</h1>
                    <Link to="/" className="nav-links">GameStart</Link> |&nbsp; 
                    {/* <Link to="/play">Root player page</Link> |&nbsp;  */}
                    {/* <Link to="/play/lobby">LOBBY PAGE</Link> |&nbsp;  */}
                    <Link to="/host/lobby" className="nav-links">Host PAGE</Link>|&nbsp; 
                    {/* <Link to="/host/game">Host GAME(test)</Link>|&nbsp;  */}
                    <Link to="/user/join"className="nav-links">User Join Game</Link>
                    
        
                  
                  

                    <div className ="body-content">
                    <Route exact path="/play" component={UserRoot}/> 
                    <Route exact path="/host/lobby" component = {HostRoot}/>
                    <Route exact path="/host/game" component={HostGame}/>
                    <Route exact path = "/my_profile" component = {MyProfile}/>
                    <Route exact path="/lobbies" component={RoomsList }/>
                    <Route exact path="/host/lobby/:id" component={HostLobby}/> 
                    <Route exact path="/user/join" component={Lobby}/> 
  
                    <Route exact path= "/my_profile/questionbank/:id" component={Questionbank} />
                    </div>
               

                <div>
                <h2>Please input the room number below</h2>

                <form className='join-game-form'>
                    <input type="text" value={this.state.roomId} onChange={this.handleChange}></input>
                    <Link to={`/host/lobby/${this.state.roomId}`}>
                    <button>Join</button>
                    </Link>
                </form>
               

                <br/>
                <br/>
                </div>
                </Router>
                </div>
            
        );
    }
}

export default Root;