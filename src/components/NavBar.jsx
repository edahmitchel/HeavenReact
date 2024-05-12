import React, { useState } from 'react'
import "../App.css"
import { MdMenu, MdOutlineClose } from 'react-icons/md'


const NavBar = () => {
  const [menu, setMenu] = useState(false);


  const handleToggle = () => {
    setMenu(!menu)
  }
  return (
    <>
      <header id="header" class="fixed-top d-flex align-items-center  header-transparent ">
        <div class="container d-flex align-items-center justify-content-between">

          <div class="logo">
            <h1><a href="index.html">SafeHaven</a></h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">Who we are</a></li>
              <li><a class="nav-link scrollto" href="#services">Causes</a></li>
              {/* <!-- <li><a class="nav-link scrollto " href="#portfolio">Stories</a></li> --> */}
              <li><a class="nav-link scrollto" href="#">Donate Now</a></li>
              {/* <!-- <li><a class="nav-link scrollto" href="#team">Team</a></li> --> */}
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
            <MdMenu className='mobile-nav-toggle' onClick={handleToggle} />
          </nav>
          {/* <!-- .navbar --> */}

        </div>
      </header>

      {menu && (
        <div className='menu_container'>
          <MdOutlineClose className='closeIcon' onClick={handleToggle} />
          <div className='mobile_nav_links_container'>
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">Who we are</a></li>
              <li><a class="nav-link scrollto" href="#services">Causes</a></li>
              {/* <!-- <li><a class="nav-link scrollto " href="#portfolio">Stories</a></li> --> */}
              <li><a class="nav-link scrollto" href="#">Donate Now</a></li>
              {/* <!-- <li><a class="nav-link scrollto" href="#team">Team</a></li> --> */}
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>

            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar