import React, { useState } from 'react'
import ImgOne from "../assets/2.webp"
import ImgTwo from "../assets/1.webp"
import ImgThree from "../assets/3.webp"
import ImgFour from "../assets/4.webp"
import { RiGpsLine } from "react-icons/ri";
import { MdDocumentScanner, MdOutlineGpsFixed, MdOutlineStoreMallDirectory, MdOutlineWbSunny } from 'react-icons/md'
import { TbBodyScan } from "react-icons/tb";





const Services = () => {

    const [tabOne, setTabOne] = useState(true)
    const [tabTwo, setTabTwo] = useState(false)
    const [tabThree, setTabThree] = useState(false)
    const [tabFour, setTabFour] = useState(false)

    const handleTabOne = () => {
        setTabOne(true)
        setTabTwo(false)
        setTabThree(false)
        setTabFour(false)
    }
    const handleTabTwo = () => {
        setTabOne(false)
        setTabTwo(true)
        setTabThree(false)
        setTabFour(false)
    }
    const handleTabThree = () => {
        setTabOne(false)
        setTabTwo(false)
        setTabThree(true)
        setTabFour(false)
    }
    const handleTabFour = () => {
        setTabOne(false)
        setTabTwo(false)
        setTabThree(false)
        setTabFour(true)
    }
    return (
        <div>
            <section id="services" class="features">
                <div class="container">

                    <ul class="nav nav-tabs row d-flex">
                        <li class="nav-item  col-3" onClick={handleTabOne} data-aos="zoom-in">
                            <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                                {/* <i class="ri-gps-line"></i> */}
                                <MdOutlineGpsFixed className='services_icons' />
                                <h4 class="d-none d-lg-block">A World Where Every Child Feels Safe and Loved:</h4>
                            </a>
                        </li>
                        <li class="nav-item  col-3" onClick={handleTabTwo} data-aos="zoom-in" data-aos-delay="100">
                            <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                                {/* <i class="ri-body-scan-line"></i> */}
                                <MdDocumentScanner className='services_icons' />
                                <h4 class="d-none d-lg-block">Empowering Children to Thrive:</h4>
                            </a>
                        </li>
                        <li class="nav-item  col-3" onClick={handleTabThree} data-aos="zoom-in" data-aos-delay="200">
                            <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                                {/* <i class="ri-sun-line"></i> */}
                                <MdOutlineWbSunny className='services_icons' />
                                <h4 class="d-none d-lg-block">Creating a Culture of Prevention and Intervention:</h4>
                            </a>
                        </li>
                        <li class="nav-item  col-3" onClick={handleTabFour} data-aos="zoom-in" data-aos-delay="300">
                            <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                                {/* <i class="ri-store-line"></i> */}
                                <MdOutlineStoreMallDirectory className='services_icons' />
                                <h4 class="d-none d-lg-block">Building Stronger Families and Communities</h4>
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content" data-aos="fade-up">
                        {tabOne && (
                            <div class="tab-pane active show" id="tab-1">
                                <div class="row">
                                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Addressing the Root Causes</h3>
                                        <p class="fst-italic">
                                            Child abuse and neglect can have devastating consequences for individuals and communities alike. At
                                            SafeHaven, we recognize the importance of addressing not only the symptoms but also the
                                            underlying root causes of these issues. Through our programs and initiatives, we take a holistic
                                            approach to tackling the complex factors that contribute to child abuse and neglect. Here are some of
                                            the key areas we focus on
                                        </p>
                                        <ul>
                                            <li><i class="ri-check-double-line"></i><b>Poverty:</b> Economic instability can create stress and
                                                strain
                                                within families, increasing the risk of child maltreatment. We work to address poverty by providing
                                                financial assistance, access to employment opportunities, and resources for basic needs such as
                                                food, housing, and healthcare.</li>

                                            <li><i class="ri-check-double-line"></i> <b>Substance Abuse:</b> Substance abuse can impair judgment
                                                and
                                                decision-making, leading to neglectful or abusive behavior towards children. Our programs offer
                                                support and rehabilitation services for individuals struggling with addiction, as well as
                                                educational initiatives to raise awareness about the impact of substance abuse on families.
                                            </li>
                                            <li><i class="ri-check-double-line"></i><b>Mental Health Challenges:</b> Untreated mental health
                                                issues, such
                                                as depression, anxiety, and trauma, can contribute to dysfunctional family dynamics and increase the
                                                likelihood of child abuse and neglect. We provide mental health counseling, therapy, and support
                                                groups to help individuals and families heal and build resilience.</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={ImgOne} alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {tabTwo && (
                            <div class="" id="tab-2">
                                <div class="row">
                                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Our vision for SafeHaven includes empowering children to overcome adversity and thrive in all
                                            aspects of their lives. </h3>
                                        <p>
                                            SafeHaven offers a range of empowerment programs designed to build confidence, resilience, and
                                            self-esteem in children. From mentoring and tutoring to recreational activities and life skills
                                            workshops, we provide opportunities for children to discover their strengths, explore their passions,
                                            and pursue their dreams. By investing in the future of our children, we are building a stronger, more
                                            vibrant community where every child has the opportunity to thrive.
                                        </p>

                                    </div>
                                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={ImgTwo} alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {tabThree && (
                            <div class="" id="tab-3">
                                <div class="row">
                                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>At SafeHaven, we envision a future where child abuse and neglect are not only addressed but
                                            prevented altogether. </h3>
                                        <p>
                                            SafeHaven is committed to providing comprehensive training and education programs to parents,
                                            caregivers, educators, and community members on how to identify and report child abuse and neglect. We
                                            work closely with law enforcement, child welfare agencies, and other organizations to strengthen the
                                            systems and services that protect children and support families in crisis. Through our collective
                                            efforts, we aim to create a society where every child grows up in a safe and nurturing environment,
                                            free from the threat of abuse and neglect.
                                        </p>
                                    </div>
                                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={ImgThree} alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {tabFour && (
                            <div class="" id="tab-4">
                                <div class="row">
                                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <h3>Our vision for SafeHaven extends beyond the individual child to encompass the entire family and
                                            community. We recognize that children thrive in environments where families are supported, communities
                                            are engaged, and resources are accessible..</h3>
                                        <p>
                                            SafeHaven offers a range of programs and services designed to strengthen families and promote
                                            community cohesion. From parent education and support groups to community events and neighborhood
                                            initiatives, we provide opportunities for families to connect, learn, and grow together. By fostering
                                            strong relationships and building a sense of belonging, we are creating a supportive network of
                                            families and communities dedicated to the well-being of every child.
                                        </p>
                                    </div>
                                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src={ImgFour} alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services