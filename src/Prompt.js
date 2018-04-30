import React, { Component } from 'react';
import DialogTree from './DialogTree.js';

class Prompt extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            gameState : props.startingState,
            promptCallback : props.promptCallback
        };
    }

    updateState(state)
    {
        var newState = {
            promptCallback : this.state.promptCallback,
            gameState : state
        };

        this.setState(newState);
    }

    handleEnter(event){
        // the enter key!!
        if ( event.which === 13 ) {
            
            var action = this.refs.prompt.value;
            var currentOptions = this.dialogTree.optionsLowerCase();

            if (currentOptions.includes(action.toLowerCase()[0])) {
                var currentState = this.dialogTree.currentState();

                if (currentState !== "default") {
                    var newState = currentState + action.toLowerCase()[0];
                    this.dialogTree.updateState(newState);
                    this.doAction(newState);
                } else {
                    this.dialogTree.updateState(action.toLowerCase()[0]);
                }
            } else {
                this.dialogTree.updateState("default");
            }

            // clear input
            event.preventDefault();
            this.refs.prompt.value = "";
            return false;
        }
    }

    doAction(action) {
        switch(action[0]) {
            case "a":
                // assignment of farm
                if (action.length === 3) {
                    this.updateFarm(action);
                }
                break;
            default:
                return;
        }
    }

    updateFarm(action){

        var from = this.transformLetterToItem(action[1]);
        var to = this.transformLetterToItem(action[2]);
        var newState = Object.assign({}, this.state.gameState);

        if (newState.farm[from] <= 0){
            return;
        }

        newState.farm[from] = newState.farm[from] - 1;
        newState.farm[to] = newState.farm[to] + 1;
        this.state.promptCallback(newState);
    }

    transformLetterToItem(letter) { 
        switch(letter) {
            case "s":
                return "sheep";
            case "u":
                return "unassigned";
            case "c":
                return "cow";
            case "w":
                return "wheat"
            default:
                return undefined;
        }
        
    }
    
    render() {
        return (
            <div>
                <DialogTree 
                    ref={(dialogTree) => {this.dialogTree = dialogTree}}
                />
                <br />
                <input
                    ref="prompt"
                    className="prompt"
                    onKeyPress={(event) => this.handleEnter(event)}
                />
            </div>
        )
    }
}

export default Prompt;