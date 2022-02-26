import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import ProgressBarComponent from "./ProgressBarComponent";
import "../App.css";

class Inputs extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
    render(){
        return(
            <div className="user-input">
                <ProgressBarComponent percentage={35} style={{marginTop: 10}}/>
                <div className="form-basic-info">
                    <center>
                        Inputs page
                    </center>
                    <div>
                        <button className="btn" onClick={this.back} style={{background: "#266DF1", color: "#FFFFFF", marginTop: '15%', padding: '0.7% 3%', float: 'left'}}>Back</button>
                        <button className="btn" onClick={this.continue} style={{background: "#266DF1", color: "#FFFFFF", marginTop: '15%', padding: '0.7% 3%', float: 'right'}}>Next</button>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Inputs;