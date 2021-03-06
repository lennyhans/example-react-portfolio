

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    const x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
function Navbar() {
    return (
        //Navbar (sit on top)
        <nav className="w3-top">
            <div className="w3-bar" id="myNavbar">
                <a 
                    className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" 
                    href="#a" 
                    onClick={toggleFunction} 
                    title="Toggle Navigation Menu">
                <i className="fa fa-bars"></i>
                </a>
                <a 
                    href="#home" 
                    className="w3-bar-item w3-button">HOME</a>
                <a 
                    href="#about" 
                    className="w3-bar-item w3-button w3-hide-small">
                    <i className="fa fa-user"></i> ABOUT</a>
                <a 
                    href="#portfolio" className="w3-bar-item w3-button w3-hide-small">
                    <i className="fa fa-th"></i> PORTFOLIO</a>
                <a 
                    href="#contact" className="w3-bar-item w3-button w3-hide-small">
                    <i className="fa fa-envelope"></i> CONTACT</a>
                <a 
                    href="#a" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                <i className="fa fa-search"></i>
                </a>
            </div>

            {//Navbar on small screens
            }
            <div 
                id="navDemo" 
                className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a 
                    href="#about" 
                    className="w3-bar-item w3-button" 
                    onClick={toggleFunction} >ABOUT</a>
                <a 
                    href="#portfolio" 
                    className="w3-bar-item w3-button" 
                    onClick={toggleFunction} >PORTFOLIO</a>
                <a 
                    href="#contact" 
                    className="w3-bar-item w3-button" 
                    onClick={toggleFunction} >CONTACT</a>
                <a 
                    href="#a" 
                    className="w3-bar-item w3-button">SEARCH</a>
            </div>
        </nav>
    );
}

export default Navbar;