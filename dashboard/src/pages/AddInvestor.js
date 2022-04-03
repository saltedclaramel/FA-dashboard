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
        capital: "",
        quantitative: "",
        qualitative: "Prepare for retirement",
        contribution: null,
        time_horizon: null,
        understanding: null,
        thought: null,
        reaction: null,
        approach: null,
        outcome: null,
        annual_income: null,
        stability: null
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
        handleChange = input => e => {
            this.setState({[input]: e.target.value})
        }
    render(){
        // destructuring
        const { step, name, mobile, capital, quantitative, qualitative, contribution, time_horizon, understanding, thought, reaction, approach, outcome, annual_income, stability } = this.state;
        const values = { name, mobile, capital, quantitative, qualitative, contribution, time_horizon, understanding, thought, reaction, approach, outcome, annual_income, stability }
        // eslint-disable-next-line
        switch(step){
            case 1:
                return(
                    <div>
                        <BasicInfo 
                            nextStep = { this.nextStep }
                            handleChange = { this.handleChange }
                            values = { values }
                        />
                    </div>
                )
            case 2:
                return(
                    <div>
                        <Inputs 
                            previousStep = { this.previousStep }
                            nextStep= { this.nextStep }
                            handleChange = { this.handleChange }
                            values = { values }
                        />
                    </div>

                )
            case 3:
                return(
                    <div>
                        <Survey
                            previousStep = { this.previousStep }
                            nextStep= { this.nextStep }
                            handleChange = { this.handleChange }
                            values = { values }
                        />
                    </div>
                )
            case 4:
                return(
                    <div>
                        <Dashboard
                            values = { values }
                        />
                    </div>
                )    
            default:
                // do nothing
        }
   
    }
}

export default AddInvestor;