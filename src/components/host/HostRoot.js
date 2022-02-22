import React, { Component } from 'react';
import RoomsList from '../RoomsList'
import GamesArea from '../GamesArea'
import {HashRouter as Router, Route} from 'react-router-dom'
// import RoomsList from '../RoomsList'

class HostRoot extends Component {

    lobbyRoute = (id) => {
        // console.log(id)
        // console.log(id)
        this.props.history.push(`/host/lobby${id}`)
    }

    render() {
        return (
            <div>
                <h1>Quiplash Clone</h1>
                <RoomsList routeToLobby={this.lobbyRoute}/>
            </div>
        );
    }
}

export default HostRoot;