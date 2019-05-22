import React, { Component } from 'react';
class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" >
                <button className="btn btn-primary" id="menu-toggle">
                    <span className="navbar-toggler-icon" />
                </button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    </ul>
                </div>
            </nav >
        );
    }
}
export default Navigation;
