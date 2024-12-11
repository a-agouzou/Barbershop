import React from 'react';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import ContactUs from './pages/ContactUsPage';
import Header from './components/Header';
import NotFound from './pages/NotFoundPage';
import { Toaster } from 'react-hot-toast';
import AppointmentList from './pages/AppointmentsPage';

const Layout = () => {
  return (
    <>
      <Header />
      <Toaster
        position="top-center"
        reverseOrder={false}
        // add margin top to toaster
        containerStyle={{
          marginTop: 70
        }}
      />
      <Outlet />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/appointments' element={<AppointmentList />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>

    </Router>
  )
}