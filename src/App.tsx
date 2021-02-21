import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Routes } from "./navigation/Routes";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes />
        </Router>
    );
}

export default App;
