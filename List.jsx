import React from 'react'

export default class List extends React.Component{

    loadStudents(){
        fetch(`http://rmit.chickenkiller.com:8080/students`)
        .then(res=> res.json())
        .then(students=>this.props.dispatch({type: 'FETCH_STUDENT', payload: students}))
    }

    render(){
        return(
            <div>
                <h1>List of students</h1>
               {this.props.students.map(s=>
                <li key={s._id}>{s._id} | {s.name}</li>
                )}

                <button onClick={this.loadStudents.bind(this)}>Load students</button>
            </div>
        )
    }
}