import React, { Component } from 'react';


class FarmAllocation extends Component {
    constructor(props) {
        super(props);
    
        this.state = props.startingState.farm;
    }

    updateState(state)
    {
        this.setState(state.farm);
    }

    render() {
        return (
            <div>
                Farm Allocation {this.state.total}
                <br />
                Sheep {this.state.sheep} 
            </div>
        )
    }
}

export default FarmAllocation;