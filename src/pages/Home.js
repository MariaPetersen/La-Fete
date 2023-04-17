import React from "react";
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle';
import Text from '../components/Text/Text'
import Box from '../components/Box/Box';

const Home = () => {
    return <div className="container">
    <Header />
    <PageTitle title="Présentation" arrowClass="invisible"/>
    <Text textContent={paragraphOne}/>
    <Text textContent={paragraphTwo}/>
    <Box boxes={boxes}/>
  </div>
}

const paragraphOne = "La Fête continue en 2023 pour une édition magique et grandiose avec juste la bonne dose de folie. Réservez votre weekend du 20-23 juillet ! (possibilité de rester jusqu'au lundi 24 juillet comme d'habitude)."
const paragraphTwo = "Cette année on vous propose le thème Bacchanale de l’Espace : et si la mythologie grecque rencontrait les aliens ? On reviendra rapidement avec plus d’infos et suggestions de costumes."

const boxes = [
  {id: 1, 
  className: "box box--one",
  name: "Informations pratiques",
  link: "./infos"},
  {id: 2, 
  className: "box box--two",
  name: "Activités",
  link: "./activites"},
  {id: 3,
  className: "box box--three",
  name: "Valeurs",
  link: "./valeurs"},
  {id: 4,
  className: "box box--four",
  name: "Inscriptions et propositions",
  link: "./inscription"}
]

export default Home