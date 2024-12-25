import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'));
const News = lazy(() => import('./pages/News'));
const AddNews = lazy(() => import('./pages/AddNews'));
const Navbar = lazy(() => import('./components/Navbar'));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-news" element={<AddNews />} />
          <Route path="/:id" element={<News />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
