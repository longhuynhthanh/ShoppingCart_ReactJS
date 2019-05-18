import React, { Component } from 'react';
import SidebarContainer from './Containers/SidebarContainer';
import ContentContainer from './Containers/ContentContainer';
class App extends Component {
    render() {
        return (
            <div className="d-flex" id="wrapper">
                {/* Sidebar */}
                <SidebarContainer />
                {/* /#sidebar-wrapper */}
                {/* Content */}
                <ContentContainer />
                {/* /#page-content-wrapper */}
            </div>
        );
    }
}
        
export default App;
