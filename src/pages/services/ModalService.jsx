import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears} from "@fortawesome/free-solid-svg-icons";

const ModalService = ({modalId, service}) => {
    const [dialog, setDialog] = useState(null)

    useEffect(() => {
        setDialog(document.getElementById(modalId));
    }, [])

    const handleShowModal = (e) => {
        e.preventDefault()

        dialog.showModal()
    }

    return (
        <>
            {(service.description !== null && service.description.toString().length > 0) && <>
                <li className={"flex justify-between py-1 border border-b-1 border-t-0 border-r-0 border-l-0 hover:font-bold hover:cursor-pointer"}
                    onClick={handleShowModal}
                >
                    <span>{service.titre}</span>
                    <span>{service.valeur}</span>
                </li>

                <dialog id={modalId} className={"modal text-serrevis-100"}>
                    <div className={"modal-box p-0 m-4 min-w-[50%] min-h-[50%]"}>
                        <div
                            className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                            <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon> {service.titre} : {service.valeur}
                        </div>

                        <div className="py-4 px-8 text-justify" id={"depannage-modal-description"} dangerouslySetInnerHTML={{__html: service.description}} />
                    </div>

                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </>
            }
            {(service.description === null || service.description.toString().length === 0) &&
                <li className={"flex justify-between py-1 border border-b-1 border-t-0 border-r-0 border-l-0 hover:font-bold"}>
                    <span>{service.titre}</span>
                    <span>{service.valeur}</span>
                </li>}
        </>
    );
};

export default ModalService;