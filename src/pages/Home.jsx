import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Landing from "./Landing.jsx";
import Navbar from "../components/Navbar.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import MentionsLegales from "./MentionsLegales.jsx";
import Confidentialite from "./Confidentialite.jsx";
import PlanSite from "./PlanSite.jsx";
import atelier from '../assets/atelier.svg'

const Home = () => {
    const location = useLocation()

    return (
        <>
            <div id={"page-container top"}
                 className={"mx-auto min-h-screen w-full"}
            >
                <Navbar/>

                <main id={"page-content"}
                      className={"flex max-w-full flex-auto flex-col mt-20"}
                >
                    <div className="w-full min-h-screen">
                        {location.pathname === "/" ? <Landing/> : <Outlet/>}
                    </div>
                </main>
            </div>

            <footer className="footer bg-serrevis-200 p-10">
                <aside className={"text-neutral-content"}>
                    <img src={atelier} className={"max-w-36"}  alt={"Logo de l'atelier serre-vis informatique"}/>
                </aside>

                <nav className={"text-neutral-content"}>
                    <h6 className="footer-title">Contact</h6>
                    <address className="">
                        2/4 Place Jules Guesde<br/>
                        59810 LESQUIN<br/>
                    </address>
                    <p className="">
                        <FontAwesomeIcon icon={faPhone} className={"me-2"}></FontAwesomeIcon>03.65.67.05.18
                    </p>
                    <p className="">
                        <FontAwesomeIcon icon={faEnvelope} className={"me-2"}></FontAwesomeIcon>contact@serrevis-informatique.fr
                    </p>
                </nav>

                <nav>
                    <h6 className="footer-title text-neutral-content">A propos</h6>
                    <MentionsLegales />
                    <Confidentialite />
                    <PlanSite />
                </nav>
            </footer>
        </>
    );
};

export default Home;