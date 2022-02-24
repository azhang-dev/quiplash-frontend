import React, { Component } from 'react';
import Lobby from './Lobby'
import CurrentQuestion from './CurrentQuestion'
import CurrentAnswer from './CurrentAnswer'
import "../host/HostLobby.css";

// NOTES:
    // 

class UserRoot extends Component {

    state = {
        inLobby: false,
        questionTime: true,
        roundCounter: 0.5,
        round: 1,
        questions: [],
        currentQuestion: []
    }

    componentDidMount(){
        // console.log(this.state.inLobby)
        // console.log('mounted')
        // this.timer()
        console.log("*****", this.props.passQuestions )
        this.setState({questions: this.props.passQuestions})
        if (this.state.currentQuestion.length === 0 ){
            this.setState({currentQuestion: this.props.passQuestions.questions[0]}, ()=> console.log("!!!!!!!!!!!", this.state))
        }
    }

    switchLobbyState = () => {

        this.setState({inLobby: false})
       
    }
    // passQuestion = () => {
    //     console.log("GOT IT!!!")
    // }

    timer = () => {
        // if (!this.state.inLobby){
        //     this.timer = setInterval( () => this.switchGameState(),1000)
        // }
    }
    
    switchGameState = () => {
        this.setState({questionTime: !this.state.questionTime, roundCounter: this.state.roundCounter+=0.5})
        if (this.state.roundCounter % 1){
            // console.log('STATE :)', this.state.round)

            // this.setState((prevState, props) => ({
            //     round: prevState.round + 1
            //   }, console.log('WHAT ARE THESE????', prevState)));


            this.setState({round: this.state.round + 1 })
            this.setState({currentQuestion: this.state.questions.questions[this.state.round]})
            // this.setState({currentQuestion: this.state.questions[1]})
        }
        if (this.state.roundCounter === 3){
            clearInterval(this.timer)
            // console.log('STATE :(', this.state.round)
        }
    }
    roundCounter = () => {
        console.log("USER ROOT: ROUNDCOUNTER")
        if (this.state.roundCounter < 3){
            this.switchGameState()

        }
    }
    
    render() {
        return (
            <div>
                {/* <h1>Root page for users</h1> */}
                {/* <h3>we render everything here? instead of routing to each ?</h3> */}

                {
                this.state.inLobby
                ?
                <Lobby />
                :
                    this.state.questionTime 
                    ? 
                    <div>
                        {this.state.currentQuestion.question}
                    <CurrentQuestion round={ this.state.round } roundCounter={this.roundCounter} currentQuestion={this.state.currentQuestion}/> 
                    </div>
                    : 
                    <CurrentAnswer round={ this.state.round } roundCounter={this.roundCounter} currentQuestion={this.state.currentQuestion}/>
                }
            </div>
        );
    }
}

export default UserRoot;