import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import ProgressBarComponent from "./ProgressBarComponent";
import "../App.css";

class Survey extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
    constructor(props){
        super(props);
    }
    render(){
        const { values } = this.props;
        const questions = [
            {
                qn: "Investor's understanding of stocks, bonds, ETFs",
                options: ['None', 'Some', 'Good', 'Extensive'],
                qnName: "understanding"
            },
            {
                qn: "First thought that comes to mind when investor hears of risks related to finances",
                options: [
                    "I'm afraid I could be left with nothing", 
                    "I understand that it is an inherent part of the investing process",
                    "I see opportunity for great returns",
                    "I think of the thrill of investing"
                ],
                qnName: "thought"
            },
            {
                qn: "What investor would do if: In the last 3 months, the overall stock market lost 25% of its value. A stock investment the investor owned also lost 25% of its value.",
                options: [
                    "Sell all my shares", 
                    "Sell some of my shares",
                    "Do nothing",
                    "Reallocate investments",
                    "Buy more shares"
                ],
                qnName: "reaction"
            },
            {
                qn: "Investor's approach to making important financial decisions",
                options: [
                    "Avoid making decisions", 
                    "Reluctantly make decisions",
                    "Confidently make decisions and don't look back"
                ],
                qnName: "approach"
            },
            {
                qn: "Most acceptable outcome",
                options: [
                    "Average annual return: 2.6%, Best case: 10.8%, Worst case: -5%",
                    "Average annual return: 4.1%, Best case: 19.2%, Worst case: -10.6%",
                    "Average annual return: 5.6%, Best case: 27.6%, Worst case: -16.4%",
                    "Average annual return: 6.1%, Best case: 36%, Worst case: -21.7%",
                    "Average annual return: 7.2%, Best case: 42.5%, Worst case: -25.8%"
                ],
                qnName: "outcome"
            }
        ]
        // console.log(values.understanding)
        // console.log(values.thought)
        // console.log(values.reaction)
        // console.log(values.approach)
        // console.log(values.outcome)
        return(
            <div className="investor-page-layout">
                <ProgressBarComponent percentage={65} style={{marginTop: 10}}/>
                <div className="user-input3">
                <center>
                    { questions.map((question, idx) => (
                        <div>
                            <div class="form-label" style={{ marginBottom: -30}}>{ idx+1 }. { question['qn'] }</div><br/><br/>
                            { question['options'].map((option) => (
                                <div className="m-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name={ question['qnName'] } id={ option } value={ option } onChange={ this.props.handleChange(question['qnName']) }/>
                                        <label class="form-check-label" for={ option }>
                                            { option }
                                        </label>
                                    </div>
                                </div>
                            ))}
                            <br/>
                        </div>
                    ))}

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

export default Survey;