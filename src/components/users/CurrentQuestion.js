import React, { Component } from 'react';

class CurrentQuestion extends Component {

    state = {
        question: 1,
        questionText:'',
        timer: '',
        countdown: 60,
    }

    componentDidMount(){
        // console.log("QUESTION MOUNTED", this.props.currentQuestion)
        let timer = setInterval(this.countdown, 100)
        this.setState({timer: timer})

    };
    countdown = () => {
        if (this.state.countdown > 0){
            this.setState({countdown: this.state.countdown - 1})
            // console.log("ANSWER TIME!!!!")
        } else {
            clearInterval(this.state.timer)
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.round != prevProps.round ){
            this.changeQuestionState();
        };
    };

    // componentDidUnmount(){
    //     // console.log("QUESTION UNMOUNTED")
    //     console.log("AFTER UNMOUNT!!!!", this.props.round);
    // };

    changeQuestionState = () => {
        let currentRound = this.props.round;
        
        this.setState({question: currentRound}, () => {
            this.loggingForChangeOfQuestionState()
        });
    };

    loggingForChangeOfQuestionState = () => {
        // console.log("QUESTION STATE HAS BEEN CHANGED TO", this.state.question);
    };

    roundCounter = () => {
        // console.log("ROUND COUNTER HAS BEEN CALLED!!")
        this.props.roundCounter()
    }
    // handle input ? 

    // axios post onSubmit... how can we tell if blank? 

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

                <h2>This is QUESTION {this.props.round} </h2>
            
            </div>
        );
    };
};

export default CurrentQuestion;