import React, { Component } from 'react';

class Counter extends Component
{
    render()
    {
        return(
            <div>
            <h1>{this.props.counter}</h1>
            <button onClick ={this.props.increment}>+</button>
            <button onClick ={this.props.decrement}>-</button>
            
            </div>
        )
    }
    
}
export default Counter;