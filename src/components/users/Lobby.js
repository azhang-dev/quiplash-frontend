import React, { Component } from 'react';

class Lobby extends Component {
    state = {
        game: false
    }
    componentDidMount(){
        console.log('MOUNTED!!')
        // this.timer = setInterval(()=> this.getStatus(),1000)
    }
    componentWillUnmount(){
        console.log('UNMOUNTED!!')
    }

    getStatus() {
        if (this.state.game === true){
            console.log('YO')
        } else {
            console.log('game')
        }
    }

    startGame = () => {
        console.log('game started')
        this.setState({game:true})
    }
    render() {


        return (
            <div>
                <h1>Lobby page (users)</h1>
            </div>
        );
    }
}

export default Lobby;