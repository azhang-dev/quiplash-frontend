import React, { Component } from 'react';
import Lobby from '../users/Lobby'
import { API_ROOT, HEADERS } from '../../constants';
import "./HostLobby.css";

class HostLobby extends Component {

    state= {
        lobbyPlayers: [],
        currentUsers: [],
        currentLobby: "",
    };

    componentDidMount(){
        this.setState({currentLobby: this.props.match.params.id})
    }

    playersConnection(){
        let connectedPlayers = [];
        for (let i = 0; i < 8; i++){
            let lobbyStatus = "connected-players"
            let players = this.state.lobbyPlayers[i];
            if (!players) {
                lobbyStatus += "empty-player-slot";
                players = { id: i, name: "Join Game"}
                console.log(i);
            }
            connectedPlayers.push(
                <div className={lobbyStatus} key={players.id}>
                    {players.name}
                </div>,
            );
        }
        return connectedPlayers
    }



   
    startGame = () => {
        // this.props.sendData()
        console.log("BUTTON CLICKED!")
        this.props.history.push("/hostgame")
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
                <h1>Host lobby {this.state.currentLobby}</h1>
                <button className ="btn btn-outline-secondary" onClick={this.startGame}>Game Start</button>
                <p>Join the game by {this.props.match.params.id} </p>
                <div className = "connected-player">{this.playersConnection()}

                </div>
            </div>
        )
    };
}

export default HostLobby;