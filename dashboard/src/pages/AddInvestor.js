import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
import Inputs from "./Inputs";
import Survey from "./Survey";
import Dashboard from "./Dashboard";

class AddInvestor extends Component{
    state = {
        step: 1,
        name: "",
        mobile: "",
    }
        //go to next step
        nextStep = () => {
            const { step } = this.state;
            this.setState({
                step: step + 1
            });
        }
        //go to previous step
        previousStep = () => {
            const { step } = this.state;
            this.setState({
                step: step - 1
            });
        }
        // Handle fields change
        // handleChange = input => e => {
        //     this.setState({[input]: e.target.value})
        // }
    render(){
        const { step } = this.state;
        // eslint-disable-next-line
        switch(step){
            case 1:
                return(
                    <div onClick={() => this.scrollToTop()}>
                        <BasicInfo nextStep= { this.nextStep }/>
                    </div>
                )
            case 2:
                return(
                    <div onClick={() => this.scrollToTop()}>
                        <Inputs 
                            previousStep = { this.previousStep }
                            nextStep= { this.nextStep }
                        />
                    </div>

                )
            case 3:
                return(
                    <div onClick={() => this.scrollToTop()}>
                        <Survey
                            previousStep = { this.previousStep }
                            nextStep= { this.nextStep }
                        />
                    </div>
                )
            case 4:
                return(
                    <div onClick={() => this.scrollToTop()}>
                        <Dashboard
                            previousStep = { this.previousStep }
                        />
                    </div>
                )    
        }
   
    }
}

export default AddInvestor;