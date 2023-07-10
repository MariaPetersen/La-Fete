import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoMaria from "../../../assets/images/ministers/comms_maria.jpeg"
import photoAna from "../../../assets/images/ministers/president_ana.jpeg"
import photoCharlotte from "../../../assets/images/ministers/president_charlotte.jpeg"
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";
import "./styles.scss"


const Comms = () => {
    const { t } = useTranslation();
    return <div className="government__container">
        <GovernmentTitle title={'practicalInfo.government.communication.title'} backlink="../consentministers" nextlink="../president" />
        <div>
            <GovernmentProfile 
            photo={{
                backgroundImage: `url(${photoMaria})`,
            }}
            role="practicalInfo.government.communication.ministry" 
            name="Maria"
            />
            <GovernmentProfile 
            photo={{
                backgroundImage: `url(${photoAna})`,
            }}
            role="practicalInfo.government.communication.ministry" 
            name="Ana"
            />
            <GovernmentProfile 
            photo={{
                backgroundImage: `url(${photoCharlotte})`,
            }}
            role="practicalInfo.government.communication.ministry" 
            name="Charlotte"
            />
        </div>
    </div>
        
      
}

export default Comms