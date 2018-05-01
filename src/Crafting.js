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
                    index : 1,
                },
                {
                    from : 1,
                    to : 3,
                    toType : "meal",
                    fromType: "cow",
                    index : 2,
                },
                {
                    from : 1,
                    to : 2,
                    toType : "meal",
                    fromType: "sheep",
                    index : 3,
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
                        return <div key={item.fromType}>{item.index}. {item.from} {item.fromType} => {item.to} {item.toType} <br/></div>;
                    })
                }
            </div>
        )
    }
}

export default Crafting;