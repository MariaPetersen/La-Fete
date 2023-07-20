import "./../styles.scss"
import { useTranslation } from "react-i18next"
import i18next from "./../../i18n"
import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import TextTitle from "../../components/TitleComponents/TextTitle/TextTitle"


const Planning = () => {

  const { t } = useTranslation()
  return <div className="container">
    <Title title={'practicalInfo.planning.title'} className="title title_mobile" />
    <TextTitle translation={'practicalInfo.planning.thursday.dinner.title'} />
    <Text textContent={'practicalInfo.planning.thursday.dinner.lead'} />
    <Text textContent={'practicalInfo.planning.thursday.dinner.cooking'} />
    <Text textContent={'practicalInfo.planning.thursday.dinner.cleaning'} />
    <TextTitle translation={'practicalInfo.planning.friday.lunch.title'} />
    <Text textContent={'practicalInfo.planning.friday.lunch.lead'} />
    <Text textContent={'practicalInfo.planning.friday.lunch.cooking'} />
    <Text textContent={'practicalInfo.planning.friday.lunch.cleaning'} />
    <TextTitle translation={'practicalInfo.planning.friday.dinner.title'} />
    <Text textContent={'practicalInfo.planning.friday.dinner.lead'} />
    <Text textContent={'practicalInfo.planning.friday.dinner.cooking'} />
    <Text textContent={'practicalInfo.planning.friday.dinner.cleaning'} />
    <TextTitle translation={'practicalInfo.planning.saturday.lunch.title'} />
    <Text textContent={'practicalInfo.planning.saturday.lunch.lead'} />
    <Text textContent={'practicalInfo.planning.saturday.lunch.cooking'} />
    <Text textContent={'practicalInfo.planning.saturday.lunch.cleaning'} />
    <TextTitle translation={'practicalInfo.planning.saturday.dinner.title'} />
    <Text textContent={'practicalInfo.planning.saturday.dinner.lead'} />
    <Text textContent={'practicalInfo.planning.saturday.dinner.cooking'} />
    <Text textContent={'practicalInfo.planning.saturday.dinner.cleaning'} />
    <TextTitle translation={'practicalInfo.planning.sunday.lunch.title'} />
    <Text textContent={'practicalInfo.planning.sunday.lunch.lead'} />
    <Text textContent={'practicalInfo.planning.sunday.lunch.cooking'} />
    <Text textContent={'practicalInfo.planning.sunday.lunch.cleaning'} />
    <TextTitle translation={'practicalInfo.planning.sunday.dinner.title'} />
    <Text textContent={'practicalInfo.planning.sunday.dinner.lead'} />
    <Text textContent={'practicalInfo.planning.sunday.dinner.cooking'} />
    <Text textContent={'practicalInfo.planning.sunday.dinner.cleaning'} />

  </div>
}


export default Planning
