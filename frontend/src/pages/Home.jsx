import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import Navbar from '../components/Navbar';
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
  }, []);

  return (
    <>
    <Navbar />
      {news.length > 0 ? (
        <div key={news._id} className="grid gap-4 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {news.map((news) => (
            <NewsCard news={news} className="bg-gray-100" />
          ))}
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center bg-white px-4">
          <div className="text-center mb-9">
            <h1 className="uppercase tracking-widest text-gray-500 mb-5">No News Added</h1>
            <Link
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              to={'/add-news'}
            >
              Add News
            </Link>
          </div>
        </div>
      )}

    </>
  )
}

export default Home