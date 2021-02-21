import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/colors";
import { BPLink } from "../navigation/Routes";

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
            {menu.map((item, i) => (
                <Fragment key={"link" + i}>
                    <Spacer />
                    <Link to={item.link}>{item.text}</Link>
                </Fragment>
            ))}
            <Spacer />
            {/* <Spacer />
            <StyledLink to='/'>Home</StyledLink>
            <Spacer />
            <StyledLink to='/about'>About</StyledLink>
            <Spacer />
            <StyledLink to='/users'>Users</StyledLink>
            <Spacer /> */}
        </NavContainer>
    );
};

const Spacer: React.FC = () => {
    return <SpacerContainer>•</SpacerContainer>;
};

const NavContainer = styled.nav`
    background-color: ${colors.dark};
    display: flex;
    height: 65px;
    justify-content: center;
    align-items: center;
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
