import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Map from "../Map.jsx";
import {useEffect, useState} from "react";
import backApi from "../../services/backApi.jsx";

const SectionCoordonnees = ({valeurs}) => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/horaires')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className={"w-full bg-white py-4 lg:py-8"} id={"section-coordonnees"}>
            <div className={"container mx-auto"}>
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>Coordonnées</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 w-full">
                    <div className="col-span-1">
                        <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full mb-4"}>
                            <h3 className={"w-full font-bold"}>
                                Coordonnées de contact :
                            </h3>
                            {valeurs.adresse.length > 0 &&
                                <p className={"mb-4"} dangerouslySetInnerHTML={{__html: valeurs.adresse}} />
                            }
                            {valeurs.telephone.length > 0 &&
                                <p className={"mb-4"}>
                                <FontAwesomeIcon icon={faPhone}
                                                 className={"me-2"}></FontAwesomeIcon>{valeurs.telephone}
                                </p>
                            }
                            {valeurs.mail.length > 0 &&
                                <p className={"mb-4"}>
                                    <FontAwesomeIcon icon={faEnvelope}
                                                     className={"me-2"}></FontAwesomeIcon>{valeurs.mail}
                                </p>
                            }

                            <h3 className={"w-full font-bold"}>
                                Horaires d'ouverture :
                            </h3>
                            <table className={"table table-xs"}>
                                <tbody>
                                {!loading && datas.map(d =>
                                    <tr key={d.id}>
                                        <td>{d.jour} :</td>
                                        <td>{d.matin}</td>
                                        <td>{d.apm}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className={"rounded-2xl shadow-lg bg-base-100 p-0 lg:p-4 w-full mb-4"}>
                            <h3 className={"w-full font-bold"}>
                                Plan d'accès :
                            </h3>

                            <Map coordonneesX={valeurs.mapCoordonneesX} coordonneesY={valeurs.mapCoordonneesY} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCoordonnees;