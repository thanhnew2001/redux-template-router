import React from 'react'

export default class Form extends React.Component{
    constructor(){
        super()
        this.state = {name: 'abc', age: '10'}
    }

    handleChange(e){
        var newvalue = {}
        newvalue[e.target.name] = e.target.value
        this.setState(newvalue)
    }

    onSave(){
        fetch('http://rmit.chickenkiller.com:8080/students', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(this.state)
        })
        .then(res=>res.json())
        .then(student=>{
            this.props.dispatch({type: 'ADD_STUDENT', payload: student})
        })
    }

    render(){
        return(
            <div>
               <div className='panel panel-default'>
                 <div className='panel-heading'>Student Form</div>
                 <div className='panel-body'>
                    <label htmlFor="">Name</label> <input type="text" name='name' 
                    value={this.state.name} className='form-control' onChange={this.handleChange.bind(this)}/>
                    <label htmlFor="">Age</label><input type="text" name='age' 
                    value={this.state.age} className='form-control' onChange={this.handleChange.bind(this)}/>
                    <button className='btn btn-default' onClick={this.onSave.bind(this)}>Save</button>    
                 </div>
               </div> 
            </div>
        )
    }
}