import React, { Component } from 'react';

class DialogTree extends Component {

    constructor() {
        super();
        this.state = {
            currentState : this.statics.defaultState
        }
    }

    updateState(state){
        if (Object.keys(this.statics.dialogTree).includes(state)){
            this.setState( {currentState : state} );
        } else {
            this.setState( {currentState : this.statics.defaultState} );
        }
    }

    currentOptions()
    {
        return this.statics.dialogTree[this.state.currentState].options;
    }

    singleLetterOptions(){
        return this.currentOptions().map(function(item)
        {
            return item.toLowerCase()[0];
        });
    }

    currentState()
    {
        return this.state.currentState;
    }

    currentTitle()
    {
        return this.statics.dialogTree[this.state.currentState].title;
    }

    statics = {
        defaultState : "default",
        amountState : "amount",
        dialogTree : {
            "default" : {
                options : [
                    "Allocate area in the farm",
                    "Craft item",
                    "Buy from the market"
                ],
                title : "What will you do?"
            },
            "amount": {
                options : [],
                title : "How many?"
            },
            "a" : {
                options : [
                    "Sheep",
                    "Cow",
                    "Wheat",
                    "Unassigned"
                ],
                title : "What do you want to allocate an area in the farm from?"
            },
            "au" : {
                options : [
                    "Sheep",
                    "Cow",
                    "Wheat",
                ],
                title : "What do you want to allocate an unassigned area in the farm to?"
            },
            "as" : {
                options : [
                    "Unassigned",
                    "Cow",
                    "Wheat",
                ],
                title : "What do you want to allocate an sheep area in the farm to?"
            },
            "ac" : {
                options : [
                    "Sheep",
                    "Unassigned",
                    "Wheat",
                ],
                title : "What do you want to allocate an cow area in the farm to?"
            },
            "aw" : {
                options : [
                    "Sheep",
                    "Cow",
                    "Unassigned",
                ],
                title : "What do you want to allocate an wheat area in the farm to?"
            }
        }
    }

    render() {
        return (
            <div>
                {this.currentTitle()}
                <br />
                { this.currentOptions().map(function(item)
                    {
                        return <div key={item}>{item}<br/></div>;
                    })
                }
            </div>
        )
    }
}

export default DialogTree;