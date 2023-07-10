import { useTranslation } from "react-i18next";
import Title from "../../TitleComponents/H2Title/H2Title";
import "./styles.scss"

function GovernementProfile (props) {
    const { t } = useTranslation();
    return (
        <div className="government"> 
            <div className="government__profile">
                <div className="government--photo" style={props.photo}></div>
                <div className="government__title">
                    <span className="government__title--role">{t(props.role)}</span>
                    <span className="government__title--name">{props.name}</span>
                </div> 
            </div>
        </div>
    )
}

export default GovernementProfile