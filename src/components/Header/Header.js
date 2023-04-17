import logo from "../../assets/logo/logo.png"
import "./styles.scss"

function Header() {
    return (<header className="header"><img src={logo} alt='La Fête' className="lafete-logo"/></header>)
}

export default Header