import React from 'react'
import { Routes, Route } from 'react-router-dom';
import BrandExample from './Navbar';
import Home from './Home';
import HowItWork from './HowItWork';
import Doctors from './Doctors';
import Appointment from './Appointment';
import AboutUs from './AboutUs';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import BackToTopButton from './BackToTopButton';
import Footer from './Footer';
import Appointments from './Appointments';

function Dashboard() {
  return (
    <>
      <BrandExample  />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/How' Component={HowItWork} />
        <Route exact path='/Doctors' Component={Doctors} />
        <Route exact path='/Doctors/Appointment' Component={Appointment} />
        <Route exact path='/About' Component={AboutUs} />
        <Route exact path='/Contact' Component={Contact} />
        <Route exact path='/Appointments' Component={Appointments} />
        <Route exact path='*' Component={PageNotFound} />
      </Routes>
      <BackToTopButton />
      <Footer />
    </>
  )
}

export default Dashboard