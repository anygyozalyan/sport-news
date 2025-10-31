import React from 'react'
import styles from './TrendingNews.module.css'
import sportsmanBanner from '../../assets/images/sportsman-banner.png'

import { trendingNews } from '../../data/trendingNews'
import TrendingNewsBlock from './TrendingNewsBlock'

function TrendingNews() {
    return (
        <section id='tranding-news' className={styles.trendingNews_section}>

            <div className={styles.news_left_block}>
                <p className={styles.left_block_title}>Trending News</p>

                <div className={styles.news}>
                    {trendingNews.map((news, index) => (
                        <TrendingNewsBlock key={index} {...news} />
                    ))}
                </div>
            </div>

            <div className={styles.news_right_block}>
                <h2 className={styles.cycling_title}>Cycling</h2>
                <img src={sportsmanBanner} alt="Cycling sportsman" />
                <div className={styles.right_block_content}>
                    <p className={styles.right_block_date}>Debris - 03 June 2023</p>
                    <p className={styles.right_block_text}>DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</p>
                </div>
            </div>

        </section>
    )
}

export default TrendingNews