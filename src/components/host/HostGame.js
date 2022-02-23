import React, { Component } from 'react';

class HostGame extends React.Component {

    state = {
        gamePhase: "show-instruction"
    }

    componentDidMount 

    render(){
        switch (this.state.gamePhase){
            case "show-instruction":
                return(
                    <div>
                        <h1>put silly answers on your device </h1>
                        
                    </div>
                )



        
        }
    }
}

export default HostGame
