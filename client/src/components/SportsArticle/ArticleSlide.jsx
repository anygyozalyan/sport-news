import React from 'react';
import Article from './Article';
import styles from './SportsArticle.module.css';

function ArticleSlide({ articles }) {
    return (
        <div className={styles.slide}>
            {articles.map((article, index) => (
                <Article key={index} {...article} />
            ))}
        </div>
    );
}

export default ArticleSlide;