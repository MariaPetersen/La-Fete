import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoAna from "../../../assets/images/ministers/president_ana.jpeg"
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";
import "./styles.scss"

const ConsentMinisters = () => {
    const { t } = useTranslation();
    return <div className="government__container">
       <GovernmentTitle title={'practicalInfo.government.consent.title'} backlink="../photos" nextlink="../communication" />
        <div>
            <GovernmentProfile 
            title={'practicalInfo.government.consent.title'}
            photo={{
                backgroundImage: `url(${photoAna})`,
            }}
            role="practicalInfo.government.consent.ministry" 
            name="Ana"
            />
        </div>
    </div>
        
      
}

export default ConsentMinisters