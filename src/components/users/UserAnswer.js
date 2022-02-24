import React, { Component } from 'react';
import axios from 'axios';
import { API_ROOT } from '../../constants';

export default class UserAnswer extends React.Component {

    state = {
        answer: "",

        
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value 
        });
        console.log(this.state.question);
    }


    handleSubmit= async (e) =>{
        e.preventDefault()
        
        console.log('submit clicked');
        // console.log(this.props.data);
        // console.log(this.props.data.questionbank.id);
        try {
            // const res = await axios.post(`${API_ROOT}/questionbanks/${this.props.data.questionbank.id}/createquestions`, {question: this.state.question})
            // console.log('post answer', res.data);
        } catch (err) {
            console.log('Error submit answer: ', err);
        }

    }

      render (){

        return (
            <form onSubmit={this.handleSubmit}>
              
                <div className="form-input-container">
                    <label>Your Answer</label>
                    <input type="text" name="answer" placeholder="Enter your answer" onChange={this.handleInput}/>
                </div>
                <button>Submit</button>
            
            </form>
        )
    }


}