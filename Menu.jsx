import React from 'react'

export default class Menu extends React.Component{
    render(){
        return(

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="home">Home</a></li>
                    <li><a href="students">Students</a></li>
                    <li><a href="about">About</a></li>
                    </ul>
                </div>
            </nav>

        )
    }
}