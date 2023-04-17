import "./styles.scss";
import { Link } from "react-router-dom";

const Textbox = (props) => {
  
    const titles = props.pages.map((page) => {
        return <Link className="title" to={page.link} >{page.title}</Link>
    })

    const content = props.content

    return <div className="textbox">
        <ul className="title--container">{titles}</ul>
        <div>
            {content}
        </div>
    </div>
    }

    export default Textbox 