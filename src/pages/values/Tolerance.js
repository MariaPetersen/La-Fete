import { Text } from "../../components/Text/Text"
import { Title } from "../../components/Textbox/Textbox"
import i18next from "./../../i18n"

const Tolerance = () => {
    return <div>
        <Title title={'values.tolerance.title'} />
        {Object.values(i18next.t('values.tolerance.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Tolerance