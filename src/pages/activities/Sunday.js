import { Title } from "../../components/Textbox/Textbox"
import TextTitle from "../../components/PageTitle/TextTitle"
import { Text } from "../../components/Text/Text"

const Sunday = () => {
    return <div className="container">
        <Title title={'activites.sunday.title'} />
        <Text textContent={'activites.sunday.description'} />
        <Text textContent={'activites.sunday.activities'} />
    </div>
}

export default Sunday