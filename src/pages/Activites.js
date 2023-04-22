import React from "react";
import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle';
import Textbox from "../components/Textbox/Textbox";
import { Outlet } from "react-router-dom";

const Activites = () => {
    return <div className="container">
    <Header />
    <PageTitle title="Activités" />
    <Textbox pages={pages} content={<Outlet />}/>
  </div>
}

const pages = [
  ]


export default Activites