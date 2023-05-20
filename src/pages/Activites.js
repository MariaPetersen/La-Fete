import React from "react";
import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from "../components/TitleComponents/PageTitle/PageTitle";
import Textbox from "../components/Textbox/Textbox";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Activites = () => {

  const { t } = useTranslation()
  const pages = [
    {
      title: `${t('activites.ceremonies.title')}`,
      link: './ceremonies',
    },
    {
      title: `${t('activites.friday.title')}`,
      link: "./friday"
    },
    {
      title: `${t('activites.saturday.title')}`,
      link: "./saturday"
    },
    {
      title: `${t('activites.sunday.title')}`,
      link: "./sunday"
    },
  ];

  return <div className="container">
    <Header />
    <PageTitle title={t('activites.title')} />
    <Textbox pages={pages} content={<Outlet />} />
  </div>
}

export default Activites