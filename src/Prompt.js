import React, { Component } from 'react';


class Prompt extends Component {
    render() {
        return (
            <div>
                What will you do?
                <br />
                <br />
                <input className="prompt"/>
            </div>
        )
    }
}

export default Prompt;