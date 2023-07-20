import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import TextTitle from "../../components/TitleComponents/TextTitle/TextTitle"

const Friday = () => {
    return <div className="container">
        <Title title={'activites.friday.title'} className="title title_mobile" />
        <TextTitle translation={'activites.friday.activities.1700.event'} />
        <Text textContent={'activites.friday.activities.1700.description'} />
        <TextTitle translation={'activites.friday.activities.1800.event'} />
        <Text textContent={'activites.friday.activities.1800.description'} />
        <TextTitle translation={'activites.friday.activities.2100.event'} />
        <Text textContent={'activites.friday.activities.2100.description'} />
        <TextTitle translation={'activites.friday.activities.2300.event'} />
        <Text textContent={'activites.friday.activities.2300.description'} />
    </div>
}

export default Friday