import React, { Component } from 'react';
import RoomsList from '../RoomsList';



class JoinGame extends Component {
    state = {
        game: false,
        users: []
    }
    componentDidMount(){
        // this.setState({users: this..name})
        console.log('MOUNTED!!')
        // this.timer = setInterval(()=> this.getStatus(),1000)
    }
    // componentDidUnmount(){
    //     console.log('UNMOUNTED!!')
    // }

    getStatus() {
        if (this.state.game === true){
            console.log('YO')
        } else {
            console.log('game')
        }
    }

    startGame = () => {
        console.log('game started')
        this.setState({game:true})
    }

    roomCode(e){
        this.setState({ roomCode: e.target.value})
    }

    render() {


        return (
            <div>
                <h1>Lobby page (users)</h1>
                <label calssName="join-game"> Room Code </label>
                    <input text="text" onChange={this.roomCode}/>
                <p>Player  </p> 
                <RoomsList />
                <button>Join Game</button>


              
            </div>
        );
    }
}

export default JoinGame;