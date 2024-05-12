import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import '../App.css'

const About = () => {
  return (
    <div>
           <section id="about" class="about">
          <div class="container">

            <div class="section-title" data-aos="zoom-out">
              <h2>Who we are</h2>
              <p>Our Mission and Values</p>
            </div>

            <div class="row content" data-aos="fade-up">
              <div class="col-lg-6">
                <p>
                  SafeHaven is a dedicated team of passionate individuals committed to safeguarding the well-being of
                  children.
                </p>
                <ul>
                  <li>
                  <IoCheckmarkDone className='double_tick' />
                   To raise awareness about the issues affecting children's safety
                    and well-being.</li>
                  <li>
                  <IoCheckmarkDone className='double_tick' />
                   To advocate for policy changes that promote the protection and
                    rights of children.</li>
                  <li>
                  <IoCheckmarkDone className='double_tick' />
                  To provide unwavering support to families in need, ensuring they
                    have the resources and assistance required to thrive.</li>
                </ul>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <p>
                  SafeHaven is a dedicated team of passionate individuals committed to safeguarding the well-being
                  of children. We work tirelessly to raise awareness, advocate for policy change, and provide support to
                  families in need. With compassion and determination, we stand united in our mission to create a brighter
                  future for every child.
                </p>
                <a href="#" class="btn-learn-more">Learn More</a>
              </div>
            </div>

          </div>
        </section>
    </div>
  )
}

export default About