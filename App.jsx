import React from 'react'
import {connect} from 'react-redux'
import List from './List.jsx';
import Form from './Form.jsx';
class App extends React.Component{


    render(){
        return (
            <div>
           <List students={this.props.students} dispatch={this.props.dispatch}/>

            <Form dispatch={this.props.dispatch}/>
          
             
            </div>

        )
    }
    
}

function mapStateToProps(centralState){
    return {
       students: centralState.students,
       courses: centralState.courses
    }
}


export default connect(mapStateToProps)(App)