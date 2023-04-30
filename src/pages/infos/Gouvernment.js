import "./../styles.scss"
import { useTranslation } from "react-i18next"
import i18next from "./../../i18n"
import { Text } from "../../components/Text/Text"
import { Title } from "../../components/Textbox/Textbox"

const Gouvernement = () => {
  const { t } = useTranslation()
  return <div className="container">
    <Title title={'practicalInfo.government.title'} />
    {Object.values(i18next.t('practicalInfo.government.paragraphs', { returnObjects: true }))
      .map((value) => {
        return <Text textContent={value} />
      })}
  </div>
}

export default Gouvernement