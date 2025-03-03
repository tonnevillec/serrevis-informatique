import {useEffect, useState} from 'react';
import backApi from "../../services/backApi.jsx";

const Paiements = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))

    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/paiements')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container mx-auto">
            <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b"}>Paiement en boutique</h2>

            <div className={"w-full grid grid-cols-3 gap-4"}>
                {!loading && datas.map(d =>
                    <div className={`card ${d.color !== null ? d.color : 'bg-white text-serrevis-100'} m-4 basis-1/4 shadow-xl`} key={d.id}>
                        <div className="card-body p-4">
                            <h2 className="card-title">{d.titre}</h2>
                            <ul className="w-full p-2 text-sm">
                                {d.donnees.map(dd =>
                                    <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`} key={d.id+'-'+dd.id}>
                                        <b>{dd.titre}</b>{(dd.description !== null && dd.description.length > 0) && ' - ' + dd.description}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Paiements;