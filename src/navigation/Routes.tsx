import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} />
        </Switch>
    );
};
