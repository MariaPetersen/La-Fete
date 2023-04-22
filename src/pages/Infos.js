import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle';
// import Box from "../components/Box/Box";
import Textbox from "../components/Textbox/Textbox";
import { Outlet } from "react-router-dom";

const Infos = () => {
    return <div className="container">
    <Header />
    <PageTitle title="Informations pratiques" />
    <Textbox pages={pages} content={<Outlet />}/>
  </div>
}

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