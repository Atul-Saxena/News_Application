import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const AddNews = () => {
  const [image, setImage] = useState("");
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/news', {
        headline,
        description,
        link,
        img: image,
      });
      alert('News added successfully');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center ">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add News</h1>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 w-full space-y-4 ">

          <div className="relative ">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="News headline"
              onChange={(e) => setHeadline(e.target.value)}
            />
          </div>

          <div>
            <div className="relative">
              <textarea
                type="text"
                className="w-full md:h-[200px] h-[100px] rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Link"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Image url"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
            >
              Add News
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddNews;