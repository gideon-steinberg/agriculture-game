import React, { Component } from 'react';


class Inventory extends Component {
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
                Inventory
                <br />
                Sheep {this.state.sheep} 
                <br />
                Cow {this.state.cow}
                <br />
                Wheat {this.state.wheat}
                <br />
                Meal {this.state.meal}
            </div>
        )
    }
}

export default Inventory;