import {logo} from "./picture/logo.svg"

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="left-navbar-dt">
                <a href={'/'}>
                    <div>
                        <img src={logo} alt="YUNWHANG-logo"  />
                    </div>
                    <p><b>YUNWHANG</b></p>
                </a>
            </div>
            <ul class="right-navbar-dt">
                <li><a href={'/'}><b>Home</b></a></li>
                <li><a href={''}><b>About Us</b></a></li>
                <li><a href={''}><b>Contact</b></a></li>
                <li><a href={'/Login'}><button type="button" id="navbar-login-btn"><b>Log In</b></button></a></li>
            </ul>
        </nav>
    )
}

export default Navbar