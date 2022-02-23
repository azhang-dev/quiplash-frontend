import React from 'react';
import { API_ROOT, HEADERS } from '../constants';
import axios from 'axios';

class NewRoomForm extends React.Component {
  state = {
    host_id: "",
  };

  // handleChange = e => {
  //   this.setState({ title: e.target.value });
  // };

  componentDidMount() {
    this.setCurrentUser();
    console.log("Checking props", this.props)
  }

  setCurrentUser = () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    const res = axios.get( `${API_ROOT}/users/current`, {
      headers: {
        'Authorization' : token
      }
    })
    .then(res => {
      this.setState({host_id: res.data.id})
      console.log("This.state", this.state)
    })
    .catch(err => console.warn(err));
  }

  handleSubmit = e => {
    e.preventDefault()
    // fetch(`${API_ROOT}/rooms`, {
    //   method: 'POST',
    //   headers: HEADERS,
    //   body: JSON.stringify(this.state)
    // });
    let token = "Bearer " + localStorage.getItem("jwt");

    const res = axios.post( `${API_ROOT}/rooms`, 
    
      // headers: {
      //   'Authorization' : token
      // },
      this.state, 
      {headers: {  'Authorization' : token }})
    .then(res => {
    })
    .catch(err => console.warn(err));
  
    // this.setState({ title: '' });


    // this.props.goToLobbyPage()



  };

  render = () => {
    return (
      // <div className="newRoomForm">
      //   <form onSubmit={this.handleSubmit}>
      //     <label>Create Room</label>
      //     <br />
      //     <input
      //       type="text"
      //       value={this.state.title}
      //       onChange={this.handleChange}
      //     />
      //     <input type="submit" />
      //   </form>
      //   </div>
      <button onClick = {this.handleSubmit}>New Room</button>
    );
  };
}

export default NewRoomForm;