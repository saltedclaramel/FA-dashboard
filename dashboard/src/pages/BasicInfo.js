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

    // constructor(props){
    //     super(props);
    // }
    render(){
        const { values } = this.props;
        // console.log(values.name)
        // console.log(values.mobile)
        return(
            <div className="investor-page-layout">
                <ProgressBarComponent percentage={0} style={{marginTop: 10}}/>
                <div className="user-input1">
                    <center>
                        <div class="mb-3">
                            <label for="investor_name" class="form-label">Investor's Name</label>
                            <input type="text" class="form-control" id="investor_name" value={ values.name } onChange={ this.props.handleChange('name') }/>
                        </div>
                        <div class="mb-3">
                            <label for="investor_mobile" class="form-label">Investor's Mobile No.</label>
                            <input type="text" class="form-control" id="investor_mobile" value={ values.mobile } onChange={ this.props.handleChange('mobile') }/>
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