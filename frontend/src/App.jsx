import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import ProtectedRoute from './components/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const SignUp = lazy(() => import('./pages//SignUp'));
const Login = lazy(() => import('./pages/Login'));
const News = lazy(() => import('./pages/News'));
const AddNews = lazy(() => import('./pages/AddNews'));



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/add-news" element={<ProtectedRoute><AddNews /></ProtectedRoute>} />
          <Route path="/:id" element={<ProtectedRoute><News /></ProtectedRoute>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
