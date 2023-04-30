import "./../styles.scss"
import "./styles.scss"
import { useTranslation } from "react-i18next"
import i18next from "./../../i18n"
import TextTitle from "../../components/PageTitle/TextTitle"
import { Text } from "../../components/Text/Text"
import { Title } from "../../components/Textbox/Textbox"

// import translations from "./../../locales/en/translation.json"


const Lieu = () => {
  const { t } = useTranslation()
  return <div className="container">
    <Title title={'practicalInfo.location.title'} />
    {Object.values(i18next.t('practicalInfo.location.paragraphs', { returnObjects: true }))
      .map((value) => {
        return <Text textContent={value} />
      })}
    <TextTitle translation={'practicalInfo.location.info.titles.date'} />
    <Text textContent={'practicalInfo.location.info.date'} />
    <TextTitle translation={'practicalInfo.location.info.titles.place'} />
    <Text textContent={'practicalInfo.location.info.place'} />
    <TextTitle translation={'practicalInfo.location.info.titles.train'} />
    <Text textContent={'practicalInfo.location.info.train'} />
    <TextTitle translation={'practicalInfo.location.timetable.title'} />
    <ul className="timetable">
      {Object.values(i18next.t('practicalInfo.location.timetable.times', { returnObjects: true })).map
        ((value) => {
          return <li className="timetable__time">{t(value)}</li>
        })}
    </ul>
  </div>
}

export default Lieu
