import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Category from '../Category/Category';
import TrendingNews from '../TrendingNews/TrendingNews';
import RecentNews from '../RecentNews/RecentNews';
import ClubsRanking from '../ClubsRanking/ClubsRanking';
import SportsArticle from '../SportsArticle/SportsArticle';
import Footer from '../Footer/Footer';
import Loading from '../../components/Loading/Loading';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Home id="home" />
      <div className={styles.container}>
        <Category id="category" />
        <TrendingNews id="trending-news" />
        <RecentNews id="recent-news" />
        <ClubsRanking id="clubs-ranking" />
        <SportsArticle id="sports-article" />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
