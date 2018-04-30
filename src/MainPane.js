import React, { Component } from 'react';
import FarmAllocation from './FarmAllocation.js';


class MainPane extends Component {
    constructor(props) {
      super(props);

      this.state = {
        farm : {
            total : 50,
            sheep : 20
        }
      };
    }

    updateState()
    {
        var newState = Object.assign({}, this.state);
        newState.farm.total = this.state.farm.total - 1;
        newState.farm.sheep = this.state.farm.sheep + 1;
    
        this.setState(newState);
        this.farmAllocation.updateState(newState);
    }
    
    render() {
      return (
        <table>
            <thead>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <FarmAllocation
                            ref={(farmAllocation) => {this.farmAllocation = farmAllocation}}
                        />
                    </td>
                    <td>
                        <button onClick={ () => this.updateState()}>
                            Click
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
            </tbody>
        </table>
      );
    }
  }
  
  export default MainPane;