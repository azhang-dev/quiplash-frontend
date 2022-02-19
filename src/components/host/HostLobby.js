import React, { Component } from 'react';
import Lobby from '../users/Lobby'

class HostLobby extends Component {
    render() {
        const startGame = () => {
            // this.props.sendData()
            console.log('this is being called')
            // return <Lobby changeState={startGame} />
            // console.log('this is NOT being called')
        }
        return (
            <div>
                <h1>Host lobby</h1>
                <button onClick={startGame}>CLICK ME :)</button>
            </div>
        );
    }
}

export default HostLobby;