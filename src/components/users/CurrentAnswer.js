import React, { Component } from 'react';


class CurrentAnswer extends Component {

    state = {
        answer: 1
    }

    componentDidMount(){
        console.log("Answer MOUNTED")

        // axios get questions 

    };

    componentDidUpdate(prevProps){
        if (this.props.round != prevProps.round ){
            this.changeAnswerState();
        };
    };

    componentWillUnmount(){
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

    
    // axios post onSubmit... how can we tell if blank? 
    // HOST SIDE: 
        // Axios get answers ... 

    render() {
        return (
            <div>
                <h1>CURRENT ANSWER GOES HERE?</h1>
                <h2>This is ANSWER {this.props.round}</h2>

            </div>
        );
    }
}

export default CurrentAnswer;