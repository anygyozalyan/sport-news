import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from './MobileMenu';

function Navbar() {
    const [activeLink, setActiveLink] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)

    const handleActiveLink = (link) => {
        setActiveLink(link)
        setOpenMenu(false);
    }
    const handleMenuOpen = () => setOpenMenu(true)
    const handleMenuClose = () => setOpenMenu(false)


    const links = [
        "Home",
        "Category",
        "Tranding News",
        "Recent News",
        "Clubs Ranking",
        "Sports Article"
    ]

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_content}>
                <a href="#home"><img src={logo} alt="logo" className={styles.logo} /></a>

                <ul className={styles.nav_list}>
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => handleActiveLink(link)}
                            className={`${styles.nav_button} ${activeLink === link ? styles.active : ''}`}>{link}</button>
                    ))}
                </ul>

                <RiMenu3Fill
                    className={styles.burger_menu}
                    onClick={handleMenuOpen}
                />

                {openMenu && (<MobileMenu links={links} activeLink={activeLink} onLinkClick={handleActiveLink} menuClose={handleMenuClose} />)}
            </div>


        </nav >
    )
}

export default Navbar
