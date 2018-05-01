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
                },
                {
                    from : 1,
                    to : 2,
                    toType : "meal",
                    fromType: "sheep",
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
                { this.state.recipies.map(function(item, index)
                    {
                        return <div key={item.fromType}>{index + 1}. {item.from} {item.fromType} => {item.to} {item.toType} <br/></div>;
                    })
                }
            </div>
        )
    }
}

export default Crafting;