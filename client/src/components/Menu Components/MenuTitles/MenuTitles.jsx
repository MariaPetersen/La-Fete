import { NavLink } from "react-router-dom"

const MenuTitles = (props) => {
    return <NavLink className="title" to={props.link} onClick={props.handleClick}>{props.title}</NavLink>
}

export default MenuTitles