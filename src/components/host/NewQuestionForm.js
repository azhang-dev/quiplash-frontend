import React, { Component } from 'react';


export default class Login extends React.Component {

    state = {
        defaultQuestions: false,
        customQuestions: [],

    }

    handleClick = (ev) => {

    }

    render() {

        return(
            <div>
                <h1>Pick your questions:</h1>
                <button>Default Questions</button>
                <button>Custom Questions</button>
            </div>

        )
    };



}

export default HostLobby;