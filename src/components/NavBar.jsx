import React from 'react'
import "../App.css"


const NavBar = () => {
  return (
    <div>
          {/* <!-- ======= Header ======= --> */}
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
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}

    </div>
  )
}

export default NavBar