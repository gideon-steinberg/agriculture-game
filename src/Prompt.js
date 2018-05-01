import React, { Component } from 'react';
import DialogTree from './DialogTree.js';

class Prompt extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            gameState : props.startingState,
            updateStateCallback : props.updateStateCallback,
            recipiesCallback : props.recipiesCallback,
            marketCallback : props.marketCallback,
            historyCallback : props.historyCallback,
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

    addLineToHistory(line) {
        this.state.historyCallback(line);
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
                    this.dialogTree.updateState(this.dialogTreeDefaultState());
                    break;
                default:
                    this.setCurrentAction(undefined);
                    this.dialogTree.updateState(this.dialogTreeDefaultState());
                    return;
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
            case "c":
                // crafting a recipie
                this.craftItem(Number(action));
                break;
            case "b":
                // Buy from the market
                this.buyItemFromMarket(Number(action));
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
        this.addLineToHistory(`Allocated ${amount} ${from} to ${to}`);
        this.state.updateStateCallback(newState);
    }

    craftItem(recipeNumber){
        if (isNaN(recipeNumber) || recipeNumber <= 0 || recipeNumber > this.recipies().length){
            return;
        }

        var recipie = this.recipies()[recipeNumber - 1];
        var inventory = this.state.gameState.inventory;
        if (inventory[recipie.fromType] < recipie.from) {
            return;
        }

        var newState = Object.assign({}, this.state.gameState);
        newState.inventory[recipie.fromType] = newState.inventory[recipie.fromType] - recipie.from;
        newState.inventory[recipie.toType] = newState.inventory[recipie.toType] + recipie.to;
        this.addLineToHistory(`Crafted ${recipie.from} ${recipie.fromType} into ${recipie.to} ${recipie.toType}`);
        this.state.updateStateCallback(newState);
    }

    buyItemFromMarket(number){
        if (isNaN(number) || number <= 0 || number > this.marketOptions().length){
            return;
        }

        var option = this.marketOptions()[number - 1];
        var inventory = this.state.gameState.inventory;
        if (inventory[option.sellItem] < option.sellValue) {
            return;
        }

        var newState = Object.assign({}, this.state.gameState);
        newState.inventory[option.sellItem] = newState.inventory[option.sellItem] - option.sellValue;
        newState.inventory[option.buyItem] = newState.inventory[option.buyItem] + option.buyValue;
        this.addLineToHistory(`Sold ${option.sellValue} ${option.sellItem} and brought ${option.buyValue} ${option.buyItem} from the market`);
        this.state.updateStateCallback(newState);
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

    recipies(){
        return this.state.recipiesCallback();
    }

    marketOptions() {
        return this.state.marketCallback();
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