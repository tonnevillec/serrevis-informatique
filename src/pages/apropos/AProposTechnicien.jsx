import {useEffect, useState} from 'react';
import backApi from "../../services/backApi.jsx";
import {BACK_URL} from "../../config.js";

const AProposTechnicien = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/technicien')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full grid grid-cols-3"}>
            {!loading &&
                <>
                    <div className="col-span-2">
                        <h3 className={"card-title"}>Un technicien</h3>
                        <div className={"p-3 text-justify"} dangerouslySetInnerHTML={{__html: datas.description}} />
                    </div>

                    <div className="p-2">
                        <figure className={"col-span-1"}>
                            <img src={`${BACK_URL}/uploads/images/${datas.photo}`}
                                 className={"object-cover"}
                                 alt={datas.alt}/>
                        </figure>

                        <div className={"w-full text-center"}>{datas.alt}</div>
                    </div>
                </>
            }
        </div>
    );
};

export default AProposTechnicien;