import React from 'react'
import axios from 'axios'
import { API_ROOT } from '../constants';


export default class NewQuestionbankForm extends React.Component {

    state = {
        name: '',
        questions: [],
        

    }


    handleSubmit= async (e) =>{
        e.preventDefault()
        console.log('submit clicked');
        const newQuestionbank = {
            name: this.state.name,
            // questions: , // 
        }
        try {
            const res = await axios.post(API_ROOT, newQuestionbank)
            console.log('post newQuestionbank ', res);
        } catch (err) {
            console.log('Error making new question: ', err);
        }

    }

    
    render (){

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-input-container">
                    <label>Questionbank Name</label>
                    <input type="text" placeholder="Enter Name" onChange={(e)=>this.setState({name: e.target.value})} />
                </div>
                <div className="form-input-container">
                    <label>Question 1</label>
                    <input type="text" placeholder="Add your question" />
                </div>
                <div className="form-input-container">
                    <label>Question 2</label>
                    <input type="text" placeholder="Add your question" />
                </div>
                <div className="form-input-container">
                    <label>Question 3</label>
                    <input type="text" placeholder="Add your question" />
                </div>
                <div className="form-input-container">
                    <label>Question 4</label>
                    <input type="text" placeholder="Add your question" />
                </div>
                
                
                
                {/* <button onClick={this.addQuestions}>Add Another Question</button> */}
                <button>Create</button>
            
            </form>
        )
    }

}