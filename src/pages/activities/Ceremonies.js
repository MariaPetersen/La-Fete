import { Text } from "../../components/Text/Text"
import TextTitle from "../../components/PageTitle/TextTitle"
import { Title } from "../../components/Textbox/Textbox"

const Ceremonies = () => {
    return <div className="container">
        <Title title={'activites.ceremonies.title'} />
        <Text textContent={'activites.ceremonies.description'} />
        <TextTitle translation={'activites.ceremonies.events.friday.title'} />
        <Text textContent={'activites.ceremonies.events.friday.description'} />
        <TextTitle translation={'activites.ceremonies.events.saturday.title'} />
        <Text textContent={'activites.ceremonies.events.saturday.description'} />
    </div>
}

export default Ceremonies