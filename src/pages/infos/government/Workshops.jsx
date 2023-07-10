import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoAndrea from "../../../assets/images/ministers/workshops_andrea.jpeg"
import photoClaude from "../../../assets/images/ministers/workshops_claude.jpeg"
import arrow from "../../../assets/icons/arrow.png"
import { Link} from "react-router-dom";
import Title from "../../../components/TitleComponents/H2Title/H2Title";
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";
import "./styles.scss"

const Workshops = () => {
    const { t } = useTranslation();
    return <div className="government__container">
        <GovernmentTitle title={'practicalInfo.government.workshops.title'} backlink="../transport" nextlink="../ceremonyministers" />
        <div>
            <GovernmentProfile 
            title={'practicalInfo.government.workshops.title'}
            photo={{
                backgroundImage: `url(${photoAndrea})`,
            }}
            role="practicalInfo.government.workshops.ministry" 
            name="Andréa"
            />
            <GovernmentProfile 
            title={'practicalInfo.government.workshops.title'}
            photo={{
                backgroundImage: `url(${photoClaude})`,
            }}
            role="practicalInfo.government.workshops.ministry" 
            name="Claude"
            />
        </div>
    </div>
        
      
}

export default Workshops