import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

//write the first reducer:
function students(state = [], action){
    if(action.type=='FETCH_STUDENT'){
        console.log(action.payload)
        return action.payload
    }
    else if(action.type=='ADD_STUDENT'){
        return [].concat(state, action.payload)
    }
    else
        return state
}

//write another reducer that will display a list courses
function courses(state=['WP', 'SADI'], action){
    if(action.type=='LIST_COURSE')
        return state
    else if(action.type=='ADD_COURSE')

        return [].concat(state, action.payload)
    else
        return state
}

var centralState = combineReducers({
   students, courses
})

var store = createStore(centralState, applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store}>    
    <App />
</Provider>    
    , document.getElementById('app')

)