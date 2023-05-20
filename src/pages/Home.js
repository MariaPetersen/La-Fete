import React from "react";
import Header from '../components/Header/Header'
import PageTitle from '../components/TitleComponents/PageTitle/PageTitle';
import Paragraph from "../components/Text Components/Paragraph/Paragraph";
import Box from '../components/Box/Box';
import "./styles.scss"
import { withTranslation } from 'react-i18next';

const Home = ({ t }) => {

  const boxes = [
    {
      id: 1,
      className: "box box--one",
      name: `${t('home.menu.one')}`,
      link: "./infos"
    },
    {
      id: 2,
      className: "box box--two",
      name: `${t('home.menu.two')}`,
      link: "./activites"
    },
    {
      id: 3,
      className: "box box--three",
      name: `${t('home.menu.three')}`,
      link: "./valeurs"
    },
    // {
    //   id: 4,
    //   className: "box box--four",
    //   name: "Inscriptions et propositions",
    //   link: "./inscription"
    // }
  ]

  return <div className="container">
    <Header />
    <PageTitle title={'home.title'} arrowClass="invisible" />
    <div className="textbox--home">

      <Paragraph textContent={'home.paragraphs.one'} />
      <Paragraph textContent={'home.paragraphs.two'} />
      <Paragraph textContent={'home.paragraphs.three'} />
      <Paragraph textContent={'home.paragraphs.four'} />
      <Box boxes={boxes} />
    </div>
  </div>
}

export default withTranslation()(Home)