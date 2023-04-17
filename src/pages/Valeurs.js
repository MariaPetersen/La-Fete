import React from "react";
import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle';
import Textbox from "../components/Texbox/Textbox";
import { Outlet } from "react-router-dom";

const Valeurs = () => {
    return <div className="container">
    <Header />
    <PageTitle title="Valeurs" />
    <Textbox pages={pages} content={<Outlet />}/>
  </div>
}
const pages = [
]

export default Valeurs