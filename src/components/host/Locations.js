import React, { Component } from 'react';
import './HostLobby.css'


class locations extends Component {

    state = {
        locations:[]
    }

    componentDidMount(){
        console.log("MOUNTED!!", this.props)
        this.setState({locations: this.props.passLocations.questions})
    }
    render() {
        return (
            <div className="locations-grid">
                {this.state.locations.map((location,index) => {
                    return  <img src={location.image}/>
                })}
            </div>
        );
    }
}

export default locations;