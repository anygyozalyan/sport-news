import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        visible && (
            <button className={styles.scrollToTop} onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        )
    );
}

export default ScrollToTop;