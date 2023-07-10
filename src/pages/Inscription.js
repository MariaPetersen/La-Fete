import React from "react";
import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from '../components/TitleComponents/PageTitle/PageTitle';
import Textbox from "../components/Textbox/Textbox";
import { Outlet } from "react-router-dom";
import RegistrationForm from "../components/Forms/RegistrationForm";

const Inscription = () => {
  return <div className="container">
    <Header />
    <PageTitle title="Inscriptions et propositions" />
    <Textbox pages={pages} content={< RegistrationForm />} />
  </div>
}

const pages = [
]

export default Inscription