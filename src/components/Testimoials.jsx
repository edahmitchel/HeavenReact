import React, { useEffect } from 'react'
// import Swiper from 'swiper';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import testimonialOne from "../assets/testimonials/testimonials-1.jpg";
import testimonialTwo from "../assets/testimonials/testimonials-2.jpg";
import testimonialThree from "../assets/testimonials/testimonials-3.jpg";
import testimonialFour from "../assets/testimonials/testimonials-4.jpg";
import testimonialFive from "../assets/testimonials/testimonials-5.jpg";

const Testimoials = () => {

    useEffect(() => {
        const testimonialsSwiper = new Swiper('.testimonials-slider', {
            // Optional parameters
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },

                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });

        return () => {
            testimonialsSwiper.destroy(); // Cleanup Swiper instance when component unmounts
        };
    }, []); // Empty dependency array to run effect only once after component mount

    return (
        <section id="testimonials" class="testimonials">
            <div class="container">

                <div class="section-title" data-aos="zoom-out">
                    <h2>Testimonials</h2>
                    <p>What they are saying about us</p>
                </div>

                <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                    I'm incredibly grateful for the support and resources provided by [Organization Name]. They not only
                                    helped me navigate through a difficult time but also empowered me to create a safe and loving
                                    environment for my children.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonialOne} class="testimonial-img" alt="" />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                    As a volunteer with [Organization Name], I've witnessed firsthand the dedication and compassion of the
                                    team. Their commitment to protecting children and advocating for their rights is truly inspiring
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonialTwo} class="testimonial-img" alt="" />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                    I cannot thank [Organization Name] enough for the impact they've had on my family. Their programs have
                                    not only helped us heal from past trauma but have also given us hope for a brighter future.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonialThree} class="testimonial-img" alt="" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                    I've been a donor to [Organization Name] for several years now, and I continue to be impressed by
                                    their dedication to their mission. Every dollar I contribute feels like an investment in the
                                    well-being of children and families.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonialFour} class="testimonial-img" alt="" />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                    I've had the privilege of working closely with the team at [Organization Name], and I can say without
                                    a doubt that they are truly making an impact. Their passion for protecting children is evident in
                                    everything they do.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src={testimonialFive} class="testimonial-img" alt="" />
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                    </div>
                    <div class="swiper-pagination"></div>
                </div>

            </div>
        </section>
    )
}

export default Testimoials