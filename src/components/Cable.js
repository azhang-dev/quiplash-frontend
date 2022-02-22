import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({ rooms, handleReceivedGame }) => { // open connection ... onReceived is calling handleReceivedGame when it gets new information. i.e. it sets state with the most up to date information (rooms)
  return (
    <Fragment>
      {rooms.map(room => {
        return (
          <ActionCableConsumer
            key={room.id}  
            channel={{ channel: 'GamesChannel', room: room.id }}
            onReceived={handleReceivedGame}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;