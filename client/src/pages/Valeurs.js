import React from "react";
import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from '../components/TitleComponents/PageTitle/PageTitle';
import Textbox from "../components/Textbox/Textbox";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Text from "../components/Text Components/Text/Text";

const Valeurs = () => {

  const { t } = useTranslation()

  const pages = [
    {
      title: `${t('values.bilinguism.title')}`,
      link: './bilinguism',
    },
    {
      title: `${t('values.participation.title')}`,
      link: "./participation"
    },
    {
      title: `${t('values.selfexpression.title')}`,
      link: "./selfexpression"
    },
    {
      title: `${t('values.tolerance.title')}`,
      link: "./tolerance"
    },
    {
      title: `${t('values.consent.title')}`,
      link: "./consent"
    },
    {
      title: `${t('values.traces.title')}`,
      link: "./traces"
    },
    {
      title: `${t('values.gifts.title')}`,
      link: "./gifts"
    },
    {
      title: `${t('values.privacy.title')}`,
      link: "./privacy"
    },
    {
      title: `${t('values.autonomy.title')}`,
      link: "./autonomy"
    },
  ]

  return <div className="container">
    <Header />
    <PageTitle title={t('values.title')} />
    <Text textContent={'values.description'} className="values__description" />
    <Textbox pages={pages} content={<Outlet />} />
  </div>
}



export default Valeurs