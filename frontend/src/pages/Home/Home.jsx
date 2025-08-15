import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Home.css';
import consulting from '../../assets/images/man-consultation.jpg';
import planning from '../../assets/images/planning.jpeg';
import implementation from '../../assets/images/implementation.jpeg';
import finalization from '../../assets/images/highrise-building.jpeg';
import delivery from '../../assets/images/Delivery.jpeg';
import residential from '../../assets/images/Residential.jpeg';
import commercial from '../../assets/images/commercial.jpg';
import interior from '../../assets/images/interior.jpg';
import maintaince from '../../assets/images/maintaince.jpeg';
import Phone from "../../assets/images/phone.png"
import Email from "../../assets/images/mail.png"

const Home = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    state: '',
    projectDetails: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Side - Header and Button */}
        <div>
          <div className="header-content">

            <h1>Build Your Dream Home with <span className="highlight">Shree Swami Samarth Developers</span></h1>
            <p>Building Homes Simplified</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h3>Why Choose Us?</h3>
        <p>We offer expert consultation to help you plan your projects with confidence. Our experienced consultants are here to provide valuable insights and accurate estimates to ensure the success of your project.</p>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <h4>Consultation Expertise</h4>
          <p>Our team has years of experience in various industries to provide expert advice.</p>
        </div>
        <div className="card">
          <h4>Affordable Rates</h4>
          <p>We offer competitive pricing for high-quality consultation services.</p>
        </div>
        <div className="card">
          <h4>Trusted Partners</h4>
          <p>We work with trusted partners to deliver the best solutions for your needs.</p>
        </div>
        <div className="card">
          <h4>Custom Solutions</h4>
          <p>We tailor our consultation services to fit your specific project requirements.</p>
        </div>
        <div className="card">
          <h4>Client Satisfaction</h4>
          <p>Our goal is to exceed client expectations and deliver outstanding results.</p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section">
        <h2>How It Works</h2>

        {/* Steps Container */}
        <div className="steps-container">
          {/* Step 1 */}
          <div className="step">
            <div className="step-image">
              <img src={consulting} alt="Step 1" />
            </div>
            <div className="step-info">
              <h3>Step 1: Initial Consultation</h3>
              <p>Our team will discuss your project details and requirements.</p>
            </div>
            <div className="step-divider"></div>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-info">
              <h3>Step 2: Project Planning</h3>
              <p>We create a detailed project plan based on your needs and budget.</p>
            </div>
            <div className="step-image">
              <img src={planning} alt="Step 2" />
            </div>
            <div className="step-divider"></div>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="step-image">
              <img src={implementation} alt="Step 3" />
            </div>
            <div className="step-info">
              <h3>Step 3: Implementation</h3>
              <p>We start implementing the project and keep you updated throughout.</p>
            </div>
            <div className="step-divider"></div>
          </div>

          {/* Step 4 */}
          <div className="step">
            <div className="step-info">
              <h3>Step 4: Finalization</h3>
              <p>We finalize the project and ensure everything meets your expectations.</p>
            </div>
            <div className="step-image">
              <img src={finalization} alt="Step 4" />
            </div>
            <div className="step-divider"></div>
          </div>

          {/* Step 5 */}
          <div className="step">
            <div className="step-image">
              <img src={delivery} alt="Step 5" />
            </div>
            <div className="step-info">
              <h3>Step 5: Delivery</h3>
              <p>The final product is delivered to you, ready for use.</p>
            </div>
          </div>
          <div className="services-section">
            <h3>Services We Offer</h3>
            <div className="cards-section">
              {/* Residential Card */}
              <div className="service-card">
                <img
                  src={residential} // Replace with actual Residential image URL
                  alt="Residential"
                  className="card-img"
                />
                <h4>Residential</h4>
                <p>We offer specialized services for residential projects.</p>
                <Link to="/residential">
                  <button className="service-button">Learn More</button>
                </Link>
              </div>

              {/* Commercial Card */}
              <div className="service-card">
                <img
                  src={commercial} // Replace with actual Commercial image URL
                  alt="Commercial"
                  className="card-img"
                />
                <h4>Commercial</h4>
                <p>We provide top-quality services for commercial developments.</p>
                <Link to="/commercial">
                  <button className="service-button">Learn More</button>
                </Link>
              </div>

              {/* Interior Card */}
              <div className="service-card">
                <img
                  src={interior}
                  alt="Interior"
                  className="card-img"
                />
                <h4>Interior</h4>
                <p>We provide top-quality services for Interior developments.</p>
                <Link to="/commercial">
                  <button className="service-button">Learn More</button>
                </Link>
              </div>

              {/* Maintainace Card */}
              <div className="service-card">
                <img
                  src={maintaince} // Replace with actual Commercial image URL
                  alt="Commercial"
                  className="card-img"
                />
                <h4>Maintainace</h4>
                <p>We provide top-quality services for Maintaince developments.</p>
                <Link to="/commercial">
                  <button className="service-button">Learn More</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="card" id='card01'>
            <div className="centered1">
              <h1
                style={{
                  color: "lightyellow",
                  textAlign: "center",
                  fontSize: 50,
                }}
              >
                Contact Us
              </h1>
              <h1 style={{ textAlign: "center" }}>
                Contact <span style={{ color: "yellow" }}>Us</span>
              </h1>
              <h2 style={{ fontSize: 20, color: "grey" }}>
                Get in touch with us to start your project
              </h2>
              <p style={{ textAlign: "center", color: "grey" }}>
                <span style={{ paddingRight: 20, fontSize: 20 }}>
                  <img src={Phone} alt="" /> 7219454419
                </span>
                <span style={{ fontSize: 20 }}>|</span>
                <span style={{ paddingLeft: 20, fontSize: 20 }}>
                  <img src={Email} alt="" /> handesantosh05@gmail.com
                </span>
              </p>
              <p style={{ textAlign: "center", color: "grey" }}>
                <img src={Location} alt="" />
                    Baner Road, Valkan Society,
                  Rakshak Society, Pimple Nilakh,
                  Pune, Pimpri-Chinchwad,
                  Maharashtra 411027
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
