import React from 'react';
import styles from './Home.module.css'

function BottomContent() {
    return (
        <div className={styles.bottom_content}>
            <p>
                The EuroLeague Finals Top Scorer is the individual award for the player that gained the
                highest points in the EuroLeague Finals.
            </p>
            <button className={styles.home_btn}>Continue reading</button>
        </div>
    );
}

export default BottomContent;