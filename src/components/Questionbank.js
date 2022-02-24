import React from 'react'

import NewQuestionForm from './NewQuestionForm';

import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default class Questionbank extends React.Component {
  
  state = {
    currentUser: {
      name: '',
      email: ''
    },
    questionbanks: [],
    loading: true,
  }

  //  fetchQuestionBank = async () => {
  //   let token = "Bearer " + localStorage.getItem("jwt");
  //   try {
  //     const res = await axios.get(`${API_ROOT}/user/${this.state.currentUser.id}/questionbanks`, {
  //       headers: {
  //         'Authorization': token
  //       }
  //     })
  //     this.setState({questionbanks: res.data, loading: false})
  //     console.log(`${this.state.currentUser.name}'s question banks:`, this.state.questionbanks)
  //   } catch (err) {
  //     console.log( "err: ", err)
  //   };
   
  // }

  render(){
    return(
      <div>
         
        <h2>Question list:</h2>
        

        <h2>ADD YOUR QUESTIONS </h2>
      
        <NewQuestionForm />

         
      </div>
    );
  }//render
}
