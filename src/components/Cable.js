import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({ rooms, handleReceivedGame }) => {
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