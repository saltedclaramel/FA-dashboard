import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import ProgressBarComponent from "./ProgressBarComponent";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class BasicInfo extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        return(
            <div className="investor-page-layout">
                <ProgressBarComponent percentage={0} style={{marginTop: 10}}/>
                <div className="user-input1">
                    <center>
                        <div class="mb-3">
                            <label for="investor_name" class="form-label">Investor's Name</label>
                            <input type="text" class="form-control" id="investor_name"/>
                        </div>
                        <div class="mb-3">
                            <label for="investor_mobile" class="form-label">Investor's Mobile No.</label>
                            <input type="text" class="form-control" id="investor_mobile"/>
                        </div>
                    </center>
                    <div>
                        <button className="btn" onClick={this.continue} style={{background: "#266DF1", color: "#FFFFFF", marginTop: '5%', padding: '0.7% 3%', float: 'right'}}>Next</button>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default BasicInfo;