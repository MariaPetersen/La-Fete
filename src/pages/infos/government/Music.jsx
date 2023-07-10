import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoMatthias from "../../../assets/images/ministers/music_matthias.jpeg"
import photoMaxime from "../../../assets/images/ministers/music_maxime.jpeg"
import arrow from "../../../assets/icons/arrow.png"
import { Link} from "react-router-dom";
import Title from "../../../components/TitleComponents/H2Title/H2Title";
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";
import "./styles.scss"

const Music = () => {
    const { t } = useTranslation();
    return <div className="government__container">
        <GovernmentTitle title={'practicalInfo.government.music.title'} backlink="../ceremonyministers" nextlink="../photos" />
        <div>
            <GovernmentProfile 
            title={'practicalInfo.government.music.title'}
            photo={{
                backgroundImage: `url(${photoMatthias})`,
            }}
            role="practicalInfo.government.music.ministry" 
            name="Matthias"
            />
            <GovernmentProfile 
            title={'practicalInfo.government.music.title'}
            photo={{
                backgroundImage: `url(${photoMaxime})`,
            }}
            role="practicalInfo.government.music.ministry" 
            name="Music"
            />
        </div>
    </div>
        
      
}

export default Music