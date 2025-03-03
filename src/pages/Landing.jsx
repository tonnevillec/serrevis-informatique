import {useEffect, useState} from 'react';
import hello from "../assets/hello.svg"
import SectionServices from "./services/SectionServices.jsx";
import SectionApropos from "./apropos/SectionApropos.jsx";
import SectionCoordonnees from "./coordonnees/SectionCoordonnees.jsx";
import SectionAgenda from "./agenda/SectionAgenda.jsx";
import SectionAvis from "./avis/SectionAvis.jsx";
import SectionVentes from "./vente/SectionVentes.jsx";
import backApi from "../services/backApi.jsx";

const Landing = () => {
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
            <section className="w-full bg-gradient-to-b from-blue-100 pt-24 pb-16" id={"section-header"}>
                <div className="flex container mx-auto flex-row">
                    <div className={"pe-6"}>

                        <h1 className="text-5xl font-bold">Serre-Vis Informatique</h1>

                        {!loading && <div className="pt-5 text-justify" dangerouslySetInnerHTML={{__html: datas.hero}} />}

                        <p className={"text-right"}>À votre serre-vis</p>
                    </div>

                    <img src={hello} className="max-w-lg" alt="Bienvenue sur le site de serre-vis informatique!"/>
                </div>
            </section>

            <section className={"w-full bg-white py-2"} id={"section-services"}>
                <div className="container mx-auto mb-4">
                    {(!loading && datas.alertMessage.length > 0) &&
                        <div className="w-full rounded-full border-2 border-secondary text-center font-bold text-xl p-4 text-secondary" dangerouslySetInnerHTML={{__html: datas.alertMessage}} />
                    }
                </div>
            </section>

            <SectionServices />

            <SectionVentes />

            <SectionApropos />

            {!loading &&
                <SectionCoordonnees valeurs={datas} />
            }

            {/*<SectionAgenda />*/}

            {/*<SectionAvis />*/}
        </>
    );
};

export default Landing;