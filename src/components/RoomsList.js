import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewRoomForm from './NewRoomForm';
import GamesArea from './GamesArea';
import Cable from './Cable';

class RoomsList extends React.Component {
  state = {
    rooms: [],
    activeRoom: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/rooms`)
      .then(res => res.json())
      .then(rooms => this.setState({ rooms }));
  };

  handleClick = id => {
    this.setState({ activeRoom: id });
  };

  handleReceivedRoom = response => {
    const { room } = response;
    this.setState({
      rooms: [...this.state.rooms, room]
    });
  };

  handleReceivedGame = response => {
    const { game } = response;
    const rooms = [...this.state.rooms];
    const room = rooms.find(
      room => room.id === game.room_id
    );
    room.games = [...room.games, game];
    this.setState({ rooms });
  };

  render = () => {
    const { rooms, activeRoom } = this.state;
    return (
      <div className="roomsList">
        <ActionCableConsumer
          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceivedRoom}
        />
        {this.state.rooms.length ? (
          <Cable
            rooms={rooms}
            handleReceivedGame={this.handleReceivedGame}
          />
        ) : null}
        <h2>Rooms</h2>
        <ul>{mapRooms(rooms, this.handleClick)}</ul>
        <NewRoomForm />
        {activeRoom ? (
          <GamesArea
            room={findActiveRoom(
              rooms,
              activeRoom
            )}
          />
        ) : null}
      </div>
    );
  };
}

export default RoomsList;

// helpers

const findActiveRoom = (rooms, activeRoom) => {
  return rooms.find(
    room => room.id === activeRoom
  );
};

const mapRooms = (rooms, handleClick) => {
  return rooms.map(room => {
    return (
      <li key={room.id} onClick={() => handleClick(room.id)}>
        {room.title}
      </li>
    );
  });
};