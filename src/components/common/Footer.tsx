import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/components/footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const destinations = [
    { name: "India", image: "/images/india.jpg", path: "/destination/india" },
    { name: "Bali", image: "/images/bali.jpg", path: "/destination/bali" },
    { name: "Dubai", image: "/images/dubai.jpg", path: "/destination/dubai" },
    { name: "Singapore", image: "/images/singapore.jpg", path: "/destination/singapore" },
    { name: "Thailand", image: "/images/thailand.jpg", path: "/destination/thailand" },
    { name: "Andaman", image: "/images/Andaman.jpg", path: "/destination/andaman" },
    { name: "Ladakh", image: "/images/ladakh.jpg", path: "/destination/ladakh" },
    { name: "HongKong", image: "/images/HongKong.jpg", path: "/destination/hongkong" },
    { name: "SriLanka", image: "/images/SriLanka.jpg", path: "/destination/srilanka" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* About */}
          <div className={styles.column}>
            <h4>ABOUT ASTIR PASSAGE PVT LTD</h4>
          <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/we-are-hiring">We Are Hiring</Link></li>
              <li><Link to="/reviews">astirpassage Reviews</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policies">Privacy Policies</Link></li>
              <li><Link to="/copyright-policies">Copyright Policies</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li className={styles.beware}>Beware of Frauds ⚠️</li>
            </ul>
          </div>

          {/* Suppliers & Brands */}
          <div className={styles.column}>
            <h4>FOR SUPPLIERS</h4>
            <ul>
              <li>List Your Activities</li>
            </ul>
            <h4>FOR BRANDS</h4>
            <ul>
              <li>Partner With Us</li>
              <li>Destination Marketing</li>
            </ul>
          </div>

          {/* Travellers */}
          <div className={styles.column}>
            <h4>FOR TRAVELLERS</h4>
            <ul>
              <li>Gift an Experience</li>
            </ul>
          </div>

          {/* Destinations */}
          <div className={styles.column}>
            <h4>TRAVEL DESTINATIONS</h4>
            <div className={styles.destinations}>
              {destinations.map((dest) => (
                <Link
                  to={dest.path}
                  key={dest.name}
                  className={styles.destCard}
                  style={{ backgroundImage: `url(${dest.image})` }}
                >
                  <span>{dest.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.logo}>astirpassage.com</div>
        <div className={styles.social}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
        <div className={styles.copy}>
          © 2025 astirpassage.com All rights reserved.
          <br />
          Unauthorized use is prohibited and punishable by law.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
