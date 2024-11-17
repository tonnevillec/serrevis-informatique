import React from 'react';
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <header className="z-100 flex flex-col fixed top-0 left-0 w-full">
            <div
                className="p-2 flex flex-row items-center justify-center bg-serrevis-100 w-full">
                    <Link to={"section-header"} className="text-xl text-white">Serre-Vis Informatique</Link>
            </div>

            <section className={"flex flex-row items-center justify-center bg-blue-100 w-full shadow-lg"}>
                <Link smooth spy activeClass={"bg-blue-200"} className={"cursor-pointer px-6 py-3 text-white font-bold"} to={"section-header"}>Accueil</Link>
                <Link smooth spy activeClass={"bg-blue-200"} className={"cursor-pointer px-6 py-3 text-white font-bold"} to={"section-services"}>Services & Tarifs</Link>
                <Link smooth spy activeClass={"bg-blue-200"} className={"cursor-pointer px-6 py-3 text-white font-bold"} to={"section-apropos"}>A propos</Link>
                <Link smooth spy activeClass={"bg-blue-200"} className={"cursor-pointer px-6 py-3 text-white font-bold"} to={"section-coordonnees"}>Coordonnées</Link>
                <Link smooth spy activeClass={"bg-blue-200"} className={"cursor-pointer px-6 py-3 text-white font-bold"} to={"section-agenda"}>Agenda</Link>
                <Link smooth spy activeClass={"bg-blue-200"} className={"cursor-pointer px-6 py-3 text-white font-bold"} to={"section-avis"}>Avis</Link>
            </section>
        </header>
    );
};

export default Navbar;