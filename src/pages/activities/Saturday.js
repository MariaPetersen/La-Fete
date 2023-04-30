import { Title } from "../../components/Textbox/Textbox"
import TextTitle from "../../components/PageTitle/TextTitle"
import { Text } from "../../components/Text/Text"

const Saturday = () => {
    return <div className="container">
        <Title title={'activites.saturday.title'} />
        <Text textContent={'activites.saturday.description'} />
        <Text textContent={'activites.saturday.activities'} />
        <TextTitle translation={'activites.saturday.ceremony.title'} />
        <Text textContent={'activites.saturday.ceremony.description'} />
    </div>
}

export default Saturday