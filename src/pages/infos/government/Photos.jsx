import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoChloe from "../../../assets/images/ministers/photos_chloe.jpeg"
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";
import "./styles.scss"

const Photos = () => {
    const { t } = useTranslation();
    return <div className="government__container">
        <GovernmentTitle title={'practicalInfo.government.photos.title'} backlink="../music" nextlink="../consentministers" />
        <div>
            <GovernmentProfile 
            title={'practicalInfo.government.photos.title'}
            photo={{
                backgroundImage: `url(${photoChloe})`,
            }}
            role="practicalInfo.government.photos.ministry" 
            name="Chloé"
            />
        </div>
    </div>
        
      
}

export default Photos