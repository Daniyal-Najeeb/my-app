import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/


class HelloWorld extends Component
{
  constructor(props)
  {
    super(props)

    this.state =
    {
      
          link : 'http://www.Facebook.com',
          linktext : 'Facebook'
        
    }
  }
  render()
  {
    return(
      <div>
        <div>
          <a href={this.state.link} title={this.state.linktext}>{this.state.linktext}</a>
        </div>  
        <div>
          <a href={this.props.link} title={this.props.linktext}>{this.props.linktext}</a>
        </div>
      </div>
    );
  }
}

export default HelloWorld;