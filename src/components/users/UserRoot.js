import React, { Component } from 'react';
import Lobby from './Lobby'
import CurrentQuestion from './CurrentQuestion'
import CurrentAnswer from './CurrentAnswer'



class UserRoot extends Component {

    state = {
        inLobby: false,
        questionTime: true,
        round: 0
    }

    componentDidMount(){
        this.timer()
    }

    timer = () => {
        this.timer =setInterval(()=> this.switchGameState(),1000)
         
    }

    switchGameState = () => {
        this.setState({questionTime: !this.state.questionTime, round: this.state.round+=0.5})
        console.log(this.state.questionTime, 'round', this.state.round)
        if (this.state.round > 3){
            clearInterval(this.timer)
        }
    }
    
    render() {
        return (
            <div>
                <h1>Root page for users</h1>
                <h3>we render everything here? instead of routing to each ?</h3>

                {
                this.state.inLobby
                ?
                <Lobby />
                :
                    this.state.questionTime 
                    ? 
                    <CurrentQuestion /> 
                    : 
                    <CurrentAnswer />
                }
            </div>
        );
    }
}

export default UserRoot;