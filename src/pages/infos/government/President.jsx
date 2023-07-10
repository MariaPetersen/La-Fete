import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoRomain from "../../../assets/images/ministers/president_romain.jpeg"
import photoAna from "../../../assets/images/ministers/president_ana.jpeg"
import photoCharlotte from "../../../assets/images/ministers/president_charlotte.jpeg"
import arrow from "../../../assets/icons/arrow.png"
import { Link} from "react-router-dom";
import Title from "../../../components/TitleComponents/H2Title/H2Title";
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";
import "./styles.scss"


const President = () => {
    const { t } = useTranslation();
    return <div className="government__container">
            <GovernmentTitle title={'practicalInfo.government.president.title'} backlink="../communication" nextlink="../food" />
            <GovernmentProfile 
            photo={{
                backgroundImage: `url(${photoRomain})`,
            }}
            role="practicalInfo.government.president.ministry.male" 
            name="Romain"
            />
            <GovernmentProfile 
            photo={{
                backgroundImage: `url(${photoAna})`,
            }}
            role="practicalInfo.government.president.ministry.female" 
            name="Ana"
            />
            <GovernmentProfile 
            photo={{
                backgroundImage: `url(${photoCharlotte})`,
            }}
            role="practicalInfo.government.president.ministry.female" 
            name="Charlotte"
            />
    </div>
        
      
}

export default President