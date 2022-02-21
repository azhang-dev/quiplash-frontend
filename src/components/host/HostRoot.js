import React, { Component } from 'react';
import RoomsList from '../RoomsList'
import GamesArea from '../GamesArea'
import {HashRouter as Router, Route} from 'react-router-dom'


class HostRoot extends Component {
    render() {
        return (
            <div>
                <h1>Quiplash Clone</h1>
                <Router>
                    <Route exact path="/" component = {RoomsList} />
                    <Route exact path="/lobby/:id" component={GamesArea}/> 
                </Router>
            </div>
        );
    }
}

export default HostRoot;