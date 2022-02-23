import React, { Component } from 'react';
import { API_ROOT, HEADERS } from '../../constants';
import "./HostLobby.css";
import axios from 'axios';
import NewQuestionForm from './NewQuestionForm'

class HostLobby extends Component {

    state= {
        lobbyPlayers: [],
        currentUsers: [],
        currentLobby: "",
        currentUser: "",
        hostID: ""
    };

    componentDidMount(){
        this.setCurrentUser()
        
        this.getCurrentLobby()
        console.log("this.state", this.state)
    }

    setCurrentUser = () => {
        let token = "Bearer " + localStorage.getItem("jwt");
        const res = axios.get( `${API_ROOT}/users/current`, {
          headers: {
            'Authorization' : token
          }
        })
        .then(res => {
          this.setState({currentUser: res.data})
          console.log("This.state", this.state)
          
        })
        .catch(err => console.warn(err));
      }

    getCurrentLobby = () => {
        const res = axios.get( `${API_ROOT}/rooms/${this.props.match.params.id}`)
        .then(res => {
            this.setState({currentLobby: res.data})
            console.log("getcurrentLobby:", res.data)
        })
        .catch(err => console.warn(err));
    }

    updateUsersInRoom = () => {

        const res = axios.put(`${API_ROOT}/room/edit/${this.props.match.params.id}`)
        .then(res => {
            console.log("update", res.data)
            this.getCurrentLobby()
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
                <h1>Host lobby {this.state.currentLobby.id}</h1>
                {
                this.state.currentUser.id === this.state.currentLobby.host_id
                ?
                //<NewQuestionForm />
                <button className ="btn btn-outline-secondary" onClick={this.startGame}>Game Start</button>
                :
                <p>Waiting for game to start...</p>
                }
                <p>Go to ---URL--- and enter code: "{this.props.match.params.id}" to join </p>
                <div className = "connected-player">{this.playersConnection()}

                <button onClick = {this.updateUsersInRoom}>UpdateUsersInRoom</button>

                </div>
            </div>
        )
    };
}

export default HostLobby;