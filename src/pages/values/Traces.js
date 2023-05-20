import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import i18next from "./../../i18n"

const Traces = () => {
    return <div>
        <Title title={'values.traces.title'} />
        {Object.values(i18next.t('values.traces.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Traces