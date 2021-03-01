import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colors";
import { AppContext } from "../../context/AppContext";

export const ChooseLanguage: React.FC = () => {
    const { language, changeLanguage } = useContext(AppContext);

    return (
        <LanguageContainer>
            {language === "en" ? <LanguageButton onClick={() => changeLanguage("pt")}>PT</LanguageButton> : <SelectedButton>PT</SelectedButton>}
            <Separator>/</Separator>
            {language === "pt" ? <LanguageButton onClick={() => changeLanguage("en")}>EN</LanguageButton> : <SelectedButton>EN</SelectedButton>}
        </LanguageContainer>
    );
};

const LanguageContainer = styled.div`
    margin-right: 35px;
`;

const Separator = styled.label`
    color: ${colors.contrastGrey};
    font-size: 1.5em;
    font-weight: 500;
    margin: 3px;
`;

const LanguageButton = styled.div`
    background: none;
    border: none;
    color: ${colors.contrastGrey};
    font-size: 1.5em;
    font-weight: 500;
    display: inline-block;
    cursor: default;
    user-select: none;
    padding: 0 8px;
    margin: 2px;

    &:hover {
        background: ${colors.contrastGrey};
        color: ${colors.mainGrey};
        border-radius: 5px;
    }

    &:active {
        margin: 0;
        border: solid 2px ${colors.contrastGrey};
        background: none;
        color: ${colors.contrastGrey};
    }
`;

const SelectedButton = styled.div`
    background: ${colors.contrastGrey};
    border: none;
    font-size: 1.5em;
    font-weight: 500;
    display: inline-block;
    cursor: default;
    user-select: none;
    padding: 0 8px;
    margin: 2px;
    color: ${colors.mainGrey};
    border-radius: 5px;

    &:active {
        margin: 0;
        border: solid 2px ${colors.contrastGrey};
        background: none;
        color: ${colors.contrastGrey};
    }
`;
