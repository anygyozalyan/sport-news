import React from 'react'
import styles from './RecentNews.module.css'
import playersMobile from '../../assets/images/players_mobile.png'

function NewsSlide({ news }) {
    return (
        <div className={styles.recentNews_image_block}>
            <picture>
                <source srcSet={playersMobile} media="(max-width: 768px)" />
                <img
                    src={news.image}
                    alt={news.category}
                    className={styles.slideImage}
                />
            </picture>

            <p className={styles.recentNews_title}>{news.category}</p>

            <div className={styles.recentNews_content}>
                <p className={styles.date}>{news.date}</p>
                <p className={styles.text}>
                    {news.title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < news.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
                <p className={styles.subtext}>{news.description}</p>
            </div>
        </div>
    )
}

export default NewsSlide