import "./../styles.scss"
import { useTranslation } from "react-i18next"
import i18next from "./../../i18n"

const Transport = () => {
  const { t } = useTranslation()
  return <div className="container">
    {Object.values(i18next.t('practicalInfo.transport.paragraphs', { returnObjects: true }))
      .map((value) => {
        return <p>{t(value)}</p>
      })}
  </div>
}


export default Transport
