import React, { Component } from 'react';
import DialogTree from './DialogTree.js';

class Prompt extends Component {
    handleEnter(event){
        // the enter key!!
        if ( event.which === 13 ) {
            
            var action = this.refs.prompt.value;
            var currentOptions = this.dialogTree.optionsLowerCase();

            if (currentOptions.includes(action.toLowerCase()[0])) {
                var currentState = this.dialogTree.currentState();
                
                if (currentState !== "default") {
                    this.dialogTree.updateState(currentState + action.toLowerCase()[0]);
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