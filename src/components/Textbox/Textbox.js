
import { useState } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Title = (props) => {
    const { t } = useTranslation();
    return <h2 className="title">{t(props.title)}</h2>
}

const MenuTitles = (props) => {
    return <NavLink className="title" to={props.link} onClick={props.handleClick}>{props.title}</NavLink>
}

const HamburgerMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const titles = props.pages.map((page) => {
        return <MenuTitles link={page.link} title={page.title} handleClick={() => setIsOpen(false)} />
    })

    return isOpen ?
        (<ul className="title--hamburger">{titles}</ul>) :
        (<div className="title--hamburger" onClick={() => setIsOpen(true)}>
            <div className="menu-button"></div>
        </div>)
}

const Menu = (props) => {
    const titles = props.pages.map((page) => {
        return <MenuTitles link={page.link} title={page.title} />
    })
    return <ul className="title--container">{titles}</ul>
}

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