import Text from "../../components/Text Components/Text/Text"
import Title from "../../components/TitleComponents/H2Title/H2Title"


const Sunday = () => {
    return <div className="container">
        {/* <Title title={'activites.sunday.title'} /> */}
        <Text textContent={'activites.sunday.description'} />
        <Text textContent={'activites.sunday.activities'} />
    </div>
}

export default Sunday