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
        console.log(this.state.name);
    }

    handleSubmit=  (e, id) =>{
        e.preventDefault()
        
        axios.post(`${API_ROOT}/questionbanks/${id}/createquestions`)
        .then(res => {
            this.setState({question: res.data})
        })
        

    }

    
    render (){

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-input-container">
                    <label>Questionbank Name</label>
                    <input type="text" name="name" placeholder="Enter Name" onChange={this.handleInput}/>
                </div>
              
                <button>Create</button>
            
            </form>
        )
    }

}