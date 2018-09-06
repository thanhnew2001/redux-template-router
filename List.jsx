import React from 'react'

export default class List extends React.Component{

    componentDidMount(){
        fetch('http://rmit.chickenkiller.com:8080/students')
        .then(res=>res.json())
        .then(students=>{
            this.props.dispatch({type: 'FETCH_STUDENT', payload: students})
        })
    }

    render(){
        return(
            <div>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Student List</div>
                    <div className='panel-body'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.props.students.map(s=>
                                <tr>
                                    <td>{s.name}</td>
                                    <td>{s.age}</td>
                                </tr>
                              )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}