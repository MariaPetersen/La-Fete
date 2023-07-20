import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import TextTitle from "../../components/TitleComponents/TextTitle/TextTitle"

const Saturday = () => {
    return <div className="container">
        <Title title={'activites.saturday.title'} className="title title_mobile" />
        <TextTitle translation={'activites.saturday.activities.1130.event'} />
        <Text textContent={'activites.saturday.activities.1130.description'} />
        <TextTitle translation={'activites.saturday.activities.1300.event'} />
        <TextTitle translation={'activites.saturday.activities.1400.event'} />
        <Text textContent={'activites.saturday.activities.1400.description'} />
        <TextTitle translation={'activites.saturday.activities.1500.event'} />
        <Text textContent={'activites.saturday.activities.1500.description'} />
        <TextTitle translation={'activites.saturday.activities.1700.event'} />
        <Text textContent={'activites.saturday.activities.1700.description'} />
        <TextTitle translation={'activites.saturday.activities.1830.event'} />
        <Text textContent={'activites.saturday.activities.1830.description'} />
        <TextTitle translation={'activites.saturday.activities.1930.event'} />
        <Text textContent={'activites.saturday.activities.1930.description'} />
        <TextTitle translation={'activites.saturday.activities.2100.event'} />
        <TextTitle translation={'activites.saturday.activities.2300.event'} />
        <Text textContent={'activites.saturday.activities.2300.description'} />
    </div>
}

export default Saturday