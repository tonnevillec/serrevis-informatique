import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAsterisk,
    faFaceFrown,
    faFaceMeh,
    faFaceSmile,
    faFaceSmileBeam,
    faReply, faXmark
} from "@fortawesome/free-solid-svg-icons";
import premier from "../../assets/premier_chiffre.png"
import operator from "../../assets/operator.png"
import second from "../../assets/second_chiffre.png"
import egal from "../../assets/egal.jpg"
import {toast} from "react-toastify";

const SectionAvis = () => {
    const [datas, setDatas] = useState({
        nom: '',
        titre: '',
        avis: '',
        appreciation: 0,
        validation: ''
    })

    const handleChange = (e) => {
        const currentTarget = e.currentTarget

        if(currentTarget.type === "checkbox"){
            setDatas({...datas, [currentTarget.name]: currentTarget.checked})
        } else {
            setDatas({...datas, [currentTarget.name]: currentTarget.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(datas)

        if(datas.validation.toString() === '8'){
            toast.success("Merci d'avoir laisser un avis")

            const dialog = document.getElementById('avis-modal');
            dialog.close();
        } else {
            toast.error("Vous n'êtes pas un humain ! Votre commentaire ne sera pas pris en compte")
        }
        setDatas({
            nom: '',
            titre: '',
            avis: '',
            appreciation: 0,
            validation: ''
        })
    }

    const showModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('avis-modal');
        dialog.showModal();
    }

    const closeModal = (e) => {
        e.preventDefault()

        const dialog = document.getElementById('avis-modal');
        dialog.close();
    }

    return (
        <section className={"w-full bg-white py-8"} id={"section-avis"}>
            <div className={"container mx-auto mb-4"}>
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>Avis</h2>

                <div className="grid grid-cols-4 gap-4 w-full">

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                    <span className={"text-xl text-green-500 me-2"}><FontAwesomeIcon
                                        icon={faFaceSmileBeam}
                                        className={"me-2"}></FontAwesomeIcon></span>Parfait!
                            </h2>
                            <p>Réparation rapide et sans problème!<br/>Je recommande</p>
                            <div className="flex w-full justify-between">
                                    <span className="text-sm">
                                        Cyril T.
                                    </span>

                                <span className="text-sm italic">
                                        16/11/2024
                                    </span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                    <span className={"text-xl text-blue-500 me-2"}>
                                        <FontAwesomeIcon icon={faFaceSmile} className={"me-2"}></FontAwesomeIcon></span>Mouais!
                            </h2>
                            <p>Réparation rapide et sans problème!<br/>Je recommande</p>
                            <div className="flex w-full justify-between">
                                    <span className="text-sm">
                                        Cyril T.
                                    </span>

                                <span className="text-sm italic">
                                        16/11/2024
                                    </span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                    <span className={"text-xl text-orange-500 me-2"}>
                                        <FontAwesomeIcon icon={faFaceMeh} className={"me-2"}></FontAwesomeIcon></span>Bof!
                            </h2>
                            <p>
                                Réparation rapide et sans problème!<br/>Je recommande
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda at autem,
                                beatae commodi consequuntur dolor ex harum ipsum iusto, magni nam necessitatibus neque,
                                provident quo repudiandae similique ullam velit...
                            </p>
                            <div className="flex w-full justify-between">
                                    <span className="text-sm">
                                        Cyril T.
                                    </span>

                                <span className="text-sm italic">
                                        16/11/2024
                                    </span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                    <span className={"text-xl text-red-500 me-2"}>
                                        <FontAwesomeIcon icon={faFaceFrown} className={"me-2"}></FontAwesomeIcon></span>Mécontent
                            </h2>
                            <p>C'est pas un vrai commentaire, c'est juste pour afficher le smiley "pas content"!
                            </p>
                            <div className="flex w-full justify-between">
                                    <span className="text-sm">
                                        Cyril T.
                                    </span>

                                <span className="text-sm italic">
                                        16/11/2024
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"container mx-auto text-center"}>
                <button type={"button"} className={"btn btn-outline btn-xs"} onClick={showModal}>Laisser un avis</button>
            </div>

            <dialog id={"avis-modal"} className={"modal"}>
                <div className={"modal-box p-0 m-4 min-w-[50%] min-h-[50%]"}>
                    <form name={"formuliare-avis"} onSubmit={handleSubmit}>
                        <div
                            className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                            <FontAwesomeIcon icon={faFaceSmile} className={"me-2"}></FontAwesomeIcon> Laisser un avis
                        </div>

                        <div className={"p-4 text-justify"}>
                            <div className={"w-full grid grid-cols-3 gap-4 mb-3"}>
                                <label htmlFor={"form-nom"} className={"w-full p-1 text-serrevis-100 text-sm label-required"}>
                                    Votre Nom :
                                    <span className={"text-xs text-red-500 ms-2 tooltip tooltip-right"} data-tip={"Champ obligatoire"}>
                                        <button type={"button"}>
                                            <FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon>
                                        </button>
                                    </span>
                                </label>
                                <input type={"text"}
                                       className={"input input-bordered input-sm col-span-2"}
                                       id={"form-nom"} required={true}
                                       placeholder={"Pseudonyme"} name={"nom"} onChange={handleChange} defaultValue={datas.nom} />
                            </div>

                            <div className={"w-full grid grid-cols-3 gap-4 mb-3"}>
                                <label htmlFor={"form-titre"} className={"w-full p-1 text-serrevis-100 text-sm"}>
                                    Titre du commentaire :
                                    <span className={"text-xs text-red-500 ms-2 tooltip tooltip-right"}
                                          data-tip={"Champ obligatoire"}>
                                        <button type={"button"}>
                                            <FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon>
                                        </button>
                                    </span>
                                </label>
                                <input type={"text"}
                                       className={"input input-bordered input-sm col-span-2"}
                                       id={"form-titre"}
                                       placeholder={"Titre du commentaire"} name={"titre"} onChange={handleChange}
                                       defaultValue={datas.titre}/>
                            </div>

                            <div className={"w-full grid grid-cols-3 gap-4 mb-3"}>
                                <label htmlFor={"form-avis"} className={"w-full p-1 text-serrevis-100 text-sm"}>
                                    Votre avis :
                                    <span className={"text-xs text-red-500 ms-2 tooltip tooltip-right"}
                                          data-tip={"Champ obligatoire"}>
                                        <button type={"button"}>
                                            <FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon>
                                        </button>
                                    </span>
                                </label>
                                <div className={"w-full col-span-2"}>
                                    <textarea className={"textarea textarea-bordered w-full text-sm"} rows={3}
                                              minLength={5}
                                              maxLength={255}
                                              name={"avis"} onChange={handleChange}
                                              defaultValue={datas.avis}
                                          id={"form-avis"}></textarea>
                                    <div className={"label text-sm italic"}>
                                        <span className={"label-text-alt"}>Saisir entre 5 et 255 caractères</span>
                                        <span className={"label-text-alt"}>{ 255 - datas.avis.length} restant</span>
                                    </div>
                                </div>
                            </div>

                            <div className={"w-full grid grid-cols-3 gap-4 mb-3"}>
                                <label htmlFor={"form-appreciation"} className={"w-full p-1 text-serrevis-100 text-sm"}>
                                    Votre appréciation :
                                    <span className={"text-xs text-red-500 ms-2 tooltip tooltip-right"}
                                          data-tip={"Champ obligatoire"}>
                                        <button type={"button"}>
                                            <FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon>
                                        </button>
                                    </span>
                                </label>
                                <div className={"w-full grid grid-cols-4 col-span-2 gap-2"}>
                                    <div className="">
                                        <input type="radio" name="appreciation" id="form-appreciation-1" value="1"
                                               className="hidden peer"/>
                                        <label htmlFor="form-appreciation-1"
                                               className="inline-flex items-center justify-between w-full p-3 bg-white border-2 rounded-lg cursor-pointer group border-neutral-200/70 text-neutral-600
                                               peer-checked:border-green-500 peer-checked:text-neutral-900 peer-checked:bg-green-200/50
                                               hover:text-neutral-900 hover:border-neutral-300">
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faFaceSmileBeam}
                                                                 className={"me-2"}></FontAwesomeIcon>
                                                <span className={"text-sm"}>Très content</span>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="">
                                        <input type="radio" name="appreciation" id="form-appreciation-2" value="2"
                                               className="hidden peer"/>
                                        <label htmlFor="form-appreciation-2"
                                               className="inline-flex items-center justify-between w-full p-3 bg-white border-2 rounded-lg cursor-pointer group border-neutral-200/70 text-neutral-600
                                               peer-checked:border-blue-500 peer-checked:text-neutral-900 peer-checked:bg-blue-200/50
                                               hover:text-neutral-900 hover:border-neutral-300">
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faFaceSmile} className={"me-2"}></FontAwesomeIcon>
                                                <span className={"text-sm"}>Content</span>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="">
                                        <input type="radio" name="appreciation" id="form-appreciation-3" value="3"
                                               className="hidden peer"/>
                                        <label htmlFor="form-appreciation-3"
                                               className="inline-flex items-center justify-between w-full p-3 bg-white border-2 rounded-lg cursor-pointer group border-neutral-200/70 text-neutral-600
                                               peer-checked:border-orange-500 peer-checked:text-neutral-900 peer-checked:bg-orange-200/50
                                               hover:text-neutral-900 hover:border-neutral-300">
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faFaceMeh} className={"me-2"}></FontAwesomeIcon>
                                                <span className={"text-sm"}>Bof</span>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="">
                                        <input type="radio" name="appreciation" id="form-appreciation-4" value="4"
                                               className="hidden peer"/>
                                        <label htmlFor="form-appreciation-4"
                                               className="inline-flex items-center justify-between w-full p-3 bg-white border-2 rounded-lg cursor-pointer group border-neutral-200/70 text-neutral-600
                                               peer-checked:border-red-500 peer-checked:text-neutral-900 peer-checked:bg-red-200/50
                                               hover:text-neutral-900 hover:border-neutral-300">
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faFaceFrown} className={"me-2"}></FontAwesomeIcon>
                                                <span className={"text-sm"}>Mécontent</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className={"w-full grid grid-cols-3 gap-4 mb-3"}>
                                <label htmlFor={"form-validation"} className={"w-full p-1 text-serrevis-100 text-sm"}>
                                    Etes-vous une humain ?
                                    <span className={"text-xs text-red-500 ms-2 tooltip tooltip-right"}
                                          data-tip={"Champ obligatoire"}>
                                        <button type={"button"}>
                                            <FontAwesomeIcon icon={faAsterisk}></FontAwesomeIcon>
                                        </button>
                                    </span>
                                </label>
                                <div className={"w-full flex flex-row"}>
                                    <img src={premier} alt={""} className={"me-2 max-w-12 max-h-12"}/>
                                    <img src={operator} alt={""} className={"me-2 max-w-12 max-h-12"}/>
                                    <img src={second} alt={""} className={"me-2 max-w-12 max-h-12"}/>
                                    <img src={egal} alt={""} className={"me-2 max-w-12 max-h-12"} />

                                    <input type={"text"} className={"input input-bordered input-sm"}
                                           id={"form-validation"}
                                           placeholder={"Résultat"}
                                           name={"validation"}
                                           onChange={handleChange}
                                           defaultValue={datas.validation}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-row justify-around p-4 mt-3 border border-t-2">
                            <button type={"button"} className={"btn btn-sm btn-error"} onClick={closeModal}>
                                <FontAwesomeIcon icon={faXmark} className={"me-2"}></FontAwesomeIcon>Annuler</button>
                            <button type={"submit"}
                                    className={`btn btn-sm btn-success ${datas.validation.toString() !== '8' && 'disabled'}`}
                                    disabled={datas.validation.toString() !== '8'}
                            >
                                <FontAwesomeIcon icon={faReply} className={"me-2"}></FontAwesomeIcon>Soumettre</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </section>
    );
};

export default SectionAvis;