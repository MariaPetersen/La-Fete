import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle';
// import Box from "../components/Box/Box";
import Textbox from "../components/Texbox/Textbox";
import { Outlet } from "react-router-dom";

const Infos = () => {
    return <div className="container">
    <Header />
    <PageTitle title="Informations pratiques" />
    <Textbox pages={pages} content={<Outlet />}/>
  </div>
}


// const boxes = [
//   {id: 1, 
//   className: "box box--one",
//   name: "Lieu",
//   link: "./lieu"},
//   {id: 2, 
//   className: "box box--two",
//   name: "Plannning cuisine et ménage",
//   link: "./planning"},
//   {id: 3,
//   className: "box box--three",
//   name: "Chambres et wifi",
//   link: "./chambres"},
//   {id: 4,
//   className: "box box--four",
//   name: "Transport",
//   link: "./transport"},
//   {id: 5, 
//   className: "box box--five",
//   name: "Gouvernement",
//   link: "./gouvernement"}
// ]

const pages = [
  {title: "Lieu",
  link: './lieu',},
  {title: "Planning cuisine et ménage",
  link: "./planning"},
 {title: "Chambres et wifi",
 link: "./chambres"},
 {title: "Transport", 
 link: "./transport"},
 {title: "Gouvernement",
link: "./gouvernement"}]

export default Infos