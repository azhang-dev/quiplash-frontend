import React, { Component } from 'react';
import axios from 'axios'
import UserRoot from './users/UserRoot'
import Lobby from './users/Lobby'
import HostLobby from './host/HostLobby'


import {HashRouter as Router, Route, Link} from 'react-router-dom'




class Home extends Component {
    render() {
        return (
            <div>
                <Router>
                    <h1>TESTING PAGE: ROOT</h1>
                    <Link to="/play">Root player page</Link> |&nbsp; 
                    <Link to="/play/lobby">LOBBY PAGE</Link> |&nbsp; 
                    <Link to="/host/lobby">Host PAGE</Link>



                    <Route exact path="/play" component={UserRoot}/> 
                    <Route exact path="/play/lobby" component={Lobby}/> 
                    {/* <Route exact path="/play/lobby/:id" component={Lobby}/>  */}
                    <Route exact path="/host/lobby" component={HostLobby}></Route>
                </Router>
            </div>
        );
    }
}

export default Home;