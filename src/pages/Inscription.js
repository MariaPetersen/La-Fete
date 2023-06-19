import React from "react";
import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from '../components/TitleComponents/PageTitle/PageTitle';
import Textbox from "../components/Textbox/Textbox";
import Forms from "./Forms";
import { Outlet } from "react-router-dom";

const Inscription = () => {
  return <div className="container">
    <Header />
    <PageTitle title="Inscriptions et propositions" />
    <Textbox pages={pages} content={< Forms />} />
  </div>
}

const pages = [
]

export default Inscription