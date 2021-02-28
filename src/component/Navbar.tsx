import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/colors";

interface MenuItem {
    link: string;
    text: string;
}

export const Navbar: React.FC = () => {
    const menu: MenuItem[] = [
        { link: "/", text: "Who am I?" },
        { link: "/what-i-do", text: "What I do?" },
        { link: "/curriculum", text: "Curriculum" },
    ];

    return (
        <NavContainer>
            <div style={{ flex: 1 }}>
                <JoPinto>
                    <label style={{ color: colors.brightMain }}>João</label> Pinto
                </JoPinto>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {menu.map((item, i) => (
                    <Fragment key={"link" + i}>
                        <Spacer />
                        <StyledLink to={item.link}>{item.text}</StyledLink>
                    </Fragment>
                ))}
                <Spacer />
            </div>
            <div style={{ flex: 1 }}></div>
        </NavContainer>
    );
};

const Spacer: React.FC = () => {
    return <SpacerContainer>•</SpacerContainer>;
};

const JoPinto = styled.label`
    font-size: 1.8em;
    font-weight: 600;
    color: white;
    padding-left: 35px;
`;

const NavContainer = styled.nav`
    background-color: ${colors.dark};
    display: flex;
    height: 65px;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(0 0 0 / 45%) 0px 5px 15px;
`;

const StyledLink = styled(Link)`
    color: white;
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
    color: white;
    font-size: 1.5em;
`;
