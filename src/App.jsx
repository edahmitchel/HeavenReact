import { useState, useEffect } from 'react';
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import About from './components/About';
import Who_we_Are from './components/Services';
import Services from './components/Services';
import Cta from './components/Cta';
import Hero from './components/Hero';
import Testimoials from './components/Testimoials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const location = useLocation(); // This will require that your app is wrapped with <BrowserRouter>

  useEffect(() => {
    // Function to check payment status from URL query parameters
    const checkPaymentStatus = () => {
      const query = new URLSearchParams(location.search);
      const status = query.get('status');

      if (status === 'success') {
        toast.success('Payment Successful!');
      } else if (status === 'cancel') {
        toast.error('Payment Cancelled by User.');
      }
    };

    checkPaymentStatus();
  }, [location]);

  return (
    <>

      {/* <!-- ======= Header ======= --> */}
      <NavBar />
      {/* <!-- End Header --> */}


      {/* <!-- ======= Hero Section ======= --> */}
      <Hero />
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <About />
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Features Section ======= --> */}
        <Services />
        {/* <!-- End Features Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <Cta />
        {/* <!-- End Cta Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <Testimoials />
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <Contact />
        {/* <!-- End Contact Section --> */}


        <Footer />
        <Toaster />
      </main>
    </>
  )
}

export default App
