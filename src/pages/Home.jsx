import React from "react";

function Home({logo}) {
  const products = [
    {
      icon: "bi-circle",
      title: "Rubber Gaskets",
      description:
        "High-performance rubber gaskets designed for sealing and industrial applications.",
    },
    {
      icon: "bi-record-circle",
      title: "O-Rings & Seals",
      description:
        "Precision-engineered O-rings and sealing components for demanding environments.",
    },
    {
      icon: "bi-gear",
      title: "Rubber Bushes",
      description:
        "Durable rubber bushes and vibration-control components for industrial applications.",
    },
    {
      icon: "bi-link-45deg",
      title: "Rubber to Metal Bonded Parts",
      description:
        "Custom bonded rubber components manufactured according to customer specifications.",
    },
    {
      icon: "bi-bezier2",
      title: "Rubber Hoses",
      description:
        "Flexible and reliable rubber hoses for industrial and automotive applications.",
    },
    {
      icon: "bi-box-seam",
      title: "Custom Molded Components",
      description:
        "Customized molded rubber products developed from drawings, samples and specifications.",
    },
  ];

  const industries = [
    "Textile",
    "Engineering",
    "Pharmaceutical",
    "Industial Equipment",
    "General Manufacturing",
    "Hydraulics & Pneumatics",
    "Construction",
    "Agriculture"
  ];

  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top industrial-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            {/* <span className="brand-mark">P</span> */}
            <img 
                className="brand-mark"
                src={logo}
                alt="logo"
            />
            P R SEALS <span className="brand-highlight">MANUFACTURER</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#industries">
                  Industries
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#quality">
                  Quality
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <a href="#contact" className="btn btn-warning px-4">
                  Contact Us
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <a href="#contact" className="btn btn-outline-warning px-4">
                    <i class="bi bi-person"> </i>
                    Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-7">
              <span className="hero-label">
                INDUSTRIAL & TEXTILE RUBBER PRODUCTS MANUFACTURING
              </span>

              <h1>
                Molded Rubber Products
                <br />
                <span> That Fulfills Genuine Industrial needs.</span>
              </h1>

              <p className="hero-text">
                We manufacture high-quality rubber components, seals, gaskets,
                hoses and customized molded products for demanding industrial
                applications.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <a href="#products" className="btn btn-warning btn-lg px-4">
                  Explore Products
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-card">
                <div className="hero-card-icon">
                  <i className="bi bi-gear-wide-connected"></i>
                </div>

                <h3>Precision Manufacturing Ability</h3>

                <p>
                  Reliable rubber components manufactured with a focus on
                  quality, consistency and customer requirements.
                </p>

                <div className="row mt-4">
                  <div className="col-4">
                    <strong>10+</strong>
                    <small>Years Experience</small>
                  </div>

                  <div className="col-4">
                    <strong>50+</strong>
                    <small>Products</small>
                  </div>

                  <div className="col-4">
                    <strong>10+</strong>
                    <small>Industries</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="about-badge">
                  <strong>10+</strong>
                  <span>Years of Excellence</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-label">ABOUT OUR COMPANY</span>

              <h2>
                Manufacturing Rubber
                <br />
                Products With Precision
              </h2>

              <p className="lead">
                P R SEALS MANUFACTURER is an Indian rubber manufacturing company focused
                on delivering reliable, challenging and customized rubber solutions.
              </p>

              <p>
                From concept and material selection to molding, finishing and
                inspection, we work closely with our customers to manufacture
                components that meet their application requirements.
              </p>

              <div className="row mt-4">
                <div className="col-sm-6 mb-3">
                  <div className="feature-small">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Customized Solutions</span>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="feature-small">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Consistent Quality</span>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="feature-small">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Modern Manufacturing</span>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="feature-small">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Timely Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      <section id="products" className="section-padding products-section">
        <div className="container">
          <div className="text-center section-heading">
            <span className="section-label">OUR PRODUCTS</span>

            <h2>Industrial Rubber Products</h2>

            <p>
              From standard components to customized rubber parts, we provide
              solutions for a wide range of applications.
            </p>
          </div>

          <div className="row g-4 mt-3">
            {products.map((product, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="product-card">
                  <div className="product-icon">
                    <i className={`bi ${product.icon}`}></i>
                  </div>

                  <h4>{product.title}</h4>

                  <p>{product.description}</p>

                  <a href="#contact">
                    Enquire Now <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}

      <section className="why-section section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-label">WHY CHOOSE US</span>

              <h2>
                A Reliable Partner
                <br />
                For Rubber Components
              </h2>

              <p>
                We combine manufacturing expertise, technical understanding
                and quality-focused processes to deliver dependable products.
              </p>

              <div className="why-item">
                <div className="why-number">01</div>

                <div>
                  <h5>Customer Focused</h5>
                  <p>
                    Products developed around your drawings, specifications
                    and application requirements.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">02</div>

                <div>
                  <h5>Quality Driven</h5>
                  <p>
                    Quality checks throughout manufacturing help maintain
                    consistency and reliability.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">03</div>

                <div>
                  <h5>Flexible Manufacturing</h5>
                  <p>
                    Capability to support both standard and customized rubber
                    components.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="factory-box">
                <i className="bi bi-buildings"></i>

                <h3>Built For Industry</h3>

                <p>
                  Our manufacturing approach is designed to support demanding
                  applications where durability, precision and consistency
                  matter.
                </p>

                <a href="#contact" className="btn btn-warning">
                  Discuss Your Requirement
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section id="industries" className="section-padding">
        <div className="container">
          <div className="text-center section-heading">
            <span className="section-label">INDUSTRIES WE SERVE</span>

            <h2>Solutions Across Industries</h2>

            <p>
              Our rubber components can be used across multiple industrial
              applications.
            </p>
          </div>

          <div className="row g-3 mt-4">
            {industries.map((industry, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="industry-card">
                  <i className="bi bi-arrow-up-right-circle"></i>
                  <span>{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}

      <section id="quality" className="quality-section section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-label">QUALITY ASSURANCE</span>

              <h2>
                Quality Is Built
                <br />
                Into Every Product
              </h2>

              <p>
                Our quality-focused approach helps ensure that every component
                meets the required dimensions, material properties and
                application requirements.
              </p>

              <div className="quality-list">
                <div>
                  <i className="bi bi-shield-check"></i>
                  <span>Material Inspection</span>
                </div>

                <div>
                  <i className="bi bi-shield-check"></i>
                  <span>Dimensional Inspection</span>
                </div>

                <div>
                  <i className="bi bi-shield-check"></i>
                  <span>Process Monitoring</span>
                </div>

                <div>
                  <i className="bi bi-shield-check"></i>
                  <span>Final Product Inspection</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="quality-card">
                <i className="bi bi-award"></i>

                <h3>Committed to Quality</h3>

                <p>
                  We continuously improve our manufacturing processes to
                  provide dependable rubber products to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <div className="container text-center">
          <span className="section-label">HAVE A REQUIREMENT?</span>

          <h2>Let's Build the Right Rubber Solution</h2>

          <p>
            Share your drawing, sample or product requirement with our team.
          </p>

          <a href="#contact" className="btn btn-warning btn-lg px-5">
            Request a Quote
          </a>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="section-label">CONTACT US</span>

              <h2>Let's Discuss Your Requirement</h2>

              <p>
                Tell us about your rubber component requirement and our team
                will get back to you.
              </p>

              <div className="contact-info">
                <div>
                  <i className="bi bi-geo-alt"></i>

                  <div>
                    <strong>Factory Address</strong>
                    <p>
                      MIDC Industrial Area,
                      <br />
                      Jaysingpur, Kolhapur, Maharashtra, India
                    </p>
                  </div>

                  <div>
                    <strong>Office Address</strong>
                    <p>
                      MIDC Industrial Area,
                      <br />
                      Jaysingpur, Kolhapur, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div>
                  <i className="bi bi-telephone"></i>

                  <div>
                    <strong>Phone</strong>
                    <p>+91 9552290234</p>
                  </div>
                </div>

                <div>
                  <i className="bi bi-envelope"></i>

                  <div>
                    <strong>Email</strong>
                    <p>prseals@gmail.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Company</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>

                  <div className="col-12">
                    <label>Requirement</label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Tell us about your rubber product requirement..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-dark btn-lg px-5">
                      Send Enquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>P R SEALS MANUFACTURER</h4>
              <p>
                Industrial rubber manufacturing and customized rubber
                solutions.
              </p>
            </div>

            <div className="col-md-6 text-md-end">
              <p>© 2026 P R SEALS MANUFACTURER. All Rights Reserved.</p>

              <div className="social-icons">
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;