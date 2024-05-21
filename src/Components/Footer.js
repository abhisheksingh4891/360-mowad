import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-envelope me-2"></i>info@example.com</li>
              <li><i className="fas fa-phone me-2"></i>+1 234 567 890</li>
              <li><i className="fas fa-map-marker-alt me-2"></i>123 Main St, City, Country</li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <a href="#!" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
            <a href="#!" className="text-white me-3"><i className="fab fa-twitter"></i></a>
            <a href="#!" className="text-white me-3"><i className="fab fa-instagram"></i></a>
            <a href="#!" className="text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
