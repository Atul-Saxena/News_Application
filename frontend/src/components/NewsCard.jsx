import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ news }) => {
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={news.img} alt={`Image of news: ${news.headline}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{news.headline}</h2>
        <p className="text-gray-700 text-sm">{news.description}</p>
      </div>
      <Link to={`/${news._id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block w-full text-center">Read More</Link>
    </div>
  )
}

export default NewsCard