import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const SectionAgenda = () => {
    return (
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
    );
};

export default SectionAgenda;