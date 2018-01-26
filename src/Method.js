import React, { Component } from 'react';

class Method extends Component
{
    mylink()
    {
        return ''
    }
    mylinkname()
    {
        return 'Chris Jericho'
    }
    render()
    {
        return(
            <p>Hello Click My Google link<a href={this.mylink()}> {this.mylinkname()}</a></p>
        );
    }
}
export default Method;