import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoMatthias from "../../../assets/images/ministers/music_matthias.jpeg"
import arrow from "../../../assets/icons/arrow.png"
import { Link} from "react-router-dom";
import Title from "../../../components/TitleComponents/H2Title/H2Title";
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";
import "./styles.scss"

const Transport = () => {
    const { t } = useTranslation();
    return <div className="government__container">
        <GovernmentTitle title={'practicalInfo.government.transport.title'} backlink="../food" nextlink="../workshops" />
        <div>
            <GovernmentProfile 
            title={'practicalInfo.government.transport.title'}
            photo={{
                backgroundImage: `url(${photoMatthias})`,
            }}
            role="practicalInfo.government.transport.ministry" 
            name="Matthias"
            />
        </div>
    </div>
        
      
}

export default Transport