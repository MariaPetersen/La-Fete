import { useState } from "react";
import MenuTitles from "../MenuTitles/MenuTitles";

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

export default HamburgerMenu