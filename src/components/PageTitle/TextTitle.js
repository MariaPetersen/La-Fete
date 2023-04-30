import { useTranslation } from "react-i18next"

const TextTitle = (props) => {
    const { t } = useTranslation();
    return <h3 className="TextTitle">{t(props.translation)}</h3>
}

export default TextTitle