import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';

import AddInvestor from './pages/AddInvestor';
import AllProfiles from './pages/AllProfiles';
import Models from './pages/Models';

class AllRoutes extends Component {
    render(){
        return (
            <Fragment>
                <Route exact path="/" component={ AddInvestor }/>
                <Route exact path="/all-profiles" component={ AllProfiles }/>
                <Route exact path="/models" component={ Models }/>
            </Fragment>
        )
    }
}

export default AllRoutes;