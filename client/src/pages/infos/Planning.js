import "./../styles.scss"
import { useTranslation } from "react-i18next"
import i18next from "./../../i18n"
import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"


const Planning = () => {

  const { t } = useTranslation()
  return <div className="container">
    <Title title={'practicalInfo.planning.title'} />
    {Object.values(i18next.t('practicalInfo.planning.paragraphs', { returnObjects: true }))
      .map((value) => {
        return <Text textContent={value} />
      })}
  </div>
}


export default Planning
