import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears} from "@fortawesome/free-solid-svg-icons";

const Confidentialite = () => {
    const showModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('confidentialite');
        dialog.showModal();
    }

    return (
        <>
            <span className={"pt-3 cursor-pointer text-neutral-content hover:text-white"} onClick={showModal}>
                Politique de confidentialité
            </span>

            <dialog id={"confidentialite"} className={"modal"}>
                <div className={"modal-box p-0 m-4 min-w-[80%] min-h-[80%]"}>
                    <div
                        className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                        <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon>Politique de confidentialité
                    </div>

                    <div className={"py-4 px-8 text-justify"}>
                        <p>#TODO</p>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default Confidentialite;