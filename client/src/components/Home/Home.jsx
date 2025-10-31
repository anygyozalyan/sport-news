import React from 'react';
import styles from './Home.module.css';
import LeftSide from './LeftSide';
import TodayNews from './TodayNews';
import BottomContent from './BottomContent';

function Home() {
    return (
        <section id="home" className={styles.home_section}>
            <div className={styles.home_container}>
                <LeftSide />
                <TodayNews />
            </div>
            <BottomContent />
        </section>
    );
}

export default Home;