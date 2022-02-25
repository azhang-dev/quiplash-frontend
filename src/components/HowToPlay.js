import React from 'react';



export default class HowToPlay extends React.Component {
  render() {
    return (
      <div class = "how-to-play">
        <h2>How To Play</h2>
        <p>Spyfall is a social deception game where you aim to find the "imposter" hidden amongst your group of friends. The imposter however, has a different goal in mind - they are trying to find out where everyone else is hiding.</p>
        <p>The game starts by assigning everyone a location to hide - this location is the <strong>same</strong> between all players except one - this player will be assigned the imposter role instead.</p>
        <p>The game is played by asking questions - no one knows for sure who or where the other players are, so ask questions to find out who your allies are, and who your enemy is. One round passes when everyone has asked a question once.</p>
        <p>At any point throughout the game, non-imposter players can accuse another player of being imposter. This will then be put up to vote - if the vote fails, the game continues as normal; if it passes however, the accused must reveal if they are the imposter and the round ends. The imposter wins if the accusation was wrong, and non-imposter players win if the accusation was correct. Be careful though, only one vote can be held per round.</p>
        <p>The imposter can reveal themselves at any point and make a guess of where the location is, immediately ending the game and winning if they are correct, losing if they are wrong. Note that the imposter can reveal themselves during a vote and make a guess - this might be useful in a desperate situation.</p>
        <p>The game also ends when the timer runs out. At this point both the imposter and the players can make their guesses and votes. The game is tied if neither party is correct.</p>
      </div>
    )
  }
}