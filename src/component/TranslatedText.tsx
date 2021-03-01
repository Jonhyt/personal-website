import React, { useContext } from "react";
import { AppContext, AppState } from "../context/AppContext";
import { translations } from "../translations/Translations";

interface ITranslatedText {
    id: string;
    bold?: React.CSSProperties;
}

export const TranslatedText: React.FC<ITranslatedText> = ({ id, bold = {} }) => {
    const state: AppState = useContext(AppContext);
    const baseString: string = translations[state.language].translations[id];

    const parsedString = baseString.split("*").map((s, i) =>
        i % 2 === 0 ? (
            <TextNode key={i}>{s}</TextNode>
        ) : (
            <b key={i} style={bold}>
                {s}
            </b>
        )
    );

    return <>{parsedString}</>;
};

const TextNode: React.FC = ({ children }) => <>{children}</>;
