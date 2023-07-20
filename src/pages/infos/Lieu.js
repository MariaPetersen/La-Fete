import "./../styles.scss"
import "./styles.scss"
import { useTranslation } from "react-i18next"
import i18next from "./../../i18n"
import TextTitle from "../../components/TitleComponents/TextTitle/TextTitle"
import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import "./../../assets/images/gite-photo_1.webp"


// import translations from "./../../locales/en/translation.json"


const Lieu = () => {
  const { t } = useTranslation()
  return <div className="container">
    <Title title={'practicalInfo.location.title'} className="title title_mobile" />
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
    {/* <TextTitle translation={'practicalInfo.location.timetable.title'} />
    <ul className="timetable">
      {Object.values(i18next.t('practicalInfo.location.timetable.times', { returnObjects: true })).map
        ((value) => {
          return <li className="timetable__time">{t(value)}</li>
        })}
    </ul> */}
    <div className="image__container">
      <img className="image" src={require("./../../assets/images/gite-photo_1.webp")} alt="Gîte" />
      <img className="image" src={require("./../../assets/images/gite-photo_2.webp")} alt="Gîte" />
    </div>
  </div>
}

export default Lieu
