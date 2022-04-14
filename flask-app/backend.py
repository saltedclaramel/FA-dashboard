from flask import Flask, jsonify
import numpy_financial as npf

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/backend/<string:understanding>/<string:thought>/<string:reaction>/<string:approach>/<string:outcome>/<string:annual_income>/<string:qualitative>/<string:stability>/<string:time_horizon>/<string:contribution>/<string:capital>/<string:quantitative>")
def backend(understanding, thought, reaction, approach, outcome, annual_income, qualitative, stability, time_horizon, contribution, capital, quantitative):
    tolerance_score = 0
    # weights for investor's understanding of stocks
    if understanding == "None":
        pass
    elif understanding == "Some":
        tolerance_score += 4
    elif understanding == "Good":
        tolerance_score += 6
    elif understanding == "Extensive":
        tolerance_score += 8

    print("1.", tolerance_score)

    # weights for investor's first thought regarding risk wrt finances
    if thought == "I'm afraid I could be left with nothing":
        pass
    elif thought == "I understand that it is an inherent part of the investing process":
        tolerance_score += 4
    elif thought == "I see opportunity for great returns":
        tolerance_score += 6
    elif thought == "I think of the thrill of investing":
        tolerance_score += 8
    
    print("2.", tolerance_score)
    # weights for investor's reaction to losing stock value
    if reaction == "Sell all my shares":
        pass
    elif reaction == "Sell some of my shares":
        tolerance_score += 2
    elif reaction == "Do nothing":
        tolerance_score += 6
    elif reaction == "Reallocate investments":
        tolerance_score += 8
    elif reaction == "Buy more shares":
        tolerance_score += 10
    
    print("3.", tolerance_score)
    # weights for investor's approach to making financial decisions
    if approach == "Avoid making decisions":
        tolerance_score += 2
    elif approach == "Reluctantly make decisions":
        tolerance_score += 4
    elif approach == "Confidently make decisions and don't look back":
        tolerance_score += 8

    print("4.", tolerance_score)

    # weights for acceptable outcomes to investor
    if outcome == "Average annual return: 2.6%, Best case: 10.8%, Worst case: -5%":
        tolerance_score += 2
    elif outcome == "Average annual return: 4.1%, Best case: 19.2%, Worst case: -10.6%":
        tolerance_score += 4
    elif outcome == "Average annual return: 5.6%, Best case: 27.6%, Worst case: -16.4%":
        tolerance_score += 6
    elif outcome == "Average annual return: 6.1%, Best case: 36%, Worst case: -21.7%":
        tolerance_score += 8
    elif outcome == "Average annual return: 7.2%, Best case: 42.5%, Worst case: -25.8%":
        tolerance_score += 10

    print("5.", tolerance_score)

    # weights for time horizon
    if int(time_horizon) < 3:
        tolerance_score *= 0.55
    elif int(time_horizon) <= 5:
        tolerance_score *= 0.7
    elif int(time_horizon) <= 10:
        tolerance_score *= 0.85
    else:
        # multiply by 1
        pass

    print("6.", tolerance_score)

    # weights for annual income
    if annual_income == "Less than 50,000":
        tolerance_score *= 0.4
    elif annual_income == "50,000-100,000":
        tolerance_score *= 0.55
    elif annual_income == "100,000-150,000":
        tolerance_score *= 0.7
    elif annual_income == "150,000-250,000":
        tolerance_score *= 0.85
    else:
        # multiply by 1
        pass
    
    print("7.", tolerance_score)

    # weights for qualitative goal
    if qualitative == "Save for upcoming major expenses":
        tolerance_score *= 0.4
    elif qualitative == "Prepare for retirement":
        tolerance_score *= 0.55
    elif qualitative == "Build rainy day fund":
        tolerance_score *= 0.7
    elif qualitative == "Save up for something special (vacation, big ticket items etc.)":
        tolerance_score *= 0.85
    else:
        # multiply by 1
        pass

    print("8.", tolerance_score)

    # weights for investor's monthly contribution/initial investment (%)
    if float(contribution)/float(capital) < 0.1:
        tolerance_score *= 0.5
    else:
        # multiply by 1
        pass

    print("9.", tolerance_score)
    

    # weights for income stability
    if stability == "Fluctuate":
        tolerance_score *= 0.5
    else:
        # multiply by 1
        pass

    print("10.", tolerance_score)

    # first round of determination of model
    chosen_model = ""
    risk_profile = ""
    if tolerance_score <= 10:
        chosen_model = "income0"
        risk_profile = "Conservative"
    elif tolerance_score <= 18:
        risk_profile = "Conservative"
    elif tolerance_score <= 27:
        risk_profile = "Moderate"
    elif tolerance_score <= 36:
        risk_profile = "Aggressive"
    elif tolerance_score <= 44:
        chosen_model = "aggressive100"
        risk_profile = "Aggressive"
    
    req_ror = npf.rate(int(time_horizon)*12, float(contribution), -float(capital), float(quantitative)) * 100

    model_returns = {
        "aggressive100": 10.4,
        "aggressive80": 7.27,
        "aggressive70": 6.22,
        "balanced60": 5.83,
        "balanced50": 4.98,
        "balanced40": 3.93,
        "income30": 3.62,
        "income20": 2.77,
        "income0": 1.78
    }

    model_volatility = {
        "aggressive100": 10.86,
        "aggressive80": 10.04,
        "aggressive70": 6.2,
        "balanced60": 5.69,
        "balanced50": 3.29,
        "balanced40": 2.12,
        "income30": 1.96,
        "income20": 0.857,
        "income0": 0
    }

    # second round of determination of model
    if chosen_model=="" and risk_profile=="Conservative":
        # find out whether income20 or income30 has a smaller diff with the req_ror
        if (abs(req_ror - model_returns['income20']) < abs(req_ror - model_returns['income30'])):
            chosen_model = 'income20'
        else:
            chosen_model = 'income30'
    elif chosen_model=="" and risk_profile=="Moderate":
        if (abs(req_ror - model_returns['balanced40']) < abs(req_ror - model_returns['balanced50']) and abs(req_ror - model_returns['balanced40']) < abs(req_ror - model_returns['balanced60'])):
            chosen_model = 'balanced40'
        elif (abs(req_ror - model_returns['balanced50']) < abs(req_ror - model_returns['balanced40']) and abs(req_ror - model_returns['balanced50']) < abs(req_ror - model_returns['balanced60'])):
            chosen_model = 'balanced50'
        else:
            chosen_model = 'balanced60'
    elif chosen_model=="" and risk_profile=="Aggressive":
        if (abs(req_ror - model_returns['aggressive70']) < abs(req_ror - model_returns['aggressive80'])):
            chosen_model = 'aggressive70'
        else:
            chosen_model = 'aggressive80'

    feasibility = ""
    money_at_end = npf.fv(model_returns[chosen_model]/(int(time_horizon)*12), (int(time_horizon)*12), -float(contribution), -float(capital))
    if money_at_end >= float(quantitative):
        feasibility = "Feasible"
        min_monthly_payment = float(contribution)
    else:
        feasibility = "Not feasible"
        min_monthly_payment = -npf.pmt(model_returns[chosen_model], int(time_horizon)*12, float(capital), fv=money_at_end)
    return jsonify(
        {
            "code": 200,
            "data": {
                "risk_profile": risk_profile,
                "feasibility": feasibility,
                "min_monthly_payment": round(min_monthly_payment,2),
                "chosen_model": chosen_model,
                "forecasted_returns": model_returns[chosen_model],
                "model_volatility": model_volatility[chosen_model]
            }
        }
    )


if __name__ == '__main__':

    app.run(host='0.0.0.0', debug=True)