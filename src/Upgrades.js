import React, { Component } from 'react';

class Upgrades extends Component {
    constructor(props) {
        super(props);
    
        this.state = props.startingState.inventory;
    }

    updateState(state)
    {
        this.setState(state.inventory);
    }

    render() {
        return (
            <div>
                Upgrades
                <br />
                Dog {this.state.dog} 
                <br />
                Cat {this.state.cat}
                <br />
                Barn {this.state.barn}
            </div>
        )
    }
}

export default Upgrades;