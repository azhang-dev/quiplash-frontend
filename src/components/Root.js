import React, { Component } from 'react';
import axios from 'axios'
import UserRoot from './users/UserRoot'
import Lobby from './users/Lobby'
import HostLobby from './host/HostLobby'
import GameStart from './GameStart'
import HostGame from './host/HostGame'


import {HashRouter as Router, Route, Link} from 'react-router-dom'




class Root extends Component {
    render() {
        return (
            <div>
                <Router>
                    <h1>TESTING PAGE: ROOT</h1>
                    <Link to="/">GameStart</Link> |&nbsp; 
                    <Link to="/play">Root player page</Link> |&nbsp; 
                    <Link to="/play/lobby">LOBBY PAGE</Link> |&nbsp; 
                    <Link to="/host/lobby">Host PAGE</Link>


                    <Route exact path="/" component = {GameStart} />
                    <Route exact path="/play" component={UserRoot}/> 
                    <Route exact path="/play/lobby" component={Lobby}/> 
                    {/* <Route exact path="/play/lobby/:id" component={Lobby}/>  */}
                    <Route exact path="/host/lobby" component={HostLobby}/>
                    <Route exact path="/host/game" component={HostGame}/>
                </Router>
            </div>
        );
    }
}

export default Root;