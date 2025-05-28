import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf, faGears} from "@fortawesome/free-solid-svg-icons";
import backApi from "../../services/backApi.jsx";
import {BACK_URL} from "../../config.js";

const SectionVentes = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDatas()
            .finally(() => setLoading(false))
    }, []);

    const fetchDatas = async () => {
        try {
            const d = await backApi.apiFetch('/api/ventes')
            setDatas(d)
        } catch (error) {
            console.error(error)
        }
    }

    const showModal = (e) => {
        e.preventDefault()
        const dialog = document.getElementById('vente-modal-'+e.currentTarget.getAttribute('data-id'));
        dialog.showModal()
    }

    return (
        <section className={"w-full bg-white py-4 lg:py-8"} id={"section-apropos"}>
            <div className={"container mx-auto"}>
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>Vente d'ocassion et reconditionné</h2>

                <div className={"w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4"}>
                    {!loading && datas.map(d =>
                        <div className={"rounded-2xl shadow-lg bg-base-100 p-2 lg:p-4 w-full grid grid-row mb-2 lg:mb-4"} key={d.id}>
                            <div className="w-full mb-2">
                                <h3 className={"card-title mb-2"}>{d.modele}</h3>

                                <h4 className={"text-md mb-2"}>{d.titre}</h4>

                                <span className={"mb-2 font-bold text-md"}>{d.prix}</span>

                                <div className={"text-sm mb-2"} dangerouslySetInnerHTML={{__html: d.description}}/>

                                <span className={"btn btn-primary btn-sm w-full mb-2"} data-id={d.id} onClick={showModal}>Voir la configuration</span>

                                <a className={"mb-2 btn btn-secondary btn-sm w-full"} href={`${BACK_URL}/uploads/ventes/${d.pdf}`} target={'_blank'}>
                                    <FontAwesomeIcon icon={faFilePdf} className={"me-2"}></FontAwesomeIcon> Télécharger la fiche
                                </a>

                                <span className={"w-full flex justify-end text-sm"}>{d.dateMiseEnVente}</span>

                                <dialog id={`vente-modal-${d.id}`} className={"modal"}>
                                    <div className={"modal-box p-0 m-4 min-w-[50%] min-h-[50%]"}>
                                        <div
                                            className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                                            <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon> {d.titre} : {d.prix}
                                        </div>

                                        <div className={"py-4 px-8 text-justify"} id={"vente-modal-detail"}>
                                            <p>{d.modele}</p>

                                            <p>{d.description}</p>

                                            <div className={"p-3"} dangerouslySetInnerHTML={{__html: d.parametres}}/>
                                        </div>
                                    </div>

                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SectionVentes;