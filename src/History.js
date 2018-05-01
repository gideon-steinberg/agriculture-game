import React, { Component } from 'react';

class History extends Component {
    constructor() {
        super();
    
        this.state = {
            lines : []
        }
    }

    addLine(line)
    {
        var newLines = this.state.lines;
        while (newLines.length > 8){
            newLines.splice(0,1);
        }
        newLines.push(line);
        this.setState( { lines : newLines } );
    }

    render() {
        return (
            <div>
                History
                { this.state.lines.map(function(line)
                    {
                        return <div key={line}>{line}<br/></div>;
                    })
                }
            </div>
        )
    }
}

export default History;