import React, { useState } from 'react'
import styles from './RecentNews.module.css'
import NewsSlide from './NewsSlide'
import SliderNavigation from './SliderNavigation'
import players from '../../assets/images/players.png'

const newsSlides = [
    {
        id: 1,
        category: "Football",
        date: "Agence France-Presse - 04 June 2023",
        title: "LIONEL MESSI LEAVING LIGUE 1 TEAM\nPARIS SAINT-GERMAIN, CLUB CONFIRMS",
        description: "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals.",
        image: players
    },
    {
        id: 2,
        category: "Basketball",
        date: "Agence France-Presse - 03 June 2023",
        title: "LEBRON JAMES BREAKS NEW RECORD IN NBA FINALS",
        description: "The legendary player continues to make history in the basketball world.",
        image: players
    },
    {
        id: 3,
        category: "Tennis",
        date: "Agence France-Presse - 02 June 2023",
        title: "DJOKOVIC WINS GRAND SLAM TITLE",
        description: "Serbian tennis star claims another major championship victory.",
        image: players
    },
    {
        id: 4,
        category: "Formula 1",
        date: "Agence France-Presse - 01 June 2023",
        title: "VERSTAPPEN DOMINATES MONACO GRAND PRIX",
        description: "Red Bull driver continues his winning streak in the championship.",
        image: players
    }
]

function RecentNews() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % newsSlides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + newsSlides.length) % newsSlides.length)
    const goToSlide = (index) => setCurrentSlide(index)

    return (
        <section className={styles.recentNews_section}>
            <NewsSlide news={newsSlides[currentSlide]} />
            <SliderNavigation
                currentSlide={currentSlide}
                newsLength={newsSlides.length}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
                goToSlide={goToSlide}
            />
        </section>
    )
}

export default RecentNews