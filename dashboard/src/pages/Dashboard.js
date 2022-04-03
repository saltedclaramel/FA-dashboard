import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import ProgressBarComponent from "./ProgressBarComponent";
import "../App.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import aggressive70 from '../assets/aggressive70.png'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosen_model: "",
            feasibility: "",
            risk_profile: "",
            amt_to_invest: "",
            // img_url: ""
        }

    }
    componentDidMount(){
        fetch('http://127.0.0.1:5000/backend/' + this.props.values.understanding + '/' + this.props.values.thought + '/' + this.props.values.reaction + '/' + this.props.values.approach + '/' + this.props.values.outcome + '/' + this.props.values.annual_income + '/' + this.props.values.qualitative + '/' + this.props.values.stability + '/' + this.props.values.time_horizon +'/' + this.props.values.contribution + '/' + this.props.values.capital + '/' + this.props.values.quantitative)
        .then(res => res.json())
        .then(result => {
            this.setState({
                chosen_model: result.data['chosen_model'],
                feasibility: result.data['feasibility'],
                risk_profile: result.data['risk_profile'],
                amt_to_invest: result.data['min_monthly_payment'],
                // img_url: 'assets/' + result.data['chosen_model'] + '.png'
            })
            // console.log(this.state.img_url)
        })
    }
    render(){
    const { values } = this.props;
    // const model = require(this.state.img_url)
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
                                            <p>{ this.state.risk_profile }</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" sm="6">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '11em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h6>Feasibility of attaining investor goal</h6>
                                            <p>{ this.state.feasibility }</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 20 }}>
                                <Col lg="8" sm="12">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '20em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h6>OPTIMAL PORTFOLIO MODEL</h6>
                                            {/* <p>{ this.state.chosen_model }</p> */}
                                            <img src={aggressive70} alt="Chosen model" style={{width: "90%"}}/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" sm="12">
                                    <Card style={{ backgroundColor: '#2C2F42', height: '20em' }}>
                                        <Card.Body style={{ padding: 40, textAlign: 'left' }}>
                                            <h6>Amount to invest each month to reach financial goal</h6>
                                            <p>{ this.state.amt_to_invest }</p>
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