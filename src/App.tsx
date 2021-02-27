import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Routes } from "./navigation/Routes";

function App() {
    return (
        <BrowserRouter basename='/personal-website'>
            <Navbar />
            <Routes />
        </BrowserRouter>
    );
}

export default App;
