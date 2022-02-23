import React, { Component } from 'react';
import RoomsList from '../RoomsList'
import GamesArea from '../GamesArea'
import {HashRouter as Router, Route} from 'react-router-dom'
// import RoomsList from '../RoomsList'

class HostRoot extends Component {



    lobbyRoute = (res) => {
        console.log("THIS IS OUR RESPONSE!!!!!!!!!!!!!!!!!!",res)
        if (res.length === 0){

        } else {
            this.props.history.push(`/host/lobby/${res}`)
        }
    }

    render() {
        return (
            <div>
                <RoomsList routeToLobby={this.lobbyRoute}/>
            </div>
        );
    }
}

export default HostRoot;