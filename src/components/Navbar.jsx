import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="z-100 flex flex-col fixed top-0 left-0 w-full">
            <div
                className="p-2 flex flex-row items-center justify-center bg-serrevis-100 w-full">
                    <Link to={"/#section-header"} className="text-xl text-white">Serre-Vis Informatique</Link>
            </div>

            <section className={"flex flex-row items-center justify-center bg-blue-100 w-full shadow-lg"}>
                <Link className={"px-6 py-3 bg-blue-200 text-white font-bold"} to={"/#section-header"}>Accueil</Link>
                <Link className={"px-6 py-3 hover:bg-blue-200 text-white font-bold"} to={"/#section-services"}>Services & Tarifs</Link>
                <Link className={"px-6 py-3 hover:bg-blue-200 text-white font-bold"} to={"/#section-apropos"}>A propos</Link>
                <Link className={"px-6 py-3 hover:bg-blue-200 text-white font-bold"} to={"/#section-contact"}>Contact</Link>
                <Link className={"px-6 py-3 hover:bg-blue-200 text-white font-bold"} to={"/#section-agenda"}>Agenda</Link>
                <Link className={"px-6 py-3 hover:bg-blue-200 text-white font-bold"} to={"/#section-avis"}>Avis</Link>
            </section>
        </header>
    );
};

export default Navbar;