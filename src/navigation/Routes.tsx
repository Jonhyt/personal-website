import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { WhatPage } from "../pages/whatIDo/WhatPage";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/what-i-do'>
                <WhatPage />
            </Route>
            <Route path='/'>
                <HomePage />
            </Route>
        </Switch>
    );
};
