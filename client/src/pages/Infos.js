import "./styles.scss"
import Header from '../components/Header/Header'
import PageTitle from '../components/TitleComponents/PageTitle/PageTitle';
// import Box from "../components/Box/Box";
import Textbox from "../components/Textbox/Textbox";
import { Outlet } from "react-router-dom";
import { withTranslation } from 'react-i18next';

const Infos = ({ t }) => {

  const pages = [
    {
      title: `${t('practicalInfo.location.title')}`,
      link: './lieu',
    },
    {
      title: `${t('practicalInfo.planning.title')}`,
      link: "./planning"
    },
    {
      title: `${t('practicalInfo.rooms.title')}`,
      link: "./chambres"
    },
    {
      title: `${t('practicalInfo.government.title')}`,
      link: "./government"
    },
  ]

  return <div className="container">
    <Header />
    <PageTitle title={t('practicalInfo.title')} />
    <Textbox pages={pages} content={<Outlet />} />
  </div>
}

export default withTranslation()(Infos)