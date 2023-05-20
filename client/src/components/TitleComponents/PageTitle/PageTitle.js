import "./styles.scss"
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/arrow.png"
import { useTranslation } from "react-i18next";

const PageTitle = (props) => {
    const { t } = useTranslation()
    return <div className="page-title--container">
        <Link to="/" className={props.arrowClass}><img src={arrow} className="page-title--arrow" alt="Return to home"></img></Link>
        <h1 className="page-title">{t(props.title)}</h1>
    </div>
}

export default PageTitle