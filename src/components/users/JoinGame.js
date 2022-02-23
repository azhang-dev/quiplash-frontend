import React, { Component } from 'react';
import RoomsList from '../RoomsList';



class JoinGame extends Component {
    state = {
        game: false,
        users: [],
        roomsList: null
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
        console.log('roomcode', e);
        // this.setState({ roomCode: e.target.value})
    }

    handleClick(){
        console.log('clicked')
    }

    render() {


        return (
            <div>
                <h1>Lobby page</h1>
                <label calssName="join-game"> Room Code </label>
                    <input text="text" onChange={this.roomCode}/>
                <p>Player  </p> 
                <button onClick ={this.handleClick}>Join Game</button>
                {/* <RoomsList /> */}


              
            </div>
        );
    }
}

export default JoinGame;