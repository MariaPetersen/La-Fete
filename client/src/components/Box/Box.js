import "./styles.scss";
import { Link } from "react-router-dom"; 

const Box = (props) => {
    const boxList = props.boxes.map((box) => 
        <Link to={box.link} key={box.id} className={box.className}>{box.name}</Link>
    );
    return <div className="box--container">{boxList}</div>
}

export default Box