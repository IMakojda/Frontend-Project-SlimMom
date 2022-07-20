import React, { useContext } from "react";
import { Menu } from './SideMenu.styled';
import { MenuContext } from "../NavState/NavState";
import styles from '../Footer.module.css';
import { NavLink } from "react-router-dom";

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
                    activeclassname={styles.mobileLinkActive}
                    to="/diary"
                    onClick={clickHandler}
                >
                    Щоденник
                </NavLink>
                <NavLink
                    className={styles.linkCalc}
                    activeclassname={styles.mobileLinkActive}
                    to="/calculator"
                    onClick={clickHandler}
                >
                    Калькулятор
                </NavLink>
            </>
        </Menu>
    );
};

