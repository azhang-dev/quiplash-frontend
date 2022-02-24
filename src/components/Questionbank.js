import React from 'react'
import axios from 'axios'
import NewQuestionForm from './NewQuestionForm';
import { API_ROOT } from '../constants';

import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default class Questionbank extends React.Component {
  
  state = {
  
    loading: true,
    questionbank: {},
  }

  componentDidMount(){
    this.fetchQuestionlist()

  }

   fetchQuestionlist = async () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    try {
      const url = `${API_ROOT}/questionbanks/${this.props.match.params.id}/questions`
      console.log("questionbank fectch url", url)
      const res = await axios.get(url, {
        headers: {
          'Authorization': token
        }
      })
      console.log(`questions:`, res.data)
      this.setState({questionbank: res.data, loading: false})
    } catch (err) {
      console.log( "err: ", err)
    };
   
  }

  render(){
    const { loading, questionbank} = this.state;
    return(
      <div>
        <p>Question Bank: {this.state.questionbank.name}</p>
        <h2>Question list:</h2>
        {
          loading
          ?
          <p>Loading Questions</p>
          :
          <div>
            {
              questionbank.questions.map( q => <p>{q.question}</p> )
              
            }
          </div>
        }

        <h2>ADD YOUR QUESTIONS </h2>
      
        <NewQuestionForm />

         
      </div>
    );
  }//render
}
