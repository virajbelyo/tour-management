import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import ThankYou from './../pages/ThankYou';

const Routers = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tours/search" element={<SearchResultList />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default Routers
