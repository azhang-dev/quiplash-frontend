import React, { Component } from 'react';

class CurrentQuestion extends Component {

    state = {
        question: 1
    }

    componentDidMount(){
        console.log("QUESTION MOUNTED")
        // this.changeQuestionState()
    };

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
        console.log("QUESTION STATE HAS BEEN CHANGED TO", this.state.question);
    };


    // handle input ? 

    // axios post onSubmit... how can we tell if blank? 



    render() {
        return (
            <div>
                <h1>CURRENT QUESTION GOES HERE</h1>
                <h2>This is QUESTION {this.props.round} </h2>
            
            </div>
        );
    };
};

export default CurrentQuestion;