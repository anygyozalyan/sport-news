import { BsArrowRight } from "react-icons/bs";
import NewsItem from './NewsItem';
import styles from './ClubsRanking.module.css';
import karate from '../../assets/images/karate.png';

function RecentNews({ news }) {
    return (
        <div className={styles.recent_news}>
            <h2 className={styles.section_title}>Recent News</h2>
            <div className={styles.news_container}>
                <div className={styles.image_block}>
                    <div className={styles.image_wrapper}>
                        <img src={karate} alt="Taekwondo Championships" />
                        <div className={styles.image_overlay}>
                            <p className={styles.highlight_text}>Day 5 Highlights</p>
                            <p className={styles.event_name}>Italy 2025 World Taekwondo Championships</p>
                        </div>
                    </div>
                </div>
                <div className={styles.news_list}>
                    {news.map((item, index) => (
                        <NewsItem key={index} item={item} />
                    ))}
                    <button className={styles.more_button}>More <BsArrowRight /></button>
                </div>
            </div>
        </div>
    );
}

export default RecentNews;