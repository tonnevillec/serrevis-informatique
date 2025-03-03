import {useEffect, useState} from 'react';
import AboutCarousel from "./AboutCarousel.jsx";
import backApi from "../../services/backApi.jsx";

const AProposBoutique = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/boutique')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full grid grid-row mb-4"}>
            <div className="w-full mb-2">
                <h3 className={"card-title"}>Une boutique</h3>
                {!loading &&
                    <div className={"p-3"} dangerouslySetInnerHTML={{__html: datas.description}} />
                }
            </div>

            <AboutCarousel/>
        </div>
    );
};

export default AProposBoutique;