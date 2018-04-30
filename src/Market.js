import React, { Component } from 'react';


class Market extends Component {
    constructor() {
        super();
    
        this.state = {
            market : this.getNewValues()
        }
    }

    statics = {
        marketMap : [
            {
                expensive : "dog",
                cheap : "meal",
                expensiveRange : 3,
                expensiveAddition : 1,
                cheapRange : 1,
                cheapAdditon : 1
            },
            {
                expensive : "sheep",
                cheap : "meal",
                expensiveRange : 2,
                expensiveAddition : 2,
                cheapRange : 1,
                cheapAdditon : 1
            },
            {
                expensive : "sheep",
                cheap : "dog",
                expensiveRange : 1,
                expensiveAddition : 3,
                cheapRange : 1,
                cheapAdditon : 2
            }
        ],
        itemsInMarket : 2
    }

    getNewValues()
    {
        var market = [];
        var indexsUsed = [];
        var i =  this.statics.itemsInMarket;
        while(i > 0)
        {
            var random = Math.floor(Math.random() * this.statics.marketMap.length);
            if (indexsUsed.includes(random))
            {
                continue;
            }

            indexsUsed.push(random);
            var value = this.statics.marketMap[random];
            var sellItem, buyItem, sellValue, buyValue;
            if (Math.random() > 0.5){
                sellItem = value.expensive;
                buyItem = value.cheap;
                buyValue = Math.floor((Math.random() * value.expensiveRange) + value.expensiveAddition);
                sellValue = Math.floor((Math.random() * value.cheapRange) + value.cheapAdditon);
            } else {
                sellItem = value.cheap;
                buyItem = value.expensive;
                buyValue = Math.floor((Math.random() * value.cheapRange) + value.cheapAdditon);
                sellValue = Math.floor((Math.random() * value.expensiveRange) + value.expensiveAddition);
            }

            market.push(
                {
                    sellItem : sellItem,
                    buyItem : buyItem,
                    sellValue : sellValue,
                    buyValue : buyValue
                }
            );

            i--;
        }
        return market;
    }

    newItems()
    {
        this.setState( 
            {
                market : this.getNewValues()
            }
        );
    }

    render() {
        return (
            <div>
                Market
                { this.state.market.map(function(item)
                    {
                        return <div key={item.sellItem + item.buyItem}>{item.sellValue} {item.sellItem} => {item.buyValue} {item.buyItem} <br/></div>;
                    })
                }
            </div>
        )
    }
}

export default Market;