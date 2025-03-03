import {useEffect, useState} from 'react';
import backApi from "../../services/backApi.jsx";

const AProposValeurs = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/valeurs')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full rounded-2xl shadow-lg bg-base-100 p-4">
            <h3 className={"card-title"}>Des valeurs</h3>
            {!loading &&
                <div className={"p-3"} dangerouslySetInnerHTML={{__html: datas.description}} />
            }
        </div>
    );
};

export default AProposValeurs;