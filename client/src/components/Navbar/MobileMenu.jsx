import React, { useRef, useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { IoClose } from "react-icons/io5";

function MobileMenu({ links, activeLink, onLinkClick, menuClose }) {
    const menuRef = useRef(null)
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            menuClose()
        }, 300)
    }

    const handleLinkClick = (link) => {
        onLinkClick(link)
        handleClose()
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                handleClose()
            }
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                handleClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)


        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [menuClose])

    return (
        <>
            <div
                className={`${styles.mobile_menu_overlay} ${isClosing ? styles.closing : ''}`}
                onClick={handleClose}
            />
            <div
                ref={menuRef}
                className={`${styles.mobile_menu} ${isClosing ? styles.closing : ''}`}
            >
                <div className={styles.mobile_menu_header}>
                    <span className={styles.mobile_menu_title}>Menu</span>
                    <IoClose
                        className={styles.close_icon}
                        onClick={handleClose}
                    />
                </div>

                <ul className={styles.mobile_menu_list}>
                    {links.map((link) => (
                        <li key={link}>
                            <button
                                onClick={() => handleLinkClick(link)}
                                className={`${styles.mobile_link} ${activeLink === link ? styles.active : ''}`}
                            >
                                {link}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MobileMenu