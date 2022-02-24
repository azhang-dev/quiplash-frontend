import React from 'react'
import axios from 'axios'
import { API_ROOT } from '../constants';
import {HashRouter as Router, Route, Link} from 'react-router-dom'


export default class QuestionBankIndex extends React.Component {
  state = {
    currentUser: {
      name: '',
      email: ''
    },
    questionbanks: [],
    loading: true,
  }
  
  fetchQuestionBank = async () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    try {
      const res = await axios.get(`${API_ROOT}/user/${this.state.currentUser.id}/questionbanks`, {
        // headers: {
        //   'Authorization': token
        // }
      })
      this.setState({questionbanks: res.data, loading: false})
      console.log(`${this.state.currentUser.name}'s question banks:`, this.state.questionbanks)
    } catch (err) {
      console.log( "err: ", err)
    };
    // let token = "Bearer " + localStorage.getItem("jwt");
    // const res = axios.get(`${API_ROOT}/user/${this.state.currentUser.id}/questionbanks`, {
    //   headers: {
    //     'Authorization': token
    //   }
    // })
    // .then(res => {
    //   this.setState({questionbanks: res.data})
    //   console.log(`${this.state.currentUser.name}'s question banks:`, this.state.questionbanks)
    // })
    // .catch(err => console.warn(err))
  }

  setCurrentUser = () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios.get(`${API_ROOT}/users/current`, {
      headers: {
        'Authorization': token
      }
    })
    .then(res => {
      this.setState({currentUser: res.data})
      this.fetchQuestionBank()
      
    })
    .catch(err => console.warn(err))
  }

  componentDidMount(){
    this.setCurrentUser()
  }


  render(){
    const { loading, questionbanks } = this.state;
    return(
      <div>
        <p>Question Bank Index for {this.state.currentUser.name}</p>
        {
          loading
          ?
          <p>Loading Question Banks</p>
          :
          <div>
            {
              
              questionbanks.map( qb => <Link to={`/my_profile/questionbank/${qb.id}`} >{qb.name}</Link>)
            }
          </div>
        }
      </div>
    );
  }//render
}