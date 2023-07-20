import Text from "../../components/Text Components/Text/Text"
import TextTitle from "../../components/TitleComponents/TextTitle/TextTitle"
import Title from "../../components/TitleComponents/H2Title/H2Title"


const Sunday = () => {
    return <div className="container">
        <Title title={'activites.sunday.title'} className="title title_mobile" />
        <TextTitle translation={'activites.sunday.activities.1130.event'} />
        <Text textContent={'activites.sunday.activities.1130.description'} />
        <TextTitle translation={'activites.sunday.activities.1230.event'} />
        <TextTitle translation={'activites.sunday.activities.1330.event'} />
        <Text textContent={'activites.sunday.activities.1330.description'} />
    </div>
}

export default Sunday