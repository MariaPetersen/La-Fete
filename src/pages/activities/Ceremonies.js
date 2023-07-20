import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import TextTitle from "../../components/TitleComponents/TextTitle/TextTitle"

const Ceremonies = () => {
    return <div className="container">
        <Title title={'activites.ceremonies.title'} className="title title_mobile" />
        <Text textContent={'activites.ceremonies.description'} />
        <TextTitle translation={'activites.ceremonies.events.friday.title'} />
        <Text textContent={'activites.ceremonies.events.friday.description'} />
        <TextTitle translation={'activites.ceremonies.events.saturday.title'} />
        <Text textContent={'activites.ceremonies.events.saturday.description'} />
    </div>
}

export default Ceremonies