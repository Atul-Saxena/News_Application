import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/news/${id}`).then((response) => {
      setNews(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={news.img}
            alt="Global Markets"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{news.headline}</h2>
            <p className="text-gray-600 mb-4">{news.description}</p>
            <Link
              to={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Click here for details
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default News