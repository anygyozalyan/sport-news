import React from 'react';
import styles from './Home.module.css'
import NewsCard from './NewsCard';
import homeNews from '../../assets/images/home-news.png';
import homeSecondNews from '../../assets/images/home-news2.png';

function TodayNews() {
    return (
        <div className={styles.today_news}>
            <p className={styles.news_header}>Today</p>
            <NewsCard
                imgSrc={homeNews}
                date="Race98 – 03 June 2023"
                text="Ethiopian runners took the top four spots."
            />
            <NewsCard
                imgSrc={homeSecondNews}
                date="INDYCAR – 03 June 2023"
                text="IndyCar Detroit: Dixon quickest in second practice."
            />
        </div>
    );
}

export default TodayNews;