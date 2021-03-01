import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./component/navbar/Navbar";
import { StateProvider } from "./context/AppContext";
import { Routes } from "./navigation/Routes";

function App() {
    return (
        <StateProvider>
            <BrowserRouter basename='/personal-website'>
                <Navbar />
                <Routes />
                REMEMBER TO CREDIT FREEPIK FOR THE ICON
            </BrowserRouter>
        </StateProvider>
    );
}

export default App;
