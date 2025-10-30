import React from 'react'
import styles from './RecentNews.module.css'

function SliderNavigation({ currentSlide, newsLength, prevSlide, nextSlide, goToSlide }) {
    return (
        <div className={styles.sliderNavigation}>
            <button
                className={styles.navButton}
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className={styles.sliderNumbers}>
                {Array.from({ length: newsLength }).map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.numberDot} ${index === currentSlide ? styles.activeNumber : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <button
                className={styles.navButton}
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default SliderNavigation