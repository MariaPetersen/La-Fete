import "./styles.scss"
import { useTranslation } from "react-i18next"

export const Paragraph = (props) => {
    const { t } = useTranslation()
    return <div>
        <Text textContent={t(props.textContent)} />
    </div>
}

export const Text = (props) => {
    const { t } = useTranslation()
    return <p className="paragraph">{t(props.textContent)}</p>
}

export default Paragraph