import logo from "../images/react-logo.png"

function Header() {
    return (
        <div>
            <nav className="nav-bar">
                <img src={logo} className="nav-logo" />
                <ul className="nav-items">
                    <li>Practice</li>
                    <li>Makes</li>
                    <li>Perfect</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
