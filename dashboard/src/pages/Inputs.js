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
    render(){
        const { values } = this.props;
        const qualitative_goals_options = ["Prepare for retirement", "Save for upcoming major expenses", "Save up for something special (vacation, big ticket items etc.)", "Build rainy day fund", "Generate income for 'wants'"]
        const annual_income_options = ['Less than 50,000', '50,000-100,000', '100,000-150,000', '150,000-250,000', 'More than 250,000']
        const stability_options = ['Fluctuate', 'Stable']

        return(
            <div className="investor-page-layout">
                <ProgressBarComponent percentage={35} style={{marginTop: 10}}/>
                <div className="user-input2">
                    <center>
                    <div class="mb-3">
                        <label for="investor_time_horizon" class="form-label">Investor's Time Horizon</label>
                        <input type="text" class="form-control" id="investor_time_horizon" value={ values.time_horizon } onChange={ this.props.handleChange('time_horizon') }/>
                    </div>
                    <div class="form-label">Investor's Annual Income</div><br/><br/>     
                        <div style={{'marginTop': -15, 'marginBottom': 30}}>
                            {annual_income_options.map((option) => (
                                <div className="mb-3">
                                    <div class="form-check">
                                        <input 
                                            class="form-check-input" 
                                            type="radio" 
                                            name="annual_income_options" 
                                            id={ option } 
                                            value={ option } 
                                            checked={ values.annual_income === option }
                                            onChange={ this.props.handleChange('annual_income') }
                                        />
                                        <label class="form-check-label" for={ option }>
                                            { option }
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                                { qualitative_goals_options.map((q_goal) => (
                                    <option value={ q_goal } >{ q_goal }</option>
                                )) }
                            </select>
                        </div>
                         
                        <div class="mb-3">
                            <label for="investor_contribution" class="form-label">Investor's Expected Contribution (monthly)</label>
                            <input type="text" class="form-control" id="investor_contribution" value={ values.contribution } onChange={ this.props.handleChange('contribution') }/>
                        </div>

                        <div class="form-label">Is investor's income stable or does it fluctuate from time to time?</div><br/><br/>     
                        <div style={{'marginTop': -15, 'marginBottom': 30}}>
                            {stability_options.map((option) => (
                                <div className="mb-3">
                                    <div class="form-check">
                                        <input 
                                            class="form-check-input" 
                                            type="radio" 
                                            name="stability_options" 
                                            id={ option } 
                                            value={ option } 
                                            checked={ values.stability === option }
                                            onChange={ this.props.handleChange('stability') }
                                        />
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