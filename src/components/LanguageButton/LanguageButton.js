import i18n from "../../i18n";
import "./styles.scss"

const LanguageButton = (props) => {

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return <button className="lng-button" onClick={() => changeLanguage(props.lng)}>{props.lng}</button>
}

export default LanguageButton