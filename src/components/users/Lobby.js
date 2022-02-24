import React, { Component } from 'react';
import RoomsList from '../RoomsList';



class JoinGame extends Component {
    state = {
        game: false,
      
    }
    componentDidMount(){
        // this.setState({users: this..name})
        console.log('MOUNTED!!')
        // this.timer = setInterval(()=> this.getStatus(),1000)
    }
    // componentDidUnmount(){
    //     console.log('UNMOUNTED!!')
    // }

    // getStatus() {
    //     if (this.state.game === true){
    //         console.log('YO')
    //     } else {
    //         console.log('game')
    //     }
    // }

    // startGame = () => {
    //     console.log('game started')
    //     this.setState({game:true})
    // }

   

   

    render() {


        return (
            <div>
                
               


              
            </div>
        );
    }
}

export default JoinGame;