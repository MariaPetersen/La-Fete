import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"
import TextTitle from "../../components/TitleComponents/TextTitle/TextTitle"

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