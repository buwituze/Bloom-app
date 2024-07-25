import React from "react";
import { Link } from "react-router-dom";
// import "../styles/allproducts.css";
import FarmerNavbar from "../components/farmernav";
import FarmerFooter from "../components/farmerfooter";
function AllProducts() {
  return (
    <div>
      <FarmerNavbar />
      <div className="all-products">
        <h3>Available products</h3>
        {/* /*create a section that contain a div for all products, inside that
        section create a div for each product which have an image, name, price,
        and two buttons for Learn More and add to cart*/}
        <div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <p>Amidas Fertilizers</p>
            <p>20, 000 FRW</p>
            <div>
              <button>Learn More</button>
              <button>Add to cart</button>
            </div>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <p>Flower Seeds</p>
            <p>5000 FRW</p>
            <div>
              <button>Learn More</button>
              <button>Add to cart</button>
            </div>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <p>Amidas Pesticides</p>
            <p>15, 000 FRW</p>
            <div>
              <button>Learn More</button>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <FarmerFooter />
    </div>
  );
}

export default AllProducts;
