import {useEffect, useState} from 'react';
import backApi from "../../services/backApi.jsx";
import ModalService from "./ModalService.jsx";

const ServiceAteliers = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))

    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/service/ateliers')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (<>
        <div className={"w-full mt-2 p-2 border-2 border-warning rounded-lg text-center"}>
            <p>- Services + Apprendre à faire soi-même -</p>
            <p>Venez apprendre à faire par vous-même sous instructions, assistances et conseils du Technicien la
                prestation de service de votre choix, seul(e) ou en atelier de groupe</p>
            <p className={"text-error font-bold"}>Pour vous inscrire, rendez-vous sur la page d’accueil ou directement en
                boutique Ateliers uniquement les samedis après-midi ! Attention, ces tarifs sont en complément de la
                prestation assignée</p>
        </div>

        <div className={"w-full grid grid-cols-3 gap-4"}>
            {!loading && datas.map(d =>
                <div className="card bg-warning m-4 basis-1/4 shadow-xl" key={d.id}>
                    <div className="card-body p-4">
                        <h2 className="card-title">{d.titre}</h2>
                        <ul className="w-full p-2 text-sm">
                            {d.donnees.map(dd =>
                                <ModalService
                                    key={d.id+'.'+dd.id}
                                    modalId={`ateliers-modal-${d.id}-${dd.id}`}
                                    service={dd}
                                />
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    </>
    );
};

export default ServiceAteliers;