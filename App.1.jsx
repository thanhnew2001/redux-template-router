import React from 'react'
import {connect} from 'react-redux'
import List from './List.jsx'
import Form from './Form.jsx'
import Menu from './Menu.jsx'
import About from './About.jsx'
import {browserHistory} from 'react-router'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'

class App extends React.Component{

    render(){
        const pathname = window.location.pathname
        console.log(pathname);
        return (
            <div>
               <div className="jumbotron">
                    <h1>React/Redux project</h1>
                    <p>It is hard but really cool!</p>
               </div>

              <Menu />

              {pathname.includes('about')?
                <About />
                :
                pathname.includes('students')?
                <div>
                    <div className='row'>
                        <div className='col-md-4'>
                        <List students={this.props.students} dispatch={this.props.dispatch}/> 
                        </div>
                        <div className='col-md-8'>
                        <Form dispatch={this.props.dispatch} editingStudent={this.props.editingStudent}/>
                  
                        </div>
                    </div>
                              </div>
                :
                'No component'
    
              }
               
       
           </div>

        )
    }
    
}

function mapStateToProps(centralState){
    return {
       students: centralState.students,
       courses: centralState.courses,
       editingStudent: centralState.editingStudent
    }
}


export default connect(mapStateToProps)(App)