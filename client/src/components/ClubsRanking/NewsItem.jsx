import styles from './ClubsRanking.module.css';

function NewsItem({ item }) {
    return (
        <div className={styles.news_item}>
            <img src={item.img} alt={item.title} className={styles.news_image} />
            <div className={styles.news_content}>
                <p className={styles.news_tag}>{item.tag}</p>
                <p className={styles.news_title}>{item.title}</p>
            </div>

        </div>
    );
}

export default NewsItem;