import "./styles.scss";
import Menu from "../Menu Components/Menu/Menu";
import HamburgerMenu from "../Menu Components/HamburgerMenu/HamburgerMenu";


const Textbox = (props) => {
    const content = props.content
    return <div className="textbox">
        <Menu pages={props.pages} />
        <HamburgerMenu pages={props.pages} />
        <div>
            {content}
        </div>
    </div>
}



export default Textbox 