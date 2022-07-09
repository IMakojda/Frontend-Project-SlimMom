import React, { useRef, useContext } from "react";
import useOnClickOutside from '../onClickOutside';
import { MenuContext } from '../NavState';
import BurgerButton from "../BurgerButton";
import { SideMenu } from '../SideMenu';

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