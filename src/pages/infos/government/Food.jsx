import GovernmentProfile from "../../../components/Government/GovernmentProfile/GovernmentProfile";
import { useTranslation } from "react-i18next";
import photoRomain from "../../../assets/images/ministers/president_romain.jpeg"
import arrow from "../../../assets/icons/arrow.png"
import { Link} from "react-router-dom";
import Title from "../../../components/TitleComponents/H2Title/H2Title";
import GovernmentTitle from "../../../components/Government/GovernmentTitle/GovernmentTitle";
import "./styles.scss"

const Food = () => {
    const { t } = useTranslation();
    return <div className="government__container">
        <GovernmentTitle title={'practicalInfo.government.food.title'} backlink="../president" nextlink="../transport" />
        <div>
            <GovernmentProfile 
            title={'practicalInfo.government.food.title'}
            photo={{
                backgroundImage: `url(${photoRomain})`,
            }}
            role="practicalInfo.government.food.ministry" 
            name="Romain"
            />
        </div>
       
    </div>
        
      
}

export default Food