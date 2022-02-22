
import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewRoomForm extends React.Component {
  // state = {
  //   title: ''
  // };

  // handleChange = e => {
  //   this.setState({ title: e.target.value });
  // };

  handleSubmit = e => {
    e.preventDefault()
    fetch(`${API_ROOT}/rooms`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    // this.setState({ title: '' });
    this.props.goToLobbyPage()
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