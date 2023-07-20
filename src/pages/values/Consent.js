import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import i18next from "./../../i18n"

const Consent = () => {
    return <div>
        <Title title={'values.consent.title'} className="title title_mobile" />
        {Object.values(i18next.t('values.consent.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Consent