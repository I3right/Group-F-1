import mainLogo from "./assets/picture/logo.svg";
import './assets/CSS/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-navbar">
        <a href={"/"}>
          <div>
            <img src={mainLogo} alt="main Logo" />
          </div>
          <p><b>YUNWHANG</b></p>
        </a>
      </div>
      <ul className="right-navbar">
        <li><a href={"/"}><b>Home</b></a></li>
        <li><a href={"/About"}><b>About Us</b></a></li>
        <li><a href={"/"}><b>Contact</b></a></li>
        <li><a href={"/Login"}><button type="button" id="navbar-login-btn"><b>Log In</b></button></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
