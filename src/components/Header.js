
import logo from "../../assets/img/paitpooja_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container-logo">
        <img className="logo" src={logo} alt="Pait Pooja Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;