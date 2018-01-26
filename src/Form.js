import React, { Component } from 'react';
import {button} from 'react-bootstrap'


class Forms extends Component
{
    
    constructor(props)
    {
        super(props)

        this.state ={

            userName: '',

            allUsers: [],

            radioGroup : {
                MEAN : false,
                MERN : true,
                LAMP : false
            },

            checkboxGroup : {
                MONGO : false,
                EXPRESS : false,
                REACT : true,
                NODE : false
            },
            selectedValue : 'Node'
        }

        this.formHandler = this.formHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.radioHandler = this.radioHandler.bind(this)
        this.checkboxHandler = this.checkboxHandler.bind(this)
        this.DropDownHandler = this.DropDownHandler.bind(this)
    }

    formHandler(event)
    {
        this.setState({

            userName : event.target.value

        })
    }

    clickHandler()
    {
        let currentUser = this.state.allUsers
        currentUser.push(this.state.userName)
        this.setState({
            allUsers : currentUser
        })
        this.setState({
            userName: ''
        })
        console.log(this.state.allUsers)
    }

    radioHandler(event)
    {
        
        let radioGroup = this.state.radioGroup;
        for(var key in radioGroup){
            radioGroup[key] = false
        }
        radioGroup[event.target.value] = event.target.checked
        this.setState({
            radioGroup : radioGroup
        })
        console.log(event.target.value)
        
    }

    checkboxHandler(event)
    {
        
        let checkboxGroup = this.state.checkboxGroup;
        checkboxGroup[event.target.value] = event.target.checked
        this.setState({
            checkboxGroup : checkboxGroup
        })
        console.log(event.target.value)
        
    }
    DropDownHandler(event)
    {
        
        this.setState({
            selectedValue : event.target.value
        })
        console.log(this.state.selectedValue)
    }

    SubscriberEmail()
    {
        console.log(this.refs.SubscriberEmail.value)
    }

    render()
    {
        return(
            <div>
                <h1>Hello Forms</h1>

                <label>Email : <input type ='text' ref='SubscriberEmail'/></label>
                <Button bsStyle='success' onClick={this.SubscriberEmail.bind(this)}>Subscribe</Button>

                {
                    //radiobutton
                }
                <input type='text' name='userName' onChange = {this.formHandler} /><br/>
                <label><input type='radio' name = 'devCategory' value='MEAN' checked={this.state.radioGroup['MEAN']} onChange={this.radioHandler}/>MEAN Stack</label><br/>
                <label><input type='radio' name = 'devCategory' value='MERN' checked={this.state.radioGroup['MERN']} onChange={this.radioHandler}/>MERN Stack</label><br/>
                <label><input type='radio' name = 'devCategory' value='LAMP' checked={this.state.radioGroup['LAMP']} onChange={this.radioHandler}/>LAMP Stack</label><br/>
                <Button bsStyle="success" onClick = {this.clickHandler}>Save</Button><br />

                {
                    //checkboxes
                }
                <label><input type='checkbox' name = 'tech' value='MONGO' checked={this.state.checkboxGroup['MONGO']} onChange={this.checkboxHandler}/>MONGO</label><br/>
                <label><input type='checkbox' name = 'tech' value='EXPRESS' checked={this.state.checkboxGroup['EXPRESS']} onChange={this.checkboxHandler}/>EXPRESS</label><br/>
                <label><input type='checkbox' name = 'tech' value='REACT' checked={this.state.checkboxGroup['REACT']} onChange={this.checkboxHandler}/>REACT</label><br/>
                <label><input type='checkbox' name = 'tech' value='NODE' checked={this.state.checkboxGroup['NODE']} onChange={this.checkboxHandler}/>NODE</label><br/>
                
                {
                    //Select
                }

                <select value={this.state.selectedValue} onChange ={this.DropDownHandler}>
                        <option value ='Ruby' >Ruby</option>
                        <option value ='Python'>Python</option>
                        <option value ='Node'>Node</option>
                        <option value ='dotNET'>.NET</option>
                </select>

            </div>
        )
    }
}
export default Forms;