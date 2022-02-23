import React, { Component } from 'react';
import Lobby from './JoinGame'
import CurrentQuestion from './CurrentQuestion'
import CurrentAnswer from './CurrentAnswer'

// NOTES:
    // 

class UserRoot extends Component {

    state = {
        inLobby: true,
        questionTime: true,
        roundCounter: 0.5,
        round: 1
    }

    componentDidMount(){
        // console.log(this.state.inLobby)
        // console.log('mounted')
        this.timer()
    }

    switchLobbyState = () => {

        this.setState({inLobby: false})
    }


    timer = () => {
        if (!this.state.inLobby){
            this.timer = setInterval( () => this.switchGameState(),1000)
        }
    }
    
    switchGameState = () => {
        this.setState({questionTime: !this.state.questionTime, roundCounter: this.state.roundCounter+=0.5})
        if (this.state.roundCounter % 1){
            // console.log('STATE :)', this.state.round)

            // this.setState((prevState, props) => ({
            //     round: prevState.round + 1
            //   }, console.log('WHAT ARE THESE????', prevState)));


            this.setState({round: this.state.round + 1})
        }
        if (this.state.roundCounter === 3){
            clearInterval(this.timer)
            // console.log('STATE :(', this.state.round)
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
                    <CurrentQuestion round={ this.state.round }/> 
                    : 
                    <CurrentAnswer round={ this.state.round }/>
                }
            </div>
        );
    }
}

export default UserRoot;