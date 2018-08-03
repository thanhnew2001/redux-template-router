import React from 'react'

export default class Form extends React.Component{

    constructor(){
        super()
        this.state = {studentName: ''}
    }
    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    addStudent(){
        //POST to webapi

        fetch(`http://rmit.chickenkiller.com:8080/students`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'post', 
            body: JSON.stringify({name: this.state.studentName})
        })
        .then((res)=>{
            return res.json()
        })
        .then((student)=>{
            this.props.dispatch({type:'ADD_STUDENT', payload: student})
        })

    }
    render(){
        return(
            <div>
                <h1>Student Form</h1>
            <input type="text" name="studentName"  
                value = {this.state.studentName}
                onChange={this.handleChange.bind(this)
                }
            />
            <button onClick={this.addStudent.bind(this)}>Add</button>


            </div>
            
        )
    }
}