import React, { Component } from 'react';

import axios from 'axios';
import { API_ROOT } from '../constants';

export default class NewQuestionForm extends React.Component {

    state = {
        question1: "",
        question2: "",
        question3: "",
        question4: "",


    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value 
        });
        console.log(this.state.name);
    }

    handleSubmit= async (e) =>{
        e.preventDefault()
        let token = "Bearer " + localStorage.getItem("jwt");
        console.log('submit clicked');
        try {
            const res = await axios.post(`${API_ROOT}/questionbanks/createquestions`, this.state,{headers: {  'Authorization' : token }})
            console.log('post newQuestionbank ', res);
        } catch (err) {
            console.log('Error making new question: ', err);
        }

    }

    
    render (){

        return (
            <form onSubmit={this.handleSubmit}>
              
                <div className="form-input-container">
                    <label>Question 1</label>
                    <input type="text" name="question1" placeholder="Add your question" onChange={this.handleInput}/>
                </div>
                <div className="form-input-container">
                    <label>Question 2</label>
                    <input type="text" name="question2" placeholder="Add your question" onChange={this.handleInput} />
                </div>
                <div className="form-input-container">
                    <label>Question 3</label>
                    <input type="text" name="question3" placeholder="Add your question" onChange={this.handleInput}  />
                </div>
                <div className="form-input-container">
                    <label>Question 4</label>
                    <input type="text" name="question4" placeholder="Add your question" onChange={this.handleInput} />
                </div>
                
                <button>Create</button>
            
            </form>
        )
    }

}
