import {useEffect, useState} from 'react';
import backApi from "../../services/backApi.jsx";
import ModalService from "./ModalService.jsx";

const ServiceDepannage = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/service/depannage')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={"w-full grid grid-cols-3 gap-4"}>
            {!loading && datas.map(d =>
                <div className="card bg-primary text-white m-4 basis-1/4 shadow-xl" key={d.id}>
                    <div className="card-body p-4">
                        <h2 className="card-title">{d.titre}</h2>
                        <ul className="w-full p-2 text-sm">
                            {d.donnees.map(dd =>
                                <ModalService
                                    key={d.id+'.'+dd.id}
                                    modalId={`depannage-modal-${d.id}-${dd.id}`}
                                    service={dd}
                                />
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceDepannage;