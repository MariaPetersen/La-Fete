import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
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