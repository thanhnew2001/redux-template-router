import React from 'react'
import {connect} from 'react-redux'
import List from './List.jsx'
import Form from './Form.jsx'
import Menu from './Menu.jsx'
import Hello from './Hello.jsx'
import About from './About.jsx'
import {browserHistory} from 'react-router'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'


class App extends React.Component{

    render(){
        return (
            <div>
               
               <Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/About'}>About</Link></li>
                  <li><Link to={'/Hello'}>Hello</Link></li>
                  <li><Link to={'/Students'}>Students</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/About' component={About} />
                  <Route exact path='/Hello' component={Hello} />

                  <Route exact path='/Students' render={()=>              
                  <div className='row'>
                    <div className='col-md-4'>
                    <List students={this.props.students} dispatch={this.props.dispatch}/> 
                    </div>
                    <div className='col-md-8'>
                    <Form dispatch={this.props.dispatch} editingStudent={this.props.editingStudent}/>
                
                    </div>
                 </div>
                } />

               </Switch>
            </div>
         </Router>

       
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