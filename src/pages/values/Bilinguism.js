import { Text } from "../../components/Text/Text"
import { Title } from "../../components/Textbox/Textbox"
import i18next from "./../../i18n"

const Bilinguism = () => {
    return <div>
        <Title title={'values.bilinguism.title'} />
        {Object.values(i18next.t('values.bilinguism.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Bilinguism