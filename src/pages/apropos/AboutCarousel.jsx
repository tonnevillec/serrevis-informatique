import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faXmark} from "@fortawesome/free-solid-svg-icons";

import img1 from '../../assets/atelier/Ilot_Apple-Mac01.jpg'
import img2 from '../../assets/atelier/Ilot_Apple-Mac02.jpg'
import img3 from '../../assets/atelier/Ilot_Ordi-Portable01.jpg'
import img4 from '../../assets/atelier/Ilot_Ordi-Portable02.jpg'
import img5 from '../../assets/atelier/Interieur_local.jpg'
import img6 from '../../assets/atelier/Montage-sur-mesure_Ordi-Tour01.jpg'
import img7 from '../../assets/atelier/Montage-sur-mesure_Ordi-Tour02.jpg'
import img8 from '../../assets/atelier/Montage-sur-mesure_Ordi-Tour03.jpg'
import img9 from '../../assets/atelier/Plan-travail_Montage01.jpg'
import img10 from '../../assets/atelier/Plan-travail_Montage02.jpg'
import img11 from '../../assets/atelier/Plan-travail_Ordi-portables.jpg'

const AboutCarousel = () => {
    const [modalDatas, setModalDatas] = useState({})

    const datas = [
        {
            id: 1,
            titre: "Ilot Apple-Mac",
            url: img1
        },
        {
            id: 2,
            titre: "Ilot Apple-Mac",
            url: img2
        },
        {
            id: 3,
            titre: "Ilot Ordinateur Portable",
            url: img3
        },
        {
            id: 4,
            titre: "Ilot Ordinateur Portable",
            url: img4
        },
        {
            id: 5,
            titre: "Intérieur local",
            url: img5
        },
        {
            id: 6,
            titre: "Montage sur mesure Ordinateur Tour",
            url: img6
        },
        {
            id: 7,
            titre: "Montage sur mesure Ordinateur Tour",
            url: img7
        },
        {
            id: 8,
            titre: "Montage sur mesure Ordinateur Tour",
            url: img8
        },
        {
            id: 9,
            titre: "Plan de travail Montage",
            url: img9
        },
        {
            id: 10,
            titre: "Plan de travail Montage",
            url: img10
        },
        {
            id: 11,
            titre: "Plan de travail Ordinateurs portables",
            url: img11
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