import React from 'react';
import hello from "../assets/hello.svg"
import SectionServices from "./services/SectionServices.jsx";
import SectionApropos from "./apropos/SectionApropos.jsx";
import SectionCoordonnees from "./coordonnees/SectionCoordonnees.jsx";
import SectionAgenda from "./agenda/SectionAgenda.jsx";
import SectionAvis from "./avis/SectionAvis.jsx";
import SectionVentes from "./vente/SectionVentes.jsx";

const Landing = () => {
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

            <SectionServices />

            <SectionVentes />

            <SectionApropos />

            <SectionCoordonnees />

            {/*<SectionAgenda />*/}

            {/*<SectionAvis />*/}
        </>
    );
};

export default Landing;