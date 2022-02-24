import React from 'react'
import axios from 'axios'
import { API_ROOT } from '../constants';

import {HashRouter as Router, Route, Link} from 'react-router-dom'


// const API_ROOT = 'http://localhost:3000'

export default class MyProfile extends React.Component {
  
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


  render(){
    return(
      <div className="myProfile">
       <Router>
        <div className="myProfileDetail">
        <h2>Hello {this.state.currentUser.name}<br/>
        Your email is {this.state.currentUser.email}</h2>
        </div>
        
        
       </Router>

        
      </div>
    );
  }//render
}
