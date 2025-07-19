import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                <p className="text-body px-3">|</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-primary px-3" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-primary px-3" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-primary px-3" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="text-primary px-3" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-primary pl-3" href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
            <a className="navbar-brand" href="#"><h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
              <div className="navbar-nav ml-auto py-0">
                <a href="/" className="nav-item nav-link">Home</a>
                <a href="/about" className="nav-item nav-link">About</a>
                <a href="/services" className="nav-item nav-link">Services</a>
                <a href="/packages" className="nav-item nav-link">Tour Packages</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu border-0 rounded-0 m-0">
                    <a href="/blog" className="dropdown-item">Blog Grid</a>
                    <a href="/blog-detail" className="dropdown-item">Blog Detail</a>
                    <a href="/destination" className="dropdown-item">Destination</a>
                    <a href="/guide" className="dropdown-item">Travel Guides</a>
                    <a href="/testimonial" className="dropdown-item active">Testimonial</a>
                  </div>
                </div>
                <a href="/contact" className="nav-item nav-link">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
            <h3 className="display-4 text-white text-uppercase">Testimonial</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Testimonial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
          <div className="bg-light shadow" style={{ padding: 30 }}>
            <div className="row align-items-center" style={{ minHeight: 60 }}>
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3 mb-3 mb-md-0">
                    <select className="custom-select px-4" style={{ height: 47 }}>
                      <option selected>Destination</option>
                      <option>Destination 1</option>
                      <option>Destination 2</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <input type="text" className="form-control p-4" placeholder="Depart Date" />
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <input type="text" className="form-control p-4" placeholder="Return Date" />
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <select className="custom-select px-4" style={{ height: 47 }}>
                      <option selected>Duration</option>
                      <option>3 Days</option>
                      <option>7 Days</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary btn-block" style={{ height: 47 }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Testimonial</h6>
            <h1>What Say Our Clients</h1>
          </div>
          <div className="row">
            {[1, 2, 3, 4].map((id) => (
              <div className="col-md-6 col-lg-3 text-center pb-4" key={id}>
                <img
                  className="img-fluid mx-auto"
                  src={`/images/testimonial-${id}.jpg`}
                  alt={`testimonial-${id}`}
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
