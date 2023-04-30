import { Title } from "../../components/Textbox/Textbox"
import TextTitle from "../../components/PageTitle/TextTitle"
import { Text } from "../../components/Text/Text"

const Friday = () => {
    return <div className="container">
        <Title title={'activites.friday.title'} />
        <Text textContent={'activites.friday.description'} />
        <Text textContent={'activites.friday.activities'} />
        <TextTitle translation={'activites.friday.ceremony.title'} />
        <Text textContent={'activites.friday.ceremony.description'} />
    </div>
}

export default Friday