import mainLogo from './picture/logo.svg'

const Navbar = () => {
    return (
        <nav class="navbar">
            <div>
                <img src={mainLogo} alt='main Logo'/>
            </div>
            <ul class="right-navbar-dt">
                <li><a href={'/'}><b>Home</b></a></li>
                <li><a href={'/About'}><b>About Us</b></a></li>
                <li><a href={''}><b>Contact</b></a></li>
                <li><a href={''}><button type="button" id="navbar-login-btn"><b>Log In</b></button></a></li>
            </ul>
        </nav>
    )
}

export default Navbar