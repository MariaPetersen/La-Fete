import "./../styles.scss"
import { useTranslation } from "react-i18next"

const Text = (props) => {
    const { t } = useTranslation()
    return <p className="paragraph">{t(props.textContent)}</p>
}

export default Text