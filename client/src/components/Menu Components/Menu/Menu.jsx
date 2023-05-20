import MenuTitles from "../MenuTitles/MenuTitles"

const Menu = (props) => {
    const titles = props.pages.map((page) => {
        return <MenuTitles link={page.link} title={page.title} />
    })
    return <ul className="title--container">{titles}</ul>
}

export default Menu