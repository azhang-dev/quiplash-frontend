
import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewGameForm extends React.Component {
  state = {
    text: '',
    room_id: this.props.room_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ room_id: nextProps.room_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/games`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="newGameForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Game:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewGameForm;