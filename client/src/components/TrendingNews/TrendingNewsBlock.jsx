import React from 'react'
import styles from './TrendingNews.module.css'

function TrendingNewsBlock({ img, alt, date, title, subtitle }) {
    return (
        <div className={styles.news_block}>
            <img src={img} alt={alt} />
            <div className={styles.news_content}>
                <p className={styles.news_content_date}>{date}</p>
                <p className={styles.news_content_title}>{title}</p>
                <p className={styles.news_content_subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}

export default TrendingNewsBlock
