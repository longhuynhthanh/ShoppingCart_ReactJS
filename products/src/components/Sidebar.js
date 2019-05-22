import React, { Component } from 'react';
import CustomMenuLink from '../util/util';
const menu = [
    {
        label: "Home",
        to: "/",
        exact: true
    },
    {
        label: "Cart",
        to: '/cart',
        exact: false
    }
];
class Sidebar extends Component {
    render() {
        const elm = menu.map((link, index) => {
            return (
                <CustomMenuLink 
                    key = {index}
                    activeOnlyWhenExact = {link.exact}
                    to = {link.to}
                    label = {link.label}
                />
            );
        });
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Start Bootstrap </div>
                <div className="list-group list-group-flush">
                    {elm}
                </div>
            </div>
        );
    }
}
export default Sidebar;
