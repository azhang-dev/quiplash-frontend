import React, { Component } from 'react';
import RoomsList from '../RoomsList';



class JoinGame extends Component {
    state = {
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
                <h2>Lobby page</h2>
                <label calssName="join-game"> Room Code </label>
                    <input text="text" onChange={this.roomCode}/>
                <p>Player {this.props.userName} </p> 
                <button onClick ={this.handleClick}>Join Game</button>
                {/* <RoomsList /> */}


              
            </div>
        );
    }
}

export default JoinGame;