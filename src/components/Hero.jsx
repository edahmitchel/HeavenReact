import React from 'react'

const Hero = () => {
  return (
    <section id="hero" class="d-flex flex-column justify-content-end align-items-center">
        <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">

          {/* <!-- Slide 1 --> */}
          <div class="carousel-item active">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">Welcome to our mission: Building a World Without Child Abuse
                and Neglect</h2>
              <p class="animate__animated fanimate__adeInUp">At SafeHaven, we believe that every child deserves to
                grow up in a safe and nurturing environment, free from harm and fear. Our mission is to work tirelessly
                towards this vision, advocating for the rights and protection of children everywhere. </p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Donate to our cause?</a>
            </div>
          </div>

          {/* <!-- Slide 2 --> */}
          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">Together, We Can Make a Difference</h2>
              <p class="animate__animated animate__fadeInUp">At SafeHaven, we recognize that addressing the
                complex issue of child abuse and neglect requires a collective effort.It's not just about what one person or
                organization can do, but what we can achieve together as a community. By joining forces, sharing resources,
                and supporting one another, we can make a meaningful impact in the lives of vulnerable children and
                families. Together, we have the power to create positive change and build a brighter future for generations
                to come </p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Donate to our cause?</a>
            </div>
          </div>

          {/* <!-- Slide 3 --> */}
          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">Join Us in Creating a Safe and Nurturing Environment for
                Every Child</h2>
              <p class="animate__animated animate__fadeInUp">At SafeHaven, we invite you to be a part of our
                mission to create a safe and nurturing environment for every child. Whether you're a parent, a caregiver, an
                advocate, or simply someone who cares deeply about the well-being of children, there's a role for you to
                play in our efforts. Together, we can work towards building communities where children feel loved, valued,
                and protected, ensuring that they have the opportunity to thrive and succeed in life.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Donate to our cause?</a>
            </div>
          </div>

          <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
          </a>

          <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
          </a>

        </div>

        <svg className="hero-waves" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave1">
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
          </g>
          <g className="wave2">
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>


      </section>
  )
}

export default Hero