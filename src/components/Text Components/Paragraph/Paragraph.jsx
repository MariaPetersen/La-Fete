import { useTranslation } from "react-i18next"
import Text from "../Text/Text"


export const Paragraph = (props) => {
    const { t } = useTranslation()
    return <div>
        <Text textContent={t(props.textContent)} />
    </div>
}

export default Paragraph