import React from 'react';
import AboutCarousel from "./AboutCarousel.jsx";

const SectionApropos = () => {
    return (
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
    );
};

export default SectionApropos;