import React from 'react'

import NewQuestionForm from './NewQuestionForm';

import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default class Questionbank extends React.Component {
  
  render(){
    return(
      <div>
         
        <h2>ADD YOUR QUESTIONS </h2>
      
        <NewQuestionForm />

         
      </div>
    );
  }//render
}
