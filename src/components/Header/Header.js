import logo from "../../assets/logo/logo.png"
import LanguageButton from "../LanguageButton/LanguageButton"
import "./styles.scss"

function Header() {
    return <header className="header">
        <img src={logo} alt='La Fête' className="lafete-logo" />
        <div className="lng-button__container">
            <LanguageButton lng="fr" />
            <LanguageButton lng="en" />
        </div>
    </header>
}

export default Header