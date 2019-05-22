import React from 'react';
import { Route, Link } from 'react-router-dom';
const CustomMenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => (
                // <li className={match ? "nav-item active" : 'nav-item'}>
                //     <Link to={to} className="nav-link">{label}</Link>
                // </li>
                <Link to ={to} className={match ? 'list-group-item list-group-item-action bg-primary' : 'list-group-item list-group-item-action bg-default'}>{label}</Link>
            )}
        />
    );
}
export default CustomMenuLink;