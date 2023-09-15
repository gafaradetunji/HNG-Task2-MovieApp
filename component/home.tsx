"use client"
import React, { useEffect, useState } from 'react'
import Header from './header'
import MainMovie from './main-movie'
import FeaturedMovie from './feature'
import Footer from './footer'
import axios from 'axios'

const HeroSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=f8b3db37188308f327a90699247441c5`
        );
        const moviesRes = res.data;
        const top10Movies = moviesRes.results.slice(0, 10);
        setMovies(top10Movies);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [])

  return (
    <div className='h-screen'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat lg:h-[37.5rem] py-4'>
            <Header />
            <MainMovie />
        </div>
        <div>
        <FeaturedMovie movies={movies} />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default HeroSection
