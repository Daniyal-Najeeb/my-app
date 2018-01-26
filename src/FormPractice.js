import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

let Subscribe =
    {
        marginLeft: 20,
        marginTop:20,
        width:100,
        height:40,
    }
let Email = 
{
    marginTop : 20,
    paddingLeft: 10,
  
}
class Forms extends Component
{
    constructor(props)
    {
        super(props)

        this.state = 
        {
            userName : '',

            allUsers : [],

            radioGroup:{
                MEAN : false,
                MERN : true,
                LAMP : false
            },

            checkBoxGroup:{
                MongoDb : false,
                Express : true,
                React : false,
                NODE : true
            },
            
            checkedValue : '',

            radiouttonValue : '',
            
            selectedValues: 'dotNet',

            Email : ''

        }
        this.updateValue = this.updateValue.bind(this)
        this.onSave = this.onSave.bind(this)
        this.checkboxHandler = this.checkboxHandler.bind(this) 
        this.radioHandler = this.radioHandler.bind(this)
        this.dropdownHandler = this.dropdownHandler.bind(this)
    }
    updateValue(e)
    {
        this.setState({
            userName: e.target.value
        })
    }
    onSave(e)
    {
        let currentUser = this.state.allUsers
        currentUser.push(this.state.userName, this.state.Email, this.state.selectedValues, this.state.checkedValue, this.state.radiouttonValue)
        this.setState({
            allUsers : currentUser,
            userName : '',  
            Email : ''    
        })
          
            console.log(this.state.allUsers)
    }
    radioHandler(e)
    {
        let radioGroup = this.state.radioGroup
        for(var key in radioGroup)
        {
            radioGroup[key] = false
        }
        radioGroup[e.target.value] = e.target.checked

        this.setState({
            radioGroup : radioGroup,
            radiouttonValue : e.target.value
        })
       
    }

    checkboxHandler(e)
    {
        let checkBoxGroup = this.state.checkBoxGroup
        
        checkBoxGroup[e.target.value] = e.target.checked

        this.setState({
            checkBoxGroup : checkBoxGroup,
            checkedValue : e.target.value
        })
        console.log(e.target.value)
    }

    dropdownHandler(e)
    {
        this.setState({
            selectedValues : e.target.value
        })
        console.log(this.state.selectedValues)
    }
    updateEmail(e)
    {
        this.setState({
            Email : e.target.value
        })
        
    }
    onSubscribe()
    {
        this.setState({
            Email : ''
        })
        console.log(this.state.Email)
    }

    render()
    {
        return(
            <div>
             Name <input type= 'text' name = 'userName' onChange={this.updateValue} style={Email}/>
             Email <input type = 'text' name = 'Email' onChange={this.updateEmail.bind(this)} style={Email}/><br/> 
            <Button name='Subscribe' onClick={this.onSubscribe.bind(this)} bsStyle='primary' style={Subscribe}>Subscribe</Button><br />
           

            {
                //RadioButton
            }

            <label><input type='radio' name='devtool' value='MEAN'  onClick={this.radioHandler}/>MEAN</label>
            <label><input type='radio' name='devtool' value='MERN'  onClick={this.radioHandler}/>MERN</label>
            <label><input type='radio' name='devtool' value='LAMP'  onClick={this.radioHandler}/>LAMP</label><br />

            {
                //CheckBox
            }

            <label><input type='checkbox' name='tech' value='MongoDb'  onClick={this.checkboxHandler}/>MongoDb</label>
            <label><input type='checkbox' name='tech' value='Express'  onClick={this.checkboxHandler}/>Express</label>
            <label><input type='checkbox' name='tech' value='React'   onClick={this.checkboxHandler}/>React</label>
            <label><input type='checkbox' name='tech' value='NODE'   onClick={this.checkboxHandler}/>NODE</label><br />

            {
                //DropDown
            }

            <select value={this.state.selectedValues} onChange= {this.dropdownHandler}>
                <option>Ruby</option>
                <option>Node</option>
                <option>Python</option>
                <option>dotNet</option>
            </select><br />

            <Button bsStyle='success' onClick={this.onSave}>Save</Button>
            </div>
        )
    }
}
export default Forms;