import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import axios from 'axios';

const Home = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
    console.log(news);
    
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
      {news.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  )
}

export default Home