import React, { Component } from 'react';
import DialogTree from './DialogTree.js';

class Prompt extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            gameState : props.startingState,
            promptCallback : props.promptCallback,
            currentAction : undefined
        };
    }

    updateState(state)
    {
        var newState = Object.assign({}, this.state);
        newState.gameState = state;
        this.setState(newState);
    }

    dialogTreeDefaultState(){
        return this.dialogTree.statics.defaultState;
    }

    handleEnter(event){
        if ( this.isEnterEvent(event) ) {
            var action = this.refs.prompt.value.toLowerCase();            
            var currentOptions = this.dialogTree.singleLetterOptions();

            if (currentOptions.length === 0 || currentOptions.includes(action[0])) {
                var dialogState = this.dialogTree.currentState();

                if (dialogState !== this.dialogTreeDefaultState()) {
                    var combinedAction = dialogState + action[0];

                    this.dialogTree.updateState(combinedAction);
                    this.executeAction(combinedAction, action);
                } else {
                    this.dialogTree.updateState(action[0]);
                }
            } else {
                this.dialogTree.updateState(this.dialogTreeDefaultState());
            }

            this.clearInput(event);        
        }
    }

    isEnterEvent(event){
        return event.which === 13;
    }

    clearInput(event){
        event.preventDefault();
        this.refs.prompt.value = "";
        return false;
    }

    setCurrentAction(action){
        var newState = Object.assign({}, this.state);
        newState.currentAction = action;
        this.setState(newState);
    }

    executeAction(combinedAction, action) {
        var currentAction = this.state.currentAction;

        if (currentAction) {
            switch(currentAction[0]){
                case "a":
                    this.updateFarm(currentAction, Number(action));
                    this.setCurrentAction(undefined);
                    break;
                default:
                    break;
            }
        }

        switch(combinedAction[0]) {
            case "a":
                // assignment of farm
                if (combinedAction.length === 3) {
                    this.setCurrentAction(combinedAction);
                    this.dialogTree.updateState(this.dialogTree.statics.amountState);
                }
                break;
            default:
                return;
        }
    }

    updateFarm(action, amount){
        if (isNaN(amount)){
            return;
        }

        var from = this.transformLetterToItem(action[1]);
        var to = this.transformLetterToItem(action[2]);
        var newState = Object.assign({}, this.state.gameState);

        if (newState.farm[from] < amount){
            return;
        }

        newState.farm[from] = newState.farm[from] - amount;
        newState.farm[to] = newState.farm[to] + amount;
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