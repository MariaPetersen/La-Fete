import { Text } from "../../components/Text/Text"
import TextTitle from "../../components/PageTitle/TextTitle"
import { Title } from "../../components/Textbox/Textbox"
import i18next from "./../../i18n"

const Autonomy = () => {
    return <div>
        <Title title={'values.autonomy.title'} />
        {Object.values(i18next.t('values.autonomy.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Autonomy