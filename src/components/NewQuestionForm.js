import React, { Component } from 'react';

import axios from 'axios';
import { API_ROOT } from '../constants';

export default class NewQuestionForm extends React.Component {

    state = {
        defaultQuestions: [],
        customQuestions: [],

    }
    componentDidMount(){
        console.log("mounted")
        
    }

    loadDefaultQuestions = () => {
        console.log("Default question button clicked")
        const res = axios.get( `${API_ROOT}/questions`)
        .then(res => {
            console.log('fetched default questions',res)
        });
    }

    customQuestions = () => {

    }

    render() {

        return(
            <div>
                <h1>Pick your questions:</h1>
                <button onClick = {this.laodDefaultQuestions}className ="btn btn-outline-secondary" >Default Questions</button>
                <button className ="btn btn-outline-secondary" >Custom Questions</button>
            
                
            </div>

        )
    };



}

