import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenu from './MobileMenu';

function Navbar() {
    const [activeLink, setActiveLink] = useState('Home');
    const [openMenu, setOpenMenu] = useState(false);

    const sectionIds = {
        "Home": "home",
        "Category": "category",
        "Tranding News": "tranding-news",
        "Recent News": "recent-news",
        "Clubs Ranking": "clubs-ranking",
        "Sports Article": "sports-article"
    };

    const links = Object.keys(sectionIds);

    const handleActiveLink = (link) => {
        setActiveLink(link);
        setOpenMenu(false);

        const sectionId = sectionIds[link];
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleMenuOpen = () => setOpenMenu(true);
    const handleMenuClose = () => setOpenMenu(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const visibleSectionId = entry.target.id;
                    const linkName = Object.keys(sectionIds).find(
                        (key) => sectionIds[key] === visibleSectionId
                    );
                    if (linkName) {
                        setActiveLink(linkName);
                    }
                }
            });
        }, observerOptions);

        const sections = Object.values(sectionIds).map((id) =>
            document.getElementById(id)
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_content}>
                <a href="#home">
                    <img src={logo} alt="logo" className={styles.logo} />
                </a>

                <ul className={styles.nav_list}>
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => handleActiveLink(link)}
                            className={`${styles.nav_button} ${activeLink === link ? styles.active : ''
                                }`}
                        >
                            {link}
                        </button>
                    ))}
                </ul>

                <RiMenu3Fill
                    className={styles.burger_menu}
                    onClick={handleMenuOpen}
                />

                {openMenu && (
                    <MobileMenu
                        links={links}
                        activeLink={activeLink}
                        onLinkClick={handleActiveLink}
                        menuClose={handleMenuClose}
                    />
                )}
            </div>
        </nav>
    );
}

export default Navbar;