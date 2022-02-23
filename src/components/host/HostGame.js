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
                        <h2>put silly answers on your device </h2>
                        
                    </div>
                )



        
        }
    }
}

export default HostGame
