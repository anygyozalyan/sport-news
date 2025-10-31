import React from 'react';
import styles from './Home.module.css'

function NewsCard({ imgSrc, date, text }) {
    return (
        <div className={styles.news_card}>
            <img src={imgSrc} alt="news" />
            <div className={styles.news_info}>
                <p className={styles.news_date}>{date}</p>
                <p className={styles.news_text}>{text}</p>
            </div>
        </div>
    );
}

export default NewsCard;