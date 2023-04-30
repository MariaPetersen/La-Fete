import { Text } from "../../components/Text/Text"
import { Title } from "../../components/Textbox/Textbox"
import i18next from "./../../i18n"

const Privacy = () => {
    return <div>
        <Title title={'values.privacy.title'} />
        {Object.values(i18next.t('values.privacy.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Privacy