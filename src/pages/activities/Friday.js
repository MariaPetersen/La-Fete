import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import TextTitle from "../../components/TitleComponents/TextTitle/TextTitle"

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