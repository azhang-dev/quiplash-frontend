
import React from 'react';
import NewGameForm from './NewGameForm';

const GamesArea = ({
  room: { id, title, games }, 
}) => {
  return (
    <div className="gamesArea">
      <h2>{title}</h2>
      <ul>{orderedGames(games)}</ul>
      <NewGameForm room_id={id} />
    </div>
  );
};

export default GamesArea;

// helpers

const orderedGames = games => {
  const sortedgames = games.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedgames.map(game => {
    return <li key={game.id}>{game.text}</li>;
  });
};