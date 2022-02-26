import React, { Component } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

class Sidebar extends Component{
    render(){
        return(
            <Nav defaultActiveKey="/" className="flex-column sidebar" bg="dark">
                <h1 className="pdt-name">SMARTFOLIO</h1>
                <Nav.Link href="/" active>Add an investor</Nav.Link>
                <Nav.Link href="/all-profiles">View all profiles</Nav.Link>
                <Nav.Link href="/models">View model</Nav.Link>
            </Nav>
        )
    }
}

export default Sidebar;