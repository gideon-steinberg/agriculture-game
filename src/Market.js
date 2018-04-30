import React, { Component } from 'react';


class Market extends Component {
    constructor(props) {
        super(props);
    
        this.getNewValues(props.startingState.market);
        this.state = props.startingState.market;
    }

    statics = {
        marketMap : [
            "meal",
            "dog",
            "sheep"
        ]
    }

    getNewValues(market)
    {
        market.dogSell = Math.floor((Math.random() * 3) + 1);
        market.dogBuy = Math.floor((Math.random() * 3) + 1);
        market.dogItem = this.statics.marketMap[Math.floor(Math.random () * this.statics.marketMap.length)];

        market.mealSell = Math.floor((Math.random() * 3) + 1);
        market.mealBuy = Math.floor((Math.random() * 3) + 1);
        market.mealItem = this.statics.marketMap[Math.floor(Math.random () * this.statics.marketMap.length)];

        market.sheepSell = Math.floor((Math.random() * 3) + 1);
        market.sheepBuy = Math.floor((Math.random() * 3) + 1);
        market.sheepItem = this.statics.marketMap[Math.floor(Math.random () * this.statics.marketMap.length)];
    }

    updateState(state)
    {
        this.getNewValues(state.market);
        this.setState(state.market);
    }

    render() {
        return (
            <div>
                Market
                <br />
                {this.state.mealSell} Meal for {this.state.mealBuy} {this.state.mealItem}
                <br />
                {this.state.dogSell} Dog for {this.state.dogBuy} {this.state.dogItem}
                <br />
                {this.state.sheepSell} Dog for {this.state.sheepBuy} {this.state.sheepItem}
            </div>
        )
    }
}

export default Market;