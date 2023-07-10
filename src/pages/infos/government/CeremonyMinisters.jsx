import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoElias from "../../../assets/images/ministers/ceremonies_elias.jpeg"
import photoCharlotte from "../../../assets/images/ministers/president_charlotte.jpeg"
import "./styles.scss"
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";

const CeremonyMinisters= () => {
    const { t } = useTranslation();
    return <div className="government__container">
       <GovernmentTitle title={'practicalInfo.government.ceremonies.title'} backlink="../workshops" nextlink="../music" />
        <div>
            <GovernmentProfile 
            title={'practicalInfo.government.ceremonies.title'}
            photo={{
                backgroundImage: `url(${photoElias})`,
            }}
            role="practicalInfo.government.ceremonies.ministry" 
            name="Elias"
            />
            <GovernmentProfile 
            title={'practicalInfo.government.ceremonies.title'}
            photo={{
                backgroundImage: `url(${photoCharlotte})`,
            }}
            role="practicalInfo.government.ceremonies.ministry" 
            name="Charlotte"
            />
        </div>
    </div>
        
      
}

export default CeremonyMinisters