
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const logo = new URL("../../assets/img/paitpooja_logo.png", import.meta.url).href;

const Header = () => {

  const [btnLogin, setBtnLogin] = useState("Login");
  return (
    <div className="header">
      <div className="container-logo">
        <img className="logo" src={logo} alt="Pait Pooja Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link>Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button className="btn-login" onClick={()=>{
            btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login")
          }}>{btnLogin}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;