import { Text } from "../../components/Text/Text"
import { Title } from "../../components/Textbox/Textbox"
import i18next from "./../../i18n"

const Consent = () => {
    return <div>
        <Title title={'values.consent.title'} />
        {Object.values(i18next.t('values.consent.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Consent