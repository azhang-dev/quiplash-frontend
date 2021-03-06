import React from 'react'
import axios from 'axios'
import { API_ROOT } from '../constants';
import NewQuestionbankForm from './NewQuestionbankForm';
import QuestionBankIndex from './QuestionBankIndex';

// const API_ROOT = 'http://localhost:3000'

export default class MyProfile extends React.Component {
  state = {
    currentUser: {
      name: '',
      email: ''
    }
  }

  componentDidMount(){
    let token = "Bearer " + localStorage.getItem("jwt");
    axios.get(`${API_ROOT}/users/current`, {
      headers: {
        'Authorization': token
      }
    })
    .then(res => {
      this.setState({currentUser: res.data})
      // console.log('MyProfile state = ', this.state)
      
    })
    .catch(err => console.warn(err));
  }

  


  render(){
    return(
      <div className="myProfile">
        <div className="myProfileDetail">
          <h2>Hello {this.state.currentUser.name}<br/>
          Your email is {this.state.currentUser.email}</h2>
        </div>
        <div>
          <NewQuestionbankForm />
          <hr />
          <QuestionBankIndex/>
          <br />

        </div>
      </div>
    );
  }//render
}