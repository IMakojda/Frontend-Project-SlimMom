import React, { useRef, useContext } from "react";
import useOnClickOutside from '../onClickOutside/onClickOutside';
import { MenuContext } from '../NavState/NavState';
import BurgerButton from "../BurgerButton/BurgerButton";
import { SideMenu } from '../SideMenu/SideMenu';

const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <>
            <BurgerButton />
            <SideMenu />
        </>
    );
};

export default MainMenu;