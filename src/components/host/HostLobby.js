import React, { Component } from 'react';
import Lobby from '../users/Lobby'

class HostLobby extends Component {

    state= {
        lobbyPlayers: []
    };

    roomCode(){
        console.log('Roomcode plzz');
    }

    render() {
        const startGame = () => {
            // this.props.sendData()
            if(this.state.lobbyPlayers.length < 3 ){
                console.log(" you need to have more players to ");
            }else{
            console.log('this is being called')
            return <Lobby changeState={startGame} />
            // this.props.history.push("/host/game")

            // console.log('this is NOT being called')
            }
        }
        return (
            <div>
                <h1>Host lobby</h1>
                <button onClick={startGame}>CLICK ME :)</button>
            </div>
        )
    };
    
}

export default HostLobby;