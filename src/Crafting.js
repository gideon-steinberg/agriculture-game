import React, { Component } from 'react';


class Crafting extends Component {
    constructor() {
        super();
    
        this.state = {
            recipies : [
                {
                    from : 1,
                    to : 1,
                    toType : "meal",
                    fromType: "wheat",
                },
                {
                    from : 1,
                    to : 3,
                    toType : "meal",
                    fromType: "cow",
                }
            ]
        };
    }

    recipies() {
        return this.state.recipies;
    }
 
    render() {
        return (
            <div>
                Crafting
                { this.state.recipies.map(function(item)
                    {
                        return <div key={item.fromType}>{item.from} {item.fromType} => {item.to} {item.toType} <br/></div>;
                    })
                }
            </div>
        )
    }
}

export default Crafting;