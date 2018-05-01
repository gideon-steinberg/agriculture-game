import React, { Component } from 'react';
import FarmAllocation from './FarmAllocation.js';
import Inventory from './Inventory.js';
import Market from './Market.js';
import Crafting from './Crafting.js';
import Prompt from './Prompt';
import Upgrades from './Upgrades.js';
import History from './History.js';

class MainPane extends Component {
    constructor(props) {
      super(props);

      this.state = {
        farm : {
            unassigned : 3,
            sheep : 2,
            cow : 0,
            wheat : 0
        },
        inventory : {
            meal : 10,
            sheep : 1,
            wheat : 4,
            cow : 2,
            dog : 1,
            cat : 1,
            barn : 3
        }
      };
    }

    updateState(state)
    { 
        this.setState(state);
        this.farmAllocation.updateState(state);
        this.inventory.updateState(state);
        this.upgrades.updateState(state);
        this.prompt.updateState(state);
    }

    newItems()
    {
        this.market.newItems();
    }
    
    render() {
      return (
        <div>
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
                        <td>
                            <Upgrades
                                startingState = {this.state}
                                ref={(upgrades) => {this.upgrades = upgrades}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Market
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
            <hr />
            <Prompt 
                startingState = { this.state }
                ref={(prompt) => { this.prompt = prompt} }
                updateStateCallback = { (state) => this.updateState(state) }
                recipiesCallback = { () => { return this.crafting.recipies(); }}
                marketCallback = { () => { return this.market.marketOptions(); }}
                historyCallback = { (line) => this.history.addLine(line) }
            />
            <hr />
            <History
                ref={(history) => {this.history = history}}
            />
        </div>
      );
    }
  }
  
  export default MainPane;