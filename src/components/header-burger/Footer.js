import React from "react";
import MainMenu from './MainMenu';
import { NavState } from './NavState';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_footer}>
                    <div className={styles.boxTablet}>
                        <NavState>
                            <MainMenu />
                        </NavState>
                        <div className={styles.burgerMenu}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;