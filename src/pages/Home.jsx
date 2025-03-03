import {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Landing from "./Landing.jsx";
import Navbar from "../components/Navbar.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import MentionsLegales from "./MentionsLegales.jsx";
import Confidentialite from "./Confidentialite.jsx";
import PlanSite from "./PlanSite.jsx";
import backApi from "../services/backApi.jsx";
import {BACK_URL} from "../config.js";

const Home = () => {
    const location = useLocation()
    const [datas, setDatas] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))

    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/datas')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

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
                    {(!loading && datas.logo.length > 0) &&
                        <img src={`${BACK_URL}/uploads/images/${datas.logo}`}
                             className={"max-w-36"}
                             alt={"Logo de l'atelier serre-vis informatique"}
                        />
                    }
                </aside>

                <nav className={"text-neutral-content"}>
                    <h6 className="footer-title">Contact</h6>
                    {(!loading && datas.adresse.length > 0 )&&
                        <address className="" dangerouslySetInnerHTML={{__html: datas.adresse}} />
                    }
                    {(!loading && datas.telephone.length > 0 )&&
                        <p><FontAwesomeIcon icon={faPhone} className={"me-2"}></FontAwesomeIcon>{datas.telephone}</p>
                    }
                    {(!loading && datas.mail.length > 0 )&&
                        <p><FontAwesomeIcon icon={faEnvelope} className={"me-2"}></FontAwesomeIcon>{datas.mail}</p>
                    }
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