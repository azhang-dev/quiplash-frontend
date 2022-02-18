import React, { Component } from 'react';

class CurrentAnswer extends Component {

    state = {
        answer: 0
    }

    componentDidMount(){
        // console.log("ANSWER MOUNTED")
    }

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