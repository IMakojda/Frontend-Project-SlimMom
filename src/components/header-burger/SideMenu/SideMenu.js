import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { MenuContext } from "../NavState";
import styles from '../Footer.module.css';
import { NavLink } from "react-router-dom";

const Menu = styled.nav`
position: absolute;
top: 80px;
right: 0px;
bottom: 0px;
z-index: 293;
display: block;
width: 1280px;
max-width: 100%;
margin-top: 0px;
padding-right: 0px;
align-items: stretch;
background-color: #264061;
transform: translateX(-100%);
transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

${(props) =>
        props.open &&
        css`
    transform: translateX(0);
    `}
`;

export const SideMenu = ({ children }) => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };
    return (
        <Menu open={isMenuOpen}>
            {" "}
            <>
                <NavLink
                    className={styles.linkDiary}
                    activeClassName={styles.mobileLinkActive}
                    to="/diary"
                    onClick={clickHandler}
                >
                    Дневник
                </NavLink>
                <NavLink
                    className={styles.linkCalc}
                    activeClassName={styles.mobileLinkActive}
                    to="/calculator"
                    onClick={clickHandler}
                >
                    Калькулятор
                </NavLink>
            </>
        </Menu>
    );
};

