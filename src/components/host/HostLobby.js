import React, { Component } from 'react';
import Lobby from '../users/Lobby'
import { API_ROOT, HEADERS } from '../../constants';

class HostLobby extends Component {

    state= {
        lobbyPlayers: [],
        currentUsers: []
    };

    roomCode(){
        console.log('Roomcode plzz');
    }
    startGame = () => {
        // this.props.sendData()
        console.log("BUTTON CLICKED!")
        // if(this.state.lobbyPlayers.length < 3 ){
        //     console.log(" you need to have more players to ");
        // }else{
        // console.log('this is being called')
        // return <Lobby changeState={startGame} />
        // // this.props.history.push("/host/game")

        // // console.log('this is NOT being called')
        // }
    }
    render() {
       
        return (
            <div>
                <h1>Host lobby</h1>
                <button onClick={this.startGame}>CLICK ME :)</button>
            </div>
        )
    };
    
}

export default HostLobby;