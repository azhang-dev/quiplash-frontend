import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewRoomForm from './NewRoomForm';
import GamesArea from './GamesArea';
import Cable from './Cable';
import axios from 'axios';


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
    latestRoom: [],
    currentUser: undefined
  };

  componentDidMount = () => {
    this.setCurrentUser()
    console.log("roomListProps: ",this.props)
    fetch(`${API_ROOT}/rooms`)
      .then(res => res.json())
      .then(rooms => this.setState({ rooms }));
      console.log("ROOMS", this.state.rooms)
  };

  handleClick = id => {
    // console.log('handleclick', id);
    this.setState({ activeRoom: id });
  };

  getRoomId = (roomsArray, room_id)=>{
    return roomsArray.filter(el => room_id !== el.id)
 }

 setCurrentUser = () => {
  let token = "Bearer " + localStorage.getItem("jwt");
  const res = axios.get( `${API_ROOT}/users/current`, {
    headers: {
      'Authorization' : token
    }
  })
  .then(res => {
    this.setState({currentUser: res.data})
    console.log("This.state", this.state)
  })
  .catch(err => console.warn(err));
}

  handleClickDelete = id => {
    // fetch(`${API_ROOT}/rooms/${id}`,{
    //   method: "Delete",
    // });
    let token = "Bearer " + localStorage.getItem("jwt");

    const res = axios.delete( `${API_ROOT}/rooms/${id}`, 
      {headers: {  'Authorization' : token } })
    .then(res => {
    })
    .catch(err => console.warn(err));

    const roomsCopy = [...this.state.rooms]
    const roomUpdate = this.getRoomId(roomsCopy, id);
    this.setState({rooms: roomUpdate})
    
  };

  handleReceivedRoom = response => {
    console.log("A NEW ROOM HAS BEEN CREATED", response)
    const { room } = response;
    this.setState({
      rooms: [...this.state.rooms, room]
    });
    this.setState({latestRoom: room}, () => {console.log("THIS IS THE LATEST ROOM",this.state.latestRoom)})
  };

  handleConnectedRoom = (...args) => {
    // console.log("handle connected",args)
    console.log("CONNECTED")
  }


// !!!!!!!!!!!
  handleReceivedGame = response => {
    console.log("HANDLING RECEIVED!", response)
    const { game } = response;
    // console.log("RESPONSE FROM HANDLE RECEIVED GAME!!", game)
    const rooms = [...this.state.rooms];
    const room = rooms.find(
      room => room.id === game.room_id
      );
    console.log("THIS IS THE ROOM???", room)
    room.games = [...room.games, game];
    this.setState({ rooms });
    


  };
// !!!!!!!!!!!!


  goToLobby = () => {
    // let lastIndex = this.state.rooms[this.state.rooms.length - 1]
    // console.log(lastIndex.id )
    // let newIndex = lastIndex.id + 1

    this.props.routeToLobby(this.state.latestRoom)
  }

  mapRooms = (rooms, handleClick, handleClickDelete) => {
    return rooms.map(room => {
      return (
        <li key={room.id}>
          
          {/*  <p>{room.title}</p>
           <Link className="btn btn-primary" to={`/lobby/${room.id}`} onClick={() => handleClick(room.id)}>Go to lobby</Link> 
           <button className="btn btn-primary" onClick={() => handleClickDelete(room.id)}>Delete</button> */}
          <p onClick={() => handleClick(room.id)}>Lobby {room.id} </p>



          <button onClick={() => this.props.routeToLobby(room.id)}>Join</button>



          <button onClick={() => handleClickDelete(room.id)}>Delete</button>
        </li>
      );
    });
  
  };


  render = () => {
    const { rooms, activeRoom } = this.state;
    return (
      <div className="roomsList">


        <ActionCableConsumer // THIS IS CHECKING FOR NEW ROOMS 

          channel={{ channel: 'RoomsChannel' }}
          onReceived={this.handleReceivedRoom}
          onConnected={this.handleConnectedRoom}
          onInitialized={this.handleConnectedRoom}
          ref={ (obj) => this.actionControllerObj = obj }
          > 
          
          <TestComponent cable={this.actionControllerObj?.props?.cable}/> 
          
        </ActionCableConsumer>


        
        {this.state.rooms.length ? (

          // !!!!!!!!!!!!!!!!!!!
          <Cable
            rooms={rooms}
            handleReceivedGame={this.handleReceivedGame}
          >

          </Cable>
        ) : null}
          {/* !!!!!!!!!!!!!!!!!!!!!!!!!! */}


        <h2>Rooms</h2>
        <ul>
          {this.mapRooms(rooms, this.handleClick, this.handleClickDelete)}</ul>

        <NewRoomForm 
        // goToLobbyPage={this.goToLobby}
        />

        {activeRoom 
        ? 
        (<GamesArea
            room={ findActiveRoom( rooms, activeRoom ) }
          />
        ) 
        : null}
        
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

