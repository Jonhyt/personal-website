import React from "react";
import { Switch, Route, RouteProps, LinkProps, Link } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { WhatPage } from "../pages/home/WhatPage";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} />
            <Route path='/what-i-do' component={WhatPage} />
        </Switch>
    );
};

export const BPLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
    return (
        <Link {...props} to={`/personal-website${to}`}>
            {children}
        </Link>
    );
};

export const BPRoute: React.FC<RouteProps> = ({ path, ...props }) => {
    return <Route {...props} path={`/personal-website${path}`} />;
};
