import React, { Component } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav defaultActiveKey="/home" className="flex-column sidebar" bg="dark">
            <h1 className="pdt-name">SMARTFOLIO</h1>
            <Nav.Link href="/" active>Add an investor</Nav.Link>
            <Nav.Link eventKey="link-1">View all profiles</Nav.Link>
            <Nav.Link eventKey="link-2">View model</Nav.Link>
          </Nav>
          <div className="main-body">
            hi
          </div>
        </header>
      </div>
    )
  }
}

export default App
