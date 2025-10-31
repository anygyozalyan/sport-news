import React from 'react';
import styles from './Home.module.css'
import homeBg from '../../assets/images/home-bg.png';
import homeFront from '../../assets/images/home-front.png';

function LeftSide() {
    return (
        <div className={styles.left_side}>
            <div className={styles.left_layer_wrapper}>
                <img src={homeBg} alt="background" className={styles.home_bg} />
                <h1 className={styles.home_title}>Top scorer to the final match</h1>
                <img src={homeFront} alt="player" className={styles.home_front} />
            </div>
        </div>
    );
}

export default LeftSide;