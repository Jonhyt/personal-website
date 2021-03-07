import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../assets/colors";
import { TranslatedText } from "../TranslatedText";
import { ChooseLanguage } from "./ChooseLanguage";

interface MenuItem {
    link: string;
    id: string;
}

export const Navbar: React.FC = () => {
    const menu: MenuItem[] = [
        { link: "/", id: "nav.who" },
        { link: "/what-i-do", id: "nav.what" },
        { link: "/curriculum", id: "nav.cv" },
    ];

    return (
        <NavContainer>
            <Left>
                <JoPinto>
                    <label style={{ color: colors.brightMain }}>João</label> Pinto
                </JoPinto>
            </Left>
            <Middle>
                {menu.map((item, i) => (
                    <Fragment key={"link" + i}>
                        <Spacer />
                        <StyledLink to={item.link}>
                            <TranslatedText id={item.id} />
                        </StyledLink>
                    </Fragment>
                ))}
                <Spacer />
            </Middle>
            <Right>
                <ChooseLanguage />
            </Right>
        </NavContainer>
    );
};

const Spacer: React.FC = () => {
    return <SpacerContainer>•</SpacerContainer>;
};

const JoPinto = styled.label`
    font-size: 1.8em;
    font-weight: 600;
    color: ${colors.contrastGrey};
    padding-left: 35px;
`;

const NavContainer = styled.nav`
    background-color: ${colors.mainGrey};
    display: flex;
    height: 65px;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(0 0 0 / 45%) 0px 5px 15px;
    padding: 20px 0;
`;

const StyledLink = styled(Link)`
    color: ${colors.contrastGrey};
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.5em;

    &:hover {
        text-decoration: underline;
    }
`;

const SpacerContainer = styled.label`
    color: ${colors.contrastGrey};
    font-size: 1.5em;
`;

const Left = styled.div`
    flex: 1;
`;

const Middle = styled.div`
    display: flex;
    flexdirection: row;
`;

const Right = styled.div`
    flex: 1;
    justify-content: flex-end;
    display: flex;
`;
