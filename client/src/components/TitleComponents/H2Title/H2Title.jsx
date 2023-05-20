import { useTranslation } from "react-i18next";

const Title = (props) => {
    const { t } = useTranslation();
    return <h2 className="title">{t(props.title)}</h2>
}

export default Title 