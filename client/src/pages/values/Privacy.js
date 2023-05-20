import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
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