import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import ProgressBarComponent from "./ProgressBarComponent";
import "../App.css";

class Dashboard extends Component{
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
    render(){
        return(
            <div className="user-input">
                <ProgressBarComponent percentage={100} style={{marginTop: 10}}/>
                <div className="form-basic-info">
                    <center>
                        Dashboard page
                    </center>
                    <div>
                        <button className="btn" onClick={this.back} style={{background: "#266DF1", color: "#FFFFFF", marginTop: '15%', padding: '0.7% 3%', float: 'left'}}>Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;