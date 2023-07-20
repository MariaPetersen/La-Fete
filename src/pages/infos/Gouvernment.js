import "./../styles.scss"
import { useTranslation } from "react-i18next"
import i18next from "./../../i18n"
import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import { Outlet } from "react-router-dom"

const Gouvernement = () => {
  const { t } = useTranslation()
  return <div className="container">
    <Title title={'practicalInfo.government.title'} className="title title_mobile" />
    <Outlet />
  </div>
}

export default Gouvernement