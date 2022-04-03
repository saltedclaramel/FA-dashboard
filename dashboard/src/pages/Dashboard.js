import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import ProgressBarComponent from "./ProgressBarComponent";
import "../App.css";
import { Container, Row, Col, Card } from 'react-bootstrap';

class Dashboard extends Component{
    render(){
        const { values } = this.props;
        return(
            <div className="investor-page-layout">
                <ProgressBarComponent percentage={100} style={{marginTop: 10}}/>
                <div className="user-input4">
                    <center>
                        <Container fluid>
                            <Row>
                                <Col lg="4" sm="6">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '11em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h5>{ values.name }'s Dashboard</h5>
                                            <p>{ values.mobile }</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" sm="6">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '11em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h5>Investor Risk Profile</h5>
                                            <p></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" sm="6">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '11em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h5>Feasibility of attaining investor goal</h5>
                                            <p></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 20 }}>
                                <Col lg="8" sm="12">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '20em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h5>Investor Risk Profile</h5>
                                            <p></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" sm="12">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '20em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h5>Amount to invest each month to reach financial goal</h5>
                                            <p></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </center>
                </div>
            </div>
        )
    }
}

export default Dashboard;