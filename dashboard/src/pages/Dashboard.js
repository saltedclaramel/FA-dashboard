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
                                            <h6>{ values.name }'s Dashboard</h6>
                                            <p>{ values.mobile }</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" sm="6">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '11em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h6>Investor Risk Profile</h6>
                                            <p></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" sm="6">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '11em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h6>Feasibility of attaining investor goal</h6>
                                            <p></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 20 }}>
                                <Col lg="8" sm="12">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '20em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h6>Investor Risk Profile</h6>
                                            <p></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" sm="12">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '20em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h6>Amount to invest each month to reach financial goal</h6>
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