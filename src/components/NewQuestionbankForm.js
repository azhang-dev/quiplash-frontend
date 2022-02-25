import React from 'react'
import axios from 'axios'
import { API_ROOT } from '../constants';


export default class NewQuestionbankForm extends React.Component {

    state = {
        name: '',
        // questions: [],
        // question1: "",
        // question2: "",
        // question3: "",
        // question4: "",


    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value 
        });
        // console.log(this.state.name);
    }

    handleSubmit= async (e) =>{
        e.preventDefault()
        let token = "Bearer " + localStorage.getItem("jwt");
        // console.log('submit clicked');
        try {
            const res = await axios.post(`${API_ROOT}/questionbanks`, this.state,{headers: {  'Authorization' : token }})
            // console.log('post newQuestionbank ', res);
        } catch (err) {
            // console.log('Error making new question: ', err);
        }

    }

    
    render (){

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-input-container">
                    <label>Location Bank Name</label>
                    <input type="text" name="name" placeholder="Enter Name" onChange={this.handleInput}/>
                </div>
              
                <button type="button" class="btn btn-danger btn-sm">Create</button>
            
            </form>
        )
    }

}