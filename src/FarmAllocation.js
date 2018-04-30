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
                Farm Allocation
                <br />
                Unassigned {this.state.unassigned}
                <br />
                Sheep {this.state.sheep} 
                <br />
                Cow {this.state.cow} 
                <br />
                Wheat {this.state.wheat} 
            </div>
        )
    }
}

export default FarmAllocation;