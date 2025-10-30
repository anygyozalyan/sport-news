import React from 'react'
import styles from './App.module.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Category from '../Category/Category'
import TrendingNews from '../TrendingNews/TrendingNews'
import RecentNews from '../RecentNews/RecentNews'
import ClubsRanking from '../ClubsRanking/ClubsRanking'
import SportsArticle from '../SportsArticle/SportsArticle'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className={styles.container}>
        <Category />
        <TrendingNews />
        <RecentNews />
        <ClubsRanking />
        <SportsArticle />
      </div>
    </>

  )
}

export default App
