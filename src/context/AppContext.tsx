import React, { createContext, useState } from "react";

export const defaultState: AppState = {
    language: "en",
    changeLanguage: () => {},
};

export const AppContext = createContext(defaultState);

export const StateProvider: React.FC = ({ children }) => {
    const [language, setLanguage] = useState(defaultState.language);

    return <AppContext.Provider value={{ language, changeLanguage: setLanguage }}>{children}</AppContext.Provider>;
};

export interface AppState {
    language: "en" | "pt";
    changeLanguage: Function;
}
