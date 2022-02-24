import React, { Component } from 'react';


class CurrentAnswer extends Component {

    state = {
        answer: 1,
        timer: '',
        countdown: 60,
        
    }

    componentDidMount(){
        console.log("Answer MOUNTED")
        let timer = setInterval(this.countdown, 100)
        this.setState({timer: timer})
    };
    countdown = () => {
        if (this.state.countdown > 0){
            this.setState({countdown: this.state.countdown - 1})
        } else {
            clearInterval(this.state.timer)
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.round != prevProps.round ){
            this.changeAnswerState();
        };
    };

    componentDidUnmount(){
        // console.log("Answer UNMOUNTED")
        console.log("AFTER UNMOUNT!!!!", this.props.round);
    };

    changeQuestionState = () => {
        let currentRound = this.props.round;
        
        this.setState({answer: currentRound}, () => {
            this.loggingForChangeOfAnswerState()
        });
    };

    loggingForChangeOfAnswerState = () => {
        console.log("ANSWER STATE HAS BEEN CHANGED TO", this.state.answer);
    };


    // handle input ? <--- checking which option(button) was chosen
    

    roundCounter = () => {
        console.log("ROUND COUNTER HAS BEEN CALLED!!")
        this.props.roundCounter()
    }
    // axios post onSubmit... how can we tell if blank? 
    // HOST SIDE: 
        // Axios get answers ... 

    render() {
        return (
            <div>
               
                {/* <h1>CURRENT QUESTION GOES HERE</h1> */}
                <h2>{this.state.countdown}</h2>

                {
                this.state.countdown === 0
                ?
                <div>

                <h2>TIME'S UP!!</h2>
                {
                    this.roundCounter()
                }
                </div>
                :
                <p></p>
                }

                <h2>This is ANSWER {this.props.round} </h2>
            </div>
        );
    }
}

export default CurrentAnswer;