import { useState } from 'react'
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


function App() {

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


        <Footer/>
      </main>
    </>
  )
}

export default App
