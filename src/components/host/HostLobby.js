import React, { Component } from 'react';
import { API_ROOT, HEADERS } from '../../constants';
import "./HostLobby.css";
import axios from 'axios';
import { ActionCableConsumer } from 'react-actioncable-provider';
import NewQuestionForm from './NewQuestionForm'

class HostLobby extends Component {

    state= {
        lobbyPlayers: [],
        currentUsers: [],
        currentLobby: 0,
        currentUser: "",
        hostID: "",
        gameStart: false,
        gameInfo:[],
        checkLobby: ''
    };


    componentDidMount(){
        console.log("HOSTLOBBY HAS BEEN MOUNTED")
        this.setCurrentUser()
        
        this.getCurrentLobby()
        console.log("this.state", this.state)
        let checkLobby = setInterval(this.fetchLobbyUsers, 4000)
        this.setState({checkLobby: checkLobby})
        
    }
    componentDidUnmoun(){
        clearInterval(this.state.checkLobby)
    }

    fetchLobbyUsers = () => {
        if (this.state.gameStart === true){
            clearInterval(this.state.checkLobby)
        }
        console.log("FETCHING")
        console.log(this.state.gameInfo)
        let token = "Bearer " + localStorage.getItem("jwt");
        const res = axios.get(`${API_ROOT}/rooms/${this.props.match.params.id}`, {
            headers: {
                'Authorization' : token
            }
        })
        .then(res => {
            // console.log(this.state.currentUsers)
            if (this.state.currentUsers !== res.data.users){
                this.setState({currentUsers: res.data.users})
                this.playersConnection()
            }
            console.log(this.state.currentUsers)
            if ( JSON.parse(res.data.game_status) === true){
                console.log("GAME HAS STARTED!!")
                console.log(this.state.gameStart)
                this.setState({gameStart: true})
                console.log(JSON.parse(res.data.game_status))
            }
        })
        .catch(err => console.error(err));
        
        if (this.state.gameInfo.game_status === true){
            this.setState({gameStart: true})
        }
        console.log(this.state.gameStart)
        console.log("FINISHED FETCH")
        // clearInterval(this.fetchLobbyUsers())
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
        const res = axios.post(`${API_ROOT}/room/edit/${this.props.match.params.id}`)
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
            let players = this.state.currentUsers[i];
            if (!players) {
                lobbyStatus += "empty-player-slot";
                players = { id: i, name: "Join Game"}
                // console.log(i);
            }
            connectedPlayers.push(
                <div className={lobbyStatus} key={players.id}>
                    {players.name}
                </div>,
            );
        }
        return connectedPlayers
    }

    handleReceivedRoom = (res) => {
        let room = this.state.currentLobby
        console.log("ROOM", room)
        console.log("RECIEVED", res)
        console.log("RES.GAME", res.game.room_id)
        if (res.game.room_id === parseInt(room)){
            console.log("THIS INFORMATION IS RELEVANT FOR ROOM:", room)
        } else {
            console.log("THIS INFORMATION IS NOT RELEVANT FOR OUR ROOM")
        }
    }

   
    startGame = () => {
        // this.props.sendData()
        console.log("BUTTON CLICKED!")
        // this.props.history.push("/hostgame")
        // if(this.state.lobbyPlayers.length < 3 ){
        //     console.log(" you need to have more players to ");
        // }else{
        // console.log('this is being called')
        // return <Lobby changeState={startGame} />
        // // this.props.history.push("/host/game")

        // // console.log('this is NOT being called')
        // }

        const res = axios.put(`${API_ROOT}/room/start/${this.props.match.params.id}`)
        .then(res => {
            console.log("update", res.data)
            this.setState({gameInfo: res.data})
        })
        .catch(err => console.warn(err));


    }
    render() {
       
        return (
            <div className="hostContainer">
                <h2>Host lobby {this.state.currentLobby.id}</h2>
                <h3>Go to ---URL--- and enter code: "{this.props.match.params.id}" to join </h3>
                <button onClick = {this.updateUsersInRoom}>UpdateUsers</button>

                <ActionCableConsumer // THIS IS CHECKING FOR NEW ROOMS 

                channel={{ channel: 'GamesChannel', room: this.props.match.params.id }}
                onReceived={this.handleReceivedRoom}
                >

                </ActionCableConsumer>

                
                {
                this.state.currentUser.id === this.state.currentLobby.host_id
                ?
                //<NewQuestionForm />
                <button onClick={this.startGame}>Game Start</button>
                :
                    this.state.gameStart
                    ?
                    <p>GAME STARTED</p>
                    :
                    <p>Waiting for game to start...</p>
                }
               <br/>
                <div className = "connected-player">{this.playersConnection()}


                </div>
            </div>
        )
    };
}

export default HostLobby;