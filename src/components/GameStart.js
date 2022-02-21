import React from "react";
import { Route, HashRouter as Router, Link} from 'react-router-dom'



class GameStart extends React.Component{ 

    render(){
        return(
            <div>
                <Router>
                <h1>Quiplash Clone</h1>
                    <Link to="/play/lobby">
                        <button>
                            Join Lobby
                        </button>
                    </Link>
                    </Router>
            </div>
            
        )
    }
}


export default GameStart;