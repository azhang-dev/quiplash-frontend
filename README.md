# README

# ~~Quiplash~~ spy-fall clone

## front-end: https://spy-fall-clone.netlify.app/#/
## back-end: https://quiplash-clone-app.herokuapp.com/ 

### About this project:  
Completed as project 2 for General Assembly class SEI-50
This project is a re-creation of the online multiplayer game, "Spy-fall". A host shares their screen and creates a lobby. Multiple users can join that lobby with the id supplied by a host. A random player in the lobby is randomly selected as an imposter, and through conversation, players must find who that imposted is. As evident in the code and the final product, many intended features (websocket enabled chat and live updates) did not end up making it in the the final product. Even though as a group, we faced many problems and setbacks, we managed to stay focused and adapt our work into something presentable and interactable.

### Notable Features 
- **Lobby:** Users can create, delete, and join lobbies (by given id)
- **User:** Users can be created
- **Game:** Games can be created within a lobby. Game information is saved in the backend and controls a lot of the game state data 
- **Player classes:** There are three player types. Host, Imposter, Innocent. Imposter and Innocent are randomly selected in the backend on game start.
- **Polling:** As an alternative to websockets, we had to use polling to update the users on whether they've joined the lobby or not.  


### Known bugs and unintended features:  
- Location is always the beach
- Users can join lobby multiple times / users don't get added to lobby if they join 
- Users can't leave a lobby 
- Since all info is saved in state (and not the backend), if the host refreshes their page, a white page will show (information is being requested that isn't stored by default in state) 


### Wishlist and housekeeping 
- Use different react package for action cable to enable live updates and chat function (to replace polling) **ALTERNATIVELY** Re-create backend in node.js ... lol 
- Clean up CSS and component rendering errors (join lobby) 
- Make user join lobby automatically when mounting the component (instead of having to click 'update user')
- Remove all unusued components <-- and refactor repeated code 
- Create a room code instead of using the room_id. Would be able to add authentication this way. 
- Clean up backend models 

### Summary: 
Overall, this project was quite disappointing for all of us. We had high hopes of getting websockets working, but had countless errors after fixing conflicting erros with Knock. We worked quite well together and worked hard to complete the tasks we set for ourselves and eachother. Even though there were some conflicts in communication and drastic last minute decisions, we managed to use our existing components and models to present something interactive and usable.


# project 2 