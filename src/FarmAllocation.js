import React, { Component } from 'react';


class FarmAllocation extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          total : 50,
          sheep : 20
        };
    }

    updateState(state)
    {
        this.setState(state.farm);
    }

    render() {
        return (
            <div>
                <p> 
                    {this.state.total} 
                </p>
                <p>
                    {this.state.sheep} 
                </p>
            </div>
        )
    }
}

export default FarmAllocation;