import { Text } from "../../components/Text/Text"
import { Title } from "../../components/Textbox/Textbox"
import i18next from "./../../i18n"

const Participation = () => {
    return <div>
        <Title title={'values.participation.title'} />
        {Object.values(i18next.t('values.participation.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Participation