import React, { Component } from 'react';


class Prompt extends Component {
    constructor() {
        super();
        this.state = {
            action : ""
        }
    }
    handleEnter(event){
        // the enter key!!
        if ( event.which === 13 ) {
            event.preventDefault();
            var action = this.refs.prompt.value;
            this.setState({action : "You did " + action});
            this.refs.prompt.value = "";
            return false;
        }
    }
    
    render() {
        return (
            <div>
                What will you do?
                <br />
                {this.state.action}
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