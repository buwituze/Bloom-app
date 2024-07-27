import React from "react";
import { Link } from "react-router-dom";
import "../styles/allproducts.css";
import FarmerNavbar from "../components/farmernav";
import FarmerFooter from "../components/farmerfooter";

function Cart() {
  {
    const [count, setCount] = React.useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <div>
        <FarmerNavbar />
        <input type="number" value={count} readOnly />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <FarmerFooter />
      </div>
    );
  }
  //   return (
  //     <div>
  //       <FarmerNavbar />

  //       <div className="bannerimage">
  //         <h2>Cart</h2>
  //         <img
  //           src="/360_F_729702813_9oFXIQ4ypYSJDb2H2lf1cPug4s9OwYdO.jpg"
  //           alt=""
  //         />
  //       </div>
  //       <div>
  //         <h3>Cart</h3>
  //       </div>
  //       <FarmerFooter />
  //     </div>
  //   );
}

export default Cart;
