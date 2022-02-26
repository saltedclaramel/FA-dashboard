import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Component } from "react";

class ProgressBarComponent extends Component{
    render(){
        return(
            <ProgressBar percent={this.props.percentage} filledBackground="#266DF1">
                <Step transition="scale" position="0%">
                    {({ accomplished }) => (
                    <div className={`transitionStep ${accomplished ? "accomplished" : ""}`}>
                        <h4>
                            <span className="badge" style={{background: "#266DF1", color: "#FFFFFF", borderRadius: "50%", padding: 16, width: 50, height: 50, margin: '20% 0% 5% 35%'}}>1</span>
                        </h4>
                        <div style={{fontSize: 20}}>Basic Information</div>
                    </div>
                    )}
                </Step>
                <Step transition="scale" position="33%">
                    {({ accomplished }) => (
                    <div className={`transitionStep ${accomplished ? "accomplished" : ""}`}>
                        <h4>
                            <span className="badge" style={{background: "#266DF1", color: "#FFFFFF", borderRadius: "50%", padding: 16, width: 50, height: 50, margin: '50% 0% 10% 0%'}}>2</span>
                        </h4>
                        <div style={{fontSize: 20}}>Inputs</div>
                    </div>
                    )}
                </Step>
                <Step transition="scale" position="60%">
                    {({ accomplished }) => (
                    <div className={`transitionStep ${accomplished ? "accomplished" : ""}`}>
                        <h4>
                            <span className="badge" style={{background: "#266DF1", color: "#FFFFFF", borderRadius: "50%", padding: 16, width: 50, height: 50, margin: '18% 0% 5% 35%'}}>3</span>
                        </h4>
                        <div style={{fontSize: 20}}>Risk Profiling Survey</div>
                    </div>
                    )}
                </Step>
                <Step transition="scale" position="100%">
                    {({ accomplished }) => (
                    <div className={`transitionStep ${accomplished ? "accomplished" : ""}`}>
                        <h4>
                            <span className="badge" style={{background: "#266DF1", color: "#FFFFF", borderRadius: "50%", padding: 16, width: 50, height: 50, margin: '29% 0% 5% 20%'}}>4</span>
                        </h4>
                        <div style={{fontSize: 20}}>Dashboard</div>
                    </div>
                    )}
                </Step>
            </ProgressBar>
        )
    }
}

export default ProgressBarComponent;