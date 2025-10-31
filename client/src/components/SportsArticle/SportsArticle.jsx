import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from './SportsArticle.module.css';
import ArticleSlide from './ArticleSlide';

import firstArticle from '../../assets/images/article-1.png';
import secondArticle from '../../assets/images/article-2.png';
import thirdArticle from '../../assets/images/article-3.png';
import fourthArticle from '../../assets/images/article-4.png';
import firstAvatar from '../../assets/images/avatar-1.png';
import secondAvatar from '../../assets/images/avatar-2.png';
import thirdAvatar from '../../assets/images/avatar-3.png';

function SportsArticle() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const allArticles = [
        { image: firstArticle, category: "Basketball", avatar: firstAvatar, name: "Jake Will.", date: "04 June 2023", title: "5 Exercises Basketball Players Should Be Using To Develop Strength", subtitle: "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn't all about a massive body mass or ripped muscles." },
        { image: secondArticle, category: "Hockey", avatar: secondAvatar, name: "Foxi.zacon", date: "03 June 2023", title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year", subtitle: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday." },
        { image: thirdArticle, category: "Badminton", avatar: thirdAvatar, name: "Bong Lozada", date: "01 June 2023", title: "'Outdoor' Badminton Gets Support From Local Federation", subtitle: "The Badminton World Federation is developing Air Badminton and the country's governing body, Philippine Badminton Association." },
        { image: fourthArticle, category: "Tennis", avatar: firstAvatar, name: "Maria Sharapova", date: "05 June 2023", title: "New Tennis Training Techniques for 2023", subtitle: "Discover the latest training methods that professional tennis players are using this season." },
        { image: secondArticle, category: "Football", avatar: secondAvatar, name: "Lionel Messi", date: "06 June 2023", title: "The Evolution of Football Tactics", subtitle: "How modern football has changed in the last decade and what to expect next." },
        { image: thirdArticle, category: "Swimming", avatar: thirdAvatar, name: "Michael Phelps", date: "07 June 2023", title: "Swimming Records Broken in 2023", subtitle: "A look at the amazing new world records set in competitive swimming this year." }
    ];

    const slidesToShow = 3;
    const totalSlides = Math.ceil(allArticles.length / slidesToShow);

    const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

    const getCurrentSlides = () => {
        const slides = [];
        for (let i = 0; i < totalSlides; i++) {
            slides.push(allArticles.slice(i * slidesToShow, i * slidesToShow + slidesToShow));
        }
        return slides;
    };

    const slides = getCurrentSlides();

    return (
        <section id='sports-article' className={styles.sportsArticle_section}>
            <p className={styles.sportsArticle_title}>Sports Article</p>

            <div className={styles.article_container}>
                <div className={styles.articles_slider}>
                    <div
                        className={styles.articles_wrapper}
                        style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease' }}
                    >
                        {slides.map((articles, index) => (
                            <ArticleSlide key={index} articles={articles} />
                        ))}
                    </div>
                </div>

                <div className={styles.navigation}>
                    <button className={`${styles.nav_button} ${currentSlide === 0 ? styles.disabled : ''}`} onClick={prevSlide} disabled={currentSlide === 0}>
                        <BsArrowLeft />
                    </button>
                    <button className={`${styles.nav_button} ${currentSlide === totalSlides - 1 ? styles.disabled : ''}`} onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SportsArticle;