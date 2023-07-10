import arrow from "../../../assets/icons/arrow.png"
import { Link} from "react-router-dom";
import Title from "../../TitleComponents/H2Title/H2Title";
import "./styles.scss"


const GovernmentTitle = (props) => {
    return <div className="government__header">
        <Link to={props.backlink}><img src={arrow} alt="précédent" className="government__arrow--back" /></Link>
        <Title title={props.title}></Title>
        <Link to={props.nextlink}><img src={arrow} alt="prochain" className="government__arrow--next" /></Link>
    </div>
}

export default GovernmentTitle