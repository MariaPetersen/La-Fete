import { use } from "i18next";
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const registrationData = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            date: formData.get("date"),
            price: formData.get("price"),
            sleep: formData.get("sleep"),
            sheets: formData.get("sheets"),
            food: formData.get("food"),
            participation: formData.get("participation"),
            question: formData.get("anythingToAdd")
        };
        axios
            .post("http://localhost:8888/api/index.php", {
                registrationData
            })
            .then((response) => {
                console.log("hello");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Ton nom ?</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ton nom..."
                />
            </div>
            <div>
                <label htmlFor="phone">
                    Numéro de téléphone (avec le code international, +33 pour la
                    France){" "}
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Ton numéro..."
                />
            </div>

            <fieldset>
                <legend>
                    Numéro de téléphone (avec le code international, +33 pour la
                    France)
                </legend>
                <div>
                    <input type="checkbox" id="thursday" name="date" />
                    <label htmlFor="thursday">
                        Jeudi 20 juillet (à partir de 17h)
                    </label>
                </div>
                <div>
                    <input type="checkbox" id="friday" name="date" />
                    <label htmlFor="friday">Vendredi 21 juillet</label>
                </div>
                <div>
                    <input type="checkbox" id="saturday" name="date" />
                    <label htmlFor="saturday">Samedi 22 juillet</label>
                </div>
                <div>
                    <input type="checkbox" id="sunday" name="date" />
                    <label htmlFor="sunday">Dimanche 23 juillet</label>
                </div>
                <div>
                    <input type="checkbox" id="monday" name="date" />
                    <label htmlFor="monday">Lundi 24 juillet</label>
                </div>
            </fieldset>

            <fieldset>
                <legend>
                    <str>Parlons d'argent</str> <br />
                    On aimerait que chacun·e contribue aux frais selon ses
                    moyens et sa situation. Les différents tarifs correspondent
                    à l'intégralité du séjour sur trois jours
                    (vendredi/samedi/dimanche) et comprenant la location du gîte
                    (le plus gros budget), la nourriture, la boisson et autres.
                    Il ne devrait vous rester que le transport à payer. La nuit
                    du jeudi au vendredi et celle du dimanche au lundi sont en
                    option, soit 30€ en plus. <br />
                    Nous vous faisons confiance pour vous mettre dans la
                    catégorie qui vous correspond. Si vous avez des soucis
                    financiers, n'hésitez pas à nous contacter car nous voulons
                    que La Fête soit vraiment inclusive et que l'argent ne soit
                    pas une raison pour ne pas participer (et nous ne partageons
                    jamais le montant payé par les personnes avec qui que ce
                    soit).
                </legend>
                <div>
                    <input type="radio" id="low" name="price" />
                    <label htmlFor="low">
                        Tarif réduit (90€/80£) : personnes en galère financière,
                        à bas revenus, en études, au chômage
                    </label>
                </div>
                <div>
                    <input type="radio" id="normal" name="price" />
                    <label htmlFor="normal">
                        Tarif normal (150€/130£) : personnes ni en galère ni
                        confortables, avec un salaire ok
                    </label>
                </div>
                <div>
                    <input type="radio" id="high" name="price" />
                    <label htmlFor="high">
                        Tarif grand luxe (210€/190£) : personnes à l'aise
                        financièrement, autour de 2000€ ou plus par mois (sans
                        charge particulière)
                    </label>
                </div>
            </fieldset>

            <fieldset>
                <legend>Le transport ?</legend>
                <div>
                    <input type="radio" id="haveCar" name="sleep" />
                    <label htmlFor="haveCar">
                        J'ai une voiture et j'ai de la place pour embarquer du
                        monde.
                    </label>
                </div>
                <div>
                    <input type="radio" id="haveLicence" name="sleep" />
                    <label htmlFor="haveLicence">
                        J'ai un permis valable en France, je pourrais louer une
                        voiture pour y aller en groupe.
                    </label>
                </div>
                <div>
                    <input type="radio" id="takeTrain" name="sleep" />
                    <label htmlFor="takeTrain">
                        Je prendrai le train jusqu'à Saint-Florentin Vergigny et
                        j'aimerais qu'on vienne me chercher à la gare (on mettra
                        des horaires de train sur le site pour se coordonner là
                        dessus)
                    </label>
                </div>
                <div>
                    <input type="radio" id="takeTrain" name="sleep" />
                    <label htmlFor="takeTrain">
                        Je prendrai le train jusqu'à Saint-Florentin Vergigny et
                        j'aimerais qu'on vienne me chercher à la gare (on mettra
                        des horaires de train sur le site pour se coordonner là
                        dessus)
                    </label>
                </div>
                <div>
                    <input type="radio" id="other-transport" name="other" />
                    <label htmlFor="other-transport">Autre : </label>
                    <input type="text" id="other-text" name="other" />
                </div>
            </fieldset>

            <fieldset>
                <legend>
                    <str>Le dodo ?</str> <br />
                    Il y a des chambres de différentes tailles (de 2 à 5
                    places), toutes ont une salle de bain à proximité. On fera
                    un plan de chambres selon les préférences des gens. Que
                    préfères-tu ?
                </legend>
                <div>
                    <input type="radio" id="sleepWithFriends" name="sleep" />
                    <label htmlFor="sleepWithFriends">
                        Je serais plus à l'aise de dormir avec des gens que je
                        connais déjà
                    </label>
                </div>
                <div>
                    <input type="radio" id="sleepWithGender" name="sleep" />
                    <label htmlFor="sleepWithGender">
                        Je préfères dormir avec des personnes du même genre que
                        moi
                    </label>
                </div>
                <div>
                    <input type="radio" id="sleepWithAny" name="sleep" />
                    <label htmlFor="sleepWithAny">
                        Tant que j'ai un lit, ça me va !
                    </label>
                </div>
            </fieldset>

            <fieldset>
                <legend>
                    Les draps ne sont pas inclus, il faut en prendre pour soi.
                    Tu pourrais en prendre un de plus au cas où des gens
                    galèreraient à en ramener ?
                </legend>
                <div>
                    <input type="radio" id="haveSheets" name="sheets" />
                    <label htmlFor="haveSheets">Oui pas de problème</label>
                </div>
                <div>
                    <input type="radio" id="dontHaveSheets" name="sheets" />
                    <label htmlFor="dontHaveSheets">
                        Compliqué pour moi, déso
                    </label>
                </div>
            </fieldset>

            <div>
                <label htmlFor="food">
                    <str>Manger !</str> Un régime alimentaire (végé, vegan,
                    allergies...) ou des questions de santé à nous signaler ?{" "}
                </label>
                <input type="text" id="food" name="food" />
            </div>

            <fieldset>
                <legend>
                    <str>Le plus fun : la participation ! </str>
                    <br />
                    On souhaite que la Fête soit construite ensemble, que
                    chacun·e puisse contribuer à sa manière, selon ses envies et
                    talents. Comment aimeriez-vous participer ?
                </legend>
                <div>
                    <input type="checkbox" id="cooking" name="participation" />
                    <label htmlFor="cooking">
                        La bouffe ! Participer à la cuisine (être chef cuisto
                        sur un repas ou bien commis de cuisine)
                    </label>
                </div>
                <div>
                    <input type="checkbox" id="music" name="participation" />
                    <label htmlFor="music">
                        Music/DJayyy (faites-nous savoir quel équipement vous
                        avez/vous avez besoin)
                    </label>
                </div>
                <div>
                    <input type="checkbox" id="cleaning" name="participation" />
                    <label htmlFor="cleaning">
                        Team environnement et propreté : s'assurer que tout le
                        monde fait bien le recyclage, jette ses déchets etc
                    </label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="workshops"
                        name="participation"
                    />
                    <label htmlFor="workshops">
                        Organiser une activité (aquagym, chant, macramé, atelier
                        sur un sujet qui te passionne ... on est ouvert·es à
                        tout)
                    </label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="ceremonies"
                        name="participation"
                    />
                    <label htmlFor="ceremonies">
                        Les cérémonies, je veux donner un coup de main à
                        organiser les soirées et rituels
                    </label>
                </div>
                <div>
                    <input type="checkbox" id="consent" name="participation" />
                    <label htmlFor="consent">
                        Responsable du consentement et gestion de risques (aka,
                        la personne qu'on va voir à 5h du matin parce qu'on a
                        pas de capotes oups)
                    </label>
                </div>
                <div>
                    <input type="checkbox" id="welfare" name="participation" />
                    <label htmlFor="welfare">
                        M'occuper du bien-être des gens (être dispo et
                        empathique pour les gens qui se sentiraient pas bien)
                    </label>
                </div>
            </fieldset>

            <div>
                <label htmlFor="anythingToAdd">
                    Un truc à ajouter, une remarque, une question ?
                </label>
                <input type="text" id="anythingToAdd" name="anythingToAdd" />
            </div>

            <input type="submit" value="Envoyer" />
        </form>
    );
};

export default RegistrationForm;
