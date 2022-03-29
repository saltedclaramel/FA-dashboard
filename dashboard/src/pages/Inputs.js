import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import ProgressBarComponent from "./ProgressBarComponent";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Inputs extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
    // constructor(props){
    //     super(props);
    // }
    render(){
        const { values } = this.props;
        const time_horizon_options = ['Less than 3 years', '3-5 years', '6-10 years', 'More than 10 years']
        const qualitative_goals_options = ["Prepare for retirement", "Save for upcoming major expenses", "Save up for something special (vacation, big ticket items etc.)", "Build rainy day fund", "Generate income for 'wants'"]
        // console.log(values.capital)
        // console.log(values.quantitative)
        // console.log(values.qualitative)
        // console.log(values.contribution)
        // console.log(values.time_horizon)
        return(
            <div className="investor-page-layout">
                <ProgressBarComponent percentage={35} style={{marginTop: 10}}/>
                <div className="user-input2">
                    <center>
                        <div class="mb-3">
                            <label for="investor_capital" class="form-label">Investor's Capital</label>
                            <input type="text" class="form-control" id="investor_capital" value={ values.capital } onChange={ this.props.handleChange('capital') }/>
                        </div>
                        <div class="mb-3">
                            <label for="investor_quantitative_goal" class="form-label">Investor's Quantitative Goal</label>
                            <input type="text" class="form-control" id="investor_quantitative_goal" value={ values.quantitative } onChange={ this.props.handleChange('quantitative') }/>
                        </div>
                        <div class="mb-3">
                            <label for="investor_qualitative_goal" class="form-label">Investor's Qualitative Goal</label>
                            <select class="form-select" value={ values.qualitative } onChange={ this.props.handleChange('qualitative') }>
                                <option selected disabled="disabled">---</option>
                                { qualitative_goals_options.map((q_goal) => (
                                    <option value={q_goal} >{q_goal}</option>
                                )) }
                            </select>
                        </div>
                        
                        <div class="mb-3">
                            <label for="investor_monthly_contribution" class="form-label">Investor's Expected Contribution (monthly)</label>
                            <input type="text" class="form-control" id="investor_monthly_contribution" value={ values.contribution } onChange={ this.props.handleChange('contribution') }/>
                        </div>
                        <div class="form-label">Investor's Time Horizon</div><br/><br/>     
                        <div style={{'marginTop': -20, 'marginBottom': 30}}>
                            {time_horizon_options.map((option) => (
                                <div className="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radio_options" id={ option } value={ option } onChange={ this.props.handleChange('time_horizon') }/>
                                        <label class="form-check-label" for={ option }>
                                            { option }
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </center>
                    <div>
                        <button className="btn" onClick={this.back} style={{background: "#266DF1", color: "#FFFFFF", marginTop: '5%', padding: '0.7% 3%', float: 'left'}}>Back</button>
                        <button className="btn" onClick={this.continue} style={{background: "#266DF1", color: "#FFFFFF", marginTop: '5%', padding: '0.7% 3%', float: 'right'}}>Next</button>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Inputs;