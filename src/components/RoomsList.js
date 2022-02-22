import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewRoomForm from './NewRoomForm';
// import GamesArea from './GamesArea';
import Cable from './Cable';

const TestComponent = (props) => {
  const clickHandler = () => {
    if (props.cable){
      console.log(props.cable.send)
      // props.cable.send("rooms_channel", {action: "hello"})
      props.cable.send({command: "message", identifier: '{"channel":"RoomsChannel"}',action: "test action name", data: "test data name"})
    }
  }
  return <button onClick={clickHandler}>TEST</button>
}
class RoomsList extends React.Component {
  state = {
    rooms: [],
    activeRoom: null,
    latestRoom: []
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/rooms`)
      .then(res => res.json())
      .then(rooms => this.setState({ rooms }));
      console.log("ROOMS", this.state.rooms)
  };

  handleClick = id => {
    console.log('handleclick', id);
    this.setState({ activeRoom: id });
  };

  getRoomId = (roomsArray, room_id)=>{
    return roomsArray.filter(el => room_id !== el.id)
 }

  handleClickDelete = id => {
    fetch(`${API_ROOT}/rooms/${id}`,{
      method: "Delete",
    })
    const roomsCopy = [...this.state.rooms]
    const roomUpdate = this.getRoomId(roomsCopy, id);
    this.setState({rooms: roomUpdate})
    
  };

  handleReceivedRoom = response => {
    const { room } = response;
    this.setState({
      rooms: [...this.state.rooms, room]
    });
  };
  handleConnectedRoom = (...args) => {
    console.log("handle connected",args)
  }

  handleReceivedGame = response => {
    const { game } = response;
    const rooms = [...this.state.rooms];
    const room = rooms.find(
      room => room.id === game.room_id
    );
    room.games = [...room.games, game];
    this.setState({ rooms });
  };

  goToLobby = () => {
    let lastIndex = this.state.rooms[this.state.rooms.length - 1]
    console.log(lastIndex.id )
    let newIndex = lastIndex.id + 1
    this.props.routeToLobby(newIndex)
  }


  render = () => {
    const { rooms, activeRoom } = this.state;
    return (
      <div className="roomsList">
        <ActionCableConsumer
          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceivedRoom}
          onConnected={this.handleConnectedRoom}
          onInitialized={this.handleConnectedRoom}
          ref={ (obj) => this.actionControllerObj = obj }
          > 
          
          <TestComponent cable={this.actionControllerObj?.props?.cable}/> 
          
        </ActionCableConsumer>
        {this.state.rooms.length ? (
          <Cable
            rooms={rooms}
            handleReceivedGame={this.handleReceivedGame}
          >

            </Cable>
        ) : null}
        <h2>Rooms</h2>
        <ul>
          {mapRooms(rooms, this.handleClick, this.handleClickDelete)}</ul>

        <NewRoomForm goToLobbyPage={this.goToLobby}/>

        
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

const mapRooms = (rooms, handleClick, handleClickDelete) => {
  return rooms.map(room => {
    return (
      <li key={room.id}>
        
        {/*  <p>{room.title}</p>
         <Link className="btn btn-primary" to={`/lobby/${room.id}`} onClick={() => handleClick(room.id)}>Go to lobby</Link> 
         <button className="btn btn-primary" onClick={() => handleClickDelete(room.id)}>Delete</button> */}
        <p onClick={() => handleClick(room.id)}>Lobby {room.id} </p>

        <button onClick={() => handleClickDelete(room.id)}>Delete</button>
      </li>
    );
  });

};