import React, { Component } from 'react';
import Lobby from '../users/Lobby'
import { API_ROOT, HEADERS } from '../../constants';
import "./HostLobby.css";
import axios from 'axios';

class HostLobby extends Component {

    state= {
        lobbyPlayers: [],
        currentUsers: [],
        currentLobby: "",
        host: "",
    };

    componentDidMount(){
        this.setState({currentLobby: this.props.match.params.id})
        console.log("")
    }

    setHost = () => {
        let token = "Bearer " + localStorage.getItem("jwt");
        const res = axios.get( `${API_ROOT}/users/current`, {
          headers: {
            'Authorization' : token
          }
        })
        .then(res => {
          this.setState({host: res.data})
          console.log("This.state", this.state)
        })
        .catch(err => console.warn(err));
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
                <p>Go to ---URL--- and enter code: "{this.props.match.params.id}" to join </p>
                <div className = "connected-player">{this.playersConnection()}

                </div>
            </div>
        )
    };
}

export default HostLobby;