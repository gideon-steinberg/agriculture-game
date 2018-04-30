import React, { Component } from 'react';
import FarmAllocation from './FarmAllocation.js';
import Inventory from './Inventory.js';
import Market from './Market.js';
import Crafting from './Crafting.js';


class MainPane extends Component {
    constructor(props) {
      super(props);

      this.state = {
        farm : {
            total : 50,
            sheep : 20
        },
        inventory : {
            meal : 10,
            sheep : 5
        },
        market : {

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
        this.inventory.updateState(newState);
        this.market.updateState(newState);
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
                            startingState = {this.state}
                            ref={(farmAllocation) => {this.farmAllocation = farmAllocation}}
                        />
                    </td>
                    <td>
                        <Inventory
                            startingState = {this.state}
                            ref={(inventory) => {this.inventory = inventory}}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Market
                            startingState = {this.state}
                            ref={(market) => {this.market = market}}
                        />
                    </td>
                    <td>
                        <Crafting
                            ref={(crafting) => {this.crafting = crafting}}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
      );
    }
  }
  
  export default MainPane;