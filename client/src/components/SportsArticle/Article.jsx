import React from 'react';
import styles from './SportsArticle.module.css';

function Article({ image, category, avatar, name, date, title, subtitle }) {
    return (
        <div className={styles.article}>
            <img src={image} alt={category} className={styles.article_image} />
            <p className={styles.article_category}>{category}</p>
            <div className={styles.article_reviewer_block}>
                <img src={avatar} alt={name} className={styles.avatar} />
                <p className={styles.article_name}>{name}</p>
            </div>
            <p className={styles.article_date}>{date}</p>
            <h3 className={styles.article_title}>{title}</h3>
            <p className={styles.article_subtitle}>{subtitle}</p>
        </div>
    );
}

export default Article;