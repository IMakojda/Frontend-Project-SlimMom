import React, { useContext } from 'react';
import { MenuButton } from './BurgerButton.styled';
import { MenuContext } from '../NavState/NavState';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const BurgerButton = () => {
  const { isMenuOpen,toggleMenuMode } = useContext(MenuContext);
  const clickHandler = () => {
      toggleMenuMode();
  };
  return (
    <MenuButton
      className={isMenuOpen ? "active" : ""}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      {isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
    </MenuButton>
  );
};

export default BurgerButton;
