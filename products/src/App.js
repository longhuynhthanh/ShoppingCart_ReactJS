import React, { Component } from 'react';
import SidebarContainer from './Containers/SidebarContainer';
import ContentContainer from './Containers/ContentContainer';
import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="d-flex" id="wrapper">
                    {/* Sidebar */}
                    <SidebarContainer />
                    {/* /#sidebar-wrapper */}
                    {/* Content */}
                    <ContentContainer />
                    {/* /#page-content-wrapper */}
                </div>
            </Router>
        );
    }
}

export default App;
