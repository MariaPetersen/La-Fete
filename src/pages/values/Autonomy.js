import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import i18next from "./../../i18n"

const Autonomy = () => {
    return <div>
        <Title title={'values.autonomy.title'} className="title title_mobile" />
        {Object.values(i18next.t('values.autonomy.description', { returnObjects: true }))
            .map((value) => {
                return <Text textContent={value} />
            })}
    </div>
}

export default Autonomy