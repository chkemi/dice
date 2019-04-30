import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dice1: 1,
            dice2: 6,
            rolling: false,
            disabled: false
        }

        this.roll = this.roll.bind(this);
    }

    getRandomNumTo6() {
        return Math.floor(Math.random() * 6) + 1;
    }

    roll() {
        this.setState({
            rolling: true,
            disabled: true
        })

        setTimeout(() => {
            this.setState({
                dice1: this.getRandomNumTo6(),
                dice2: this.getRandomNumTo6(),
                rolling: false,
                disabled: false,
            })
        }, 1000)
    }

    render() { 
        return ( 
            <>
                <Die number={this.state.dice1} rolling={this.state.rolling} />
                <Die number={this.state.dice2} rolling={this.state.rolling} />
                <button onClick={this.roll} disabled={this.state.disabled}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </>
         );
    }
}
 
export default RollDice;