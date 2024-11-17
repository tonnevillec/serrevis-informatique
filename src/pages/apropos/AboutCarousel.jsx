import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faXmark} from "@fortawesome/free-solid-svg-icons";

const AboutCarousel = () => {
    const [modalDatas, setModalDatas] = useState({})

    const datas = [
        {
            id: 1,
            titre: "Premiere image",
            url: "https://picsum.photos/800/600"
        },
        {
            id: 2,
            titre: "Seconde image",
            url: "https://picsum.photos/800/600"
        },
        {
            id: 3,
            titre: "Troisieme image",
            url: "https://picsum.photos/1280/1024"
        },
        {
            id: 4,
            titre: "Quatrieme image",
            url: "https://picsum.photos/800/600"
        },
        {
            id: 5,
            titre: "Cinquieme image",
            url: "https://picsum.photos/800/600"
        },
    ]

    const showModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('carousel-modal');

        const titre = e.currentTarget.getAttribute('data-title')
        const id = e.currentTarget.getAttribute('data-id')
        const url = e.currentTarget.getAttribute('data-url')

        setModalDatas({
            id: id,
            titre: titre,
            url: url
        })

        dialog.showModal();
    }

    return (
        <div className={"grid grid-cols-4 gap-2 w-full"}>
            {datas.map(d =>
                <figure className={"max-w-48"}
                        onClick={showModal}
                        key={d.id}
                        data-title={d.titre}
                        data-id={d.id}
                        data-url={d.url}
                >
                    <img src={d.url} className={"object-cover"} alt={d.titre}/>
                </figure>
            )}

            <dialog id={"carousel-modal"} className={"modal"}>
                <div className={"modal-box p-0 m-4 min-w-[50%] min-h-[50%]"}>
                    <div
                        className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                        <FontAwesomeIcon icon={faImage}
                                         className={"me-2"}></FontAwesomeIcon> {modalDatas.titre}
                    </div>

                    <div className={"w-full py-4 px-8 flex justify-center"}>
                        <figure>
                            <img src={modalDatas.url} className={"object-cover"} alt={modalDatas.titre}/>
                        </figure>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default AboutCarousel;