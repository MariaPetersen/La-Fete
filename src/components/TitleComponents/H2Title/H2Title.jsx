import { useTranslation } from "react-i18next";
import "./styles.scss";

const Title = (props) => {
    const { t } = useTranslation();
    return <h2 className={props.className}>{t(props.title)}</h2>;
};

export default Title;
