import React, { Component } from 'react';
import Counter from './Counter';

class MyEvents extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            counter : 0
        }

        this.updateCounter = this.updateCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    updateCounter()
    {
        
        this.setState({
                counter : this.state.counter + 1
            })
            console.log(this.state.counter);
    }
    decrementCounter()
    {
        if(this.state.counter === 0)
        {
            console.log("Counter is already 0");
        }
        else{
            this.setState({
                counter : this.state.counter - 1
            })
        }
            
    }

    sayHello() {
        return(
            alert('Hello')
        )
    }

    render()
    {
        return(
            <div>            
            <h1>Events</h1>
            <Counter counter = {this.state.counter} increment = {this.updateCounter} decrement = {this.decrementCounter}/>
            {
            //<button onClick ={this.sayHello} >ClickMe</button>
            //<button onClick ={this.updateCounter.bind(this, "Hello")} >+</button>
            //<button onClick ={this.decrementCounter}>-</button>
            //<span>{this.state.counter}</span>
            //<button onClick ={function(){alert('This is from button 2')}} >ClickMe</button>
            }

            </div>

        )
    }
}
export default MyEvents;