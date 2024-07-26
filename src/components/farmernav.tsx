import React from "react";
import { Link } from "react-router-dom";
import "../styles/farmerNavBar.css";

function FarmerNavbar() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.querySelector(".nav-container nav");

    let isMenuOpen = false;

    if (menuToggle && mainNav) {
      menuToggle.addEventListener("click", function () {
        if (isMenuOpen) {
          mainNav.classList.remove("active");
          isMenuOpen = false;
        } else {
          mainNav.classList.add("active");
          isMenuOpen = true;
        }
      });
    }
  });

  return (
    <header className="header">
      <Link to="/LandingPage">
        <img src="/bloomlogo3-removebg-preview.png" alt="bloom" />
      </Link>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="#home">Home</Link>
            </li>

            <div className="dropdown">
              <li>
                <Link to="#" className="dropbtn">
                  Products
                </Link>
              </li>
              <div className="dropdown-content">
                <p>
                  <Link to="careerdevelopment.html">Fertilizers</Link>
                </p>
                <br />
                <p>
                  <Link to="onCampusEvents.html">Seeds</Link>
                </p>
                <br />
                <p>
                  <Link to="onCampusEvents.html">Pesticides</Link>
                </p>
                <br />
                <p>
                  <Link to="onCampusEvents.html">Farming Tools</Link>
                </p>
                <br />
                <p>
                  <Link to="onCampusEvents.html">Irrigation Tools</Link>
                </p>
                <br />
                <p>
                  <Link to="onCampusEvents.html">Test Kits</Link>
                </p>
                <br />
                <p>
                  <Link to="onCampusEvents.html">Farming Produce</Link>
                </p>
              </div>
            </div>

            <li>
              <Link to="#home">Resources</Link>
            </li>

            <div className="dropdown">
              <li>
                <Link to="#" className="dropbtn">
                  Community
                </Link>
              </li>
              <div className="dropdown-content">
                <p>
                  <Link to="">Events</Link>
                </p>
                <br />
                <p>
                  <Link to="">Community</Link>
                </p>
              </div>
            </div>

            <li>
              <Link to="#home">News</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="Profile">
            <Link to="">
              <i className="bx bxs-cart"></i>
            </Link>
          </div>
          <div className="Profile">
            <Link to="">
              <i className="bx bx-bell"></i>
            </Link>
          </div>
          <div className="Profile">
            <Link to="">
              <i className="bx bx-user-circle"></i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default FarmerNavbar;
