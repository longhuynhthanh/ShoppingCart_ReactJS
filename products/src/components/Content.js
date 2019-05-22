import React, { Component } from 'react';
import NavigationContainer from '../Containers/NavigationContainer';
import TitleContainer from '../Containers/TitleContainer';
import routes from '../routes';
import {Switch, Route} from 'react-router-dom';
class Content extends Component {
    render() {
        const elm = routes.map((route, index) => {
            return (
                <Route 
                    key={index}
                    path={route.path}
                    component={route.main}
                    exact={route.exact}
                />
            );
        });
        return (
            <div id="page-content-wrapper" >
                {/* Navigation */}
                <NavigationContainer />
                {/* End Navigation */}
                
                {/* Title */}
                <TitleContainer />
                {/* End Title */}
                <Switch>
                    {elm}
                </Switch>
            </div >
        );
    }
}
export default Content;
