import React, {useState} from 'react';
import hello from "../assets/hello.svg"
import ServiceDepannage from "./services/ServiceDepannage.jsx";
import ServiceAteliers from "./services/ServiceAteliers.jsx";
import ServiceAssistance from "./services/ServiceAssistance.jsx";
import AboutCarousel from "./apropos/AboutCarousel.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faFaceFrown,
    faFaceMeh,
    faFaceSmile,
    faFaceSmileBeam,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import Map from "./Map.jsx";

const Landing = () => {
    const [service, setService] = useState('depannage')

    return (
        <>
            <section className="w-full bg-gradient-to-b from-blue-100 py-24" id={"section-header"}>
                <div className="flex container mx-auto flex-row">
                    <div className={"pe-6"}>
                        <h1 className="text-5xl font-bold">Serre-Vis Informatique</h1>
                        <p className="pt-5 text-justify">
                            La boutique Serre-Vis informatique vous propose un Atelier de dépannage pour votre matériel
                            informatique, toutes marques et tous modèles, ainsi que la possibilité d’acheter du matériel
                            reconditionné!
                            <br/>Nous pouvons également vous aider pour toutes vos démarches administratives!
                            Et enfin, venez apprendre par vous-même à maintenir votre matériel grâce aux ateliers de
                            groupe les samedis!
                            <br/>Sur place et tous les jours !
                        </p>
                        <p className={"text-right"}>À votre serre-vis</p>
                    </div>

                    <img src={hello} className="max-w-lg" alt="Bienvenue sur le site de serre-vis informatique!"/>
                </div>
            </section>

            <section className={"w-full bg-white py-8"} id={"section-services"}>
                <div className={"container mx-auto mb-4"}>
                    <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b"}>Services & Tarifs</h2>

                    <p className={"w-full text-red-700 text-center my-4"}>Aucune prestation de services n'est éligible
                        au crédit d'impôt</p>

                    <div className={"grid grid-cols-3 gap-4"}>
                        <button type={"button"}
                                className={`btn ${service === 'depannage' ? 'btn-primary' : 'btn-ghost'}`}
                                onClick={() => setService('depannage')}>
                            Dépannage
                        </button>

                        <button type={"button"}
                                className={`btn ${service === 'ateliers' ? 'btn-warning' : 'btn-ghost'}`}
                                onClick={() => setService('ateliers')}>
                            Ateliers de groupe
                        </button>

                        <button type={"button"}
                                className={`btn ${service === 'assistance' ? 'btn-accent text-white' : 'btn-ghost'}`}
                                onClick={() => setService('assistance')}>
                            Assistance bureautique
                        </button>
                    </div>

                    {service === 'depannage' && <ServiceDepannage/>}
                    {service === 'ateliers' && <ServiceAteliers/>}
                    {service === 'assistance' && <ServiceAssistance/>}
                </div>

                <div className="container mx-auto">
                    <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b"}>Paiement en boutique</h2>

                    <div className={"w-full grid grid-cols-3 gap-4"}>
                        <div className="card m-4 basis-1/4 shadow-xl">
                            <div className="card-body p-4">
                                <h2 className="card-title">Moyens de paiement acceptés directement au comptoir</h2>
                                <ul className="w-full p-2 text-sm">
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Carte bancaire</b> (avec insertion ou sans contact) - Pas de plafond de
                                        montant
                                    </li>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Appli banque</b> sur smartphone en sans contact - Pas de plafond de montant
                                    </li>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Appli banque</b> pour virement bancaire - Pas de plafond de montant
                                    </li>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Espèces</b> - Montant maximal selon la limite francaise de 1000€ par facture
                                    </li>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Alma</b> - 2x, 3x ou 4x - de 50€ à 2000€ - Pour particulier uniquement -
                                        Frais à la charge du client
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card m-4 basis-1/4 shadow-xl">
                            <div className="card-body p-4">
                                <h2 className="card-title">Moyens de paiement différés acceptés</h2>
                                <ul className="w-full p-2 text-sm">
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Virement bancaire</b> Pas de plafond de montant, mais attente de réception du paiement sur le compte avant remise de la commande (comptez 48h d’attente minimum après envoi du virement)
                                    </li>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Mandat administratif</b> via la plateforme ChorusPro - Montant maximal de 2500€ par facture (Utile pour les établissements administratifs : écoles, police, gendarmeries, caisse maladie, etc<br/>
                                        Et nécessitant un bon de commande administratif correctement rempli et signé)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card m-4 basis-1/4 shadow-xl bg-error text-white">
                            <div className="card-body p-4">
                                <h2 className="card-title">Moyens de paiement non acceptés</h2>
                                <ul className="w-full p-2 text-sm">
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Chèques</b>
                                    </li>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Titre cadeaux</b>
                                    </li>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Chèque vacances</b>
                                    </li>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                        <b>Cartes génération #HDF</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"w-full bg-white py-8"} id={"section-apropos"}>
                <div className={"container mx-auto"}>
                    <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>A propos</h2>

                    <div className={"w-full grid grid-cols-2 gap-4"}>

                        <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full grid grid-row mb-4"}>
                            <div className="w-full mb-2">
                                <h3 className={"card-title"}>Une boutique</h3>
                                <div className={"p-3"}>
                                    <p className={"mb-1"}>Un <b>local d’une surface de 53m²</b> <b>ouvert tous les
                                        jours</b></p>
                                    <p className={"mb-1"}>Un porche d’entrée pour déposer et sécuriser vos vélos /
                                        trottinettes</p>
                                    <p className={"mb-1"}>Un espace client de 10m² avec le <b>coin reconditionné</b> et
                                        son bac
                                        pour les parapluies</p>
                                    <p className={"mb-1"}>Un <b>Atelier de 15m²</b> comprenant 5 plans de travail et
                                        visible
                                        depuis la vitrine extérieure</p>
                                    <p className={"mb-1"}>Une <b>cabine de dépoussiérage isolée hermétiquement</b>
                                    </p>
                                </div>
                            </div>

                            <AboutCarousel/>
                        </div>

                        <div className={"grid grid-row gap-2"}>
                            <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full grid grid-cols-3"}>
                                <div className="col-span-2">
                                    <h3 className={"card-title"}>Un technicien</h3>
                                    <div className={"p-3"}>
                                        <p className={"mb-1 text-justify"}>C’est après plusieurs années de formations et
                                            d’expériences au sein des enseignes
                                            d’un grand Groupe national en tant que <b>Monteur PC</b>, <b>Technicien
                                                conseil</b> ainsi
                                            que <b>Responsable de boutique</b> que je me suis décidé à vous accueillir,
                                            à vous
                                            proposer <u>plus de services</u>, et tout ça selon <u>mes valeurs</u>
                                        </p>
                                        <p className={"mb-1 text-justify"}>Dans l’Atelier, je vous propose <b>différents
                                            services liés à l’informatique</b> pour <b>vous aider dans vos différents
                                            besoins</b>, et <b>répondre à vos attentes</b>,
                                            <b>d’humain à humain</b>, sans magie</p>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <figure className={"col-span-1"}>
                                        <img src={"https://picsum.photos/800/600"} className={"object-cover"} alt={""}/>
                                    </figure>

                                    <div className={"w-full text-center"}>Benoit RICOU</div>
                                </div>
                            </div>

                            <div className="w-full rounded-2xl shadow-lg bg-base-100 p-4">
                                <h3 className={"card-title"}>Des valeurs</h3>
                                <div className={"p-3"}>
                                    <p className={"mb-1"}><b>L’Éco-responsabilité</b> : un aménagement fait à partir de
                                        recyclé, un bac de DEEE pour déposer vos pièces électroniques, la réparation et
                                        le remplacement par du reconditionné plutôt que par du neuf.</p>

                                    <p className={"mb-1"}><b>L’entraide</b> : Grâce aux prestations pour apprendre à
                                        faire d’être magicien pour dompter l’outil informatique. Ici vous ne paierez pas
                                        pour
                                        les autres mais pour ce pour quoi vous êtes venu.</p>

                                    <p>Je vous laisse découvrir</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"w-full bg-white py-8"} id={"section-contact"}>
                <div className={"container mx-auto"}>
                    <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>Coordonnées</h2>

                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="col-span-1">
                            <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full mb-4"}>
                                <h3 className={"w-full font-bold"}>
                                    Coordonnées de contact :
                                </h3>
                                <p className={"mb-4"}>
                                    2/4 Place Jules Guesde<br/>
                                    59810 LESQUIN<br/>
                                    <br/>
                                    <FontAwesomeIcon icon={faPhone}
                                                     className={"me-2"}></FontAwesomeIcon>03.65.67.05.18<br/>
                                    <br/>
                                    <FontAwesomeIcon icon={faEnvelope} className={"me-2"}></FontAwesomeIcon>contact@serrevis-informatique.fr
                                </p>

                                <h3 className={"w-full font-bold"}>
                                    Horaires d'ouverture :
                                </h3>
                                <table className={"table table-xs"}>
                                    <tbody>
                                    <tr>
                                        <td>Lundi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Mardi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Mercredi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Jeudi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Vendredi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Samedi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>
                                            Atelier de groupe
                                            <br/>14h30 - 18h
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dimanche :</td>
                                        <td>9h - 12h</td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full mb-4"}>
                                <h3 className={"w-full font-bold"}>
                                    Plan d'accès :
                                </h3>

                                <Map/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"w-full bg-white py-8"} id={"section-agenda"}>
                <div className={"container mx-auto"}>
                    <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>Agenda</h2>

                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="col-span-1">
                            <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full mb-4"}>
                                <h3 className={"w-full font-bold"}>
                                    Coordonnées de contact :
                                </h3>
                                <p className={"mb-4"}>
                                    2/4 Place Jules Guesde<br/>
                                    59810 LESQUIN<br/>
                                    <br/>
                                    <FontAwesomeIcon icon={faPhone}
                                                     className={"me-2"}></FontAwesomeIcon>03.65.67.05.18<br/>
                                    <br/>
                                    <FontAwesomeIcon icon={faEnvelope} className={"me-2"}></FontAwesomeIcon>contact@serrevis-informatique.fr
                                </p>

                                <h3 className={"w-full font-bold"}>
                                    Horaires d'ouverture :
                                </h3>
                                <table className={"table table-xs"}>
                                    <tbody>
                                    <tr>
                                        <td>Lundi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Mardi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Mercredi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Jeudi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Vendredi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>14h30 - 18h</td>
                                    </tr>
                                    <tr>
                                        <td>Samedi :</td>
                                        <td>8h30 - 12h</td>
                                        <td>
                                            Atelier de groupe
                                            <br/>14h30 - 18h
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dimanche :</td>
                                        <td>9h - 12h</td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full mb-4"}>
                                <h3 className={"w-full font-bold"}>
                                    Plan d'accès :
                                </h3>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"w-full bg-white py-8"} id={"section-avis"}>
                <div className={"container mx-auto"}>
                    <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>Avis</h2>

                    <div className="grid grid-cols-4 gap-4 w-full">

                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <span className={"text-xl text-green-500 me-2"}><FontAwesomeIcon icon={faFaceSmileBeam}
                                                                                                     className={"me-2"}></FontAwesomeIcon></span>Parfait!
                                </h2>
                                <p>Réparation rapide et sans problème!<br/>Je recommande</p>
                                <div className="flex w-full justify-between">
                                    <span className="text-sm">
                                        Cyril T.
                                    </span>

                                    <span className="text-sm italic">
                                        16/11/2024
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <span className={"text-xl text-blue-500 me-2"}>
                                        <FontAwesomeIcon icon={faFaceSmile} className={"me-2"}></FontAwesomeIcon></span>Mouais!
                                </h2>
                                <p>Réparation rapide et sans problème!<br/>Je recommande</p>
                                <div className="flex w-full justify-between">
                                    <span className="text-sm">
                                        Cyril T.
                                    </span>

                                    <span className="text-sm italic">
                                        16/11/2024
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <span className={"text-xl text-orange-500 me-2"}>
                                        <FontAwesomeIcon icon={faFaceMeh} className={"me-2"}></FontAwesomeIcon></span>Bof!
                                </h2>
                                <p>
                                    Réparation rapide et sans problème!<br/>Je recommande
                                    <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda at autem, beatae commodi consequuntur dolor ex harum ipsum iusto, magni nam necessitatibus neque, provident quo repudiandae similique ullam velit...
                                </p>
                                <div className="flex w-full justify-between">
                                    <span className="text-sm">
                                        Cyril T.
                                    </span>

                                    <span className="text-sm italic">
                                        16/11/2024
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <span className={"text-xl text-red-500 me-2"}>
                                        <FontAwesomeIcon icon={faFaceFrown} className={"me-2"}></FontAwesomeIcon></span>Mécontent
                                </h2>
                                <p>C'est pas un vrai commentaire, c'est juste pour afficher le smiley "pas content"!
                                </p>
                                <div className="flex w-full justify-between">
                                    <span className="text-sm">
                                        Cyril T.
                                    </span>

                                    <span className="text-sm italic">
                                        16/11/2024
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;