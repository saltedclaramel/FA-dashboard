import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import ProgressBarComponent from "./ProgressBarComponent";
import "../App.css"

class BasicInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        return(
            <div className="user-input">
                <ProgressBarComponent percentage={0} style={{marginTop: 10}}/>
                <div className="form-basic-info">
                    <center>
                        Basic Information page input stuff
                    </center>
                    <div>
                        <button className="btn" onClick={this.continue} style={{background: "#266DF1", color: "#FFFFFF", marginTop: '15%', padding: '0.7% 3%', float: 'right'}}>Next</button>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default BasicInfo;