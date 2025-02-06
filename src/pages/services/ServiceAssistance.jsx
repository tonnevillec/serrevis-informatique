import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears, faXmark} from "@fortawesome/free-solid-svg-icons";

const ServiceAssistance = () => {

    const [modalHTML, setModalHTML] = useState({
        titre: '',
        description: ''
    })

    const datas = [
        {
            id: 1,
            titre: 'Démarches administratives',
            subtitle: 'Tarifs sur devis',
            subtitleClass: 'text-error w-full bg-white p-2 rounded rounded-lg font-bold',
            donnees: [
                {
                    id: '1.1',
                    titre: 'Création d\'un compte service public',
                    description: "",
                    valeur: ''
                },
                {
                    id: '1.2',
                    titre: 'Emploi',
                    description: "",
                    valeur: ''
                },
                {
                    id: '1.3',
                    titre: 'Impôts',
                    description: "",
                    valeur: ''
                },
                {
                    id: '1.4',
                    titre: 'Santé',
                    description: "",
                    valeur: ''
                },
                {
                    id: '1.5',
                    titre: 'Retraite',
                    description: "",
                    valeur: ''
                },
                {
                    id: '1.6',
                    titre: 'Inscription dans un EHPAD',
                    description: "",
                    valeur: ''
                },
                {
                    id: '1.7',
                    titre: 'Décès',
                    description: "",
                    valeur: ''
                },
                {
                    id: '1.8',
                    titre: 'Voyage',
                    description: "",
                    valeur: ''
                }
            ]
        },
        {
            id: 2,
            titre: 'Utiliser l\'outil informatique',
            donnees: [
                {
                    id: '2.1',
                    titre: 'Naviguer sur internet',
                    description: "",
                    valeur: '25€'
                },
                {
                    id: '2.2',
                    titre: 'Consulter ses couriels',
                    description: "",
                    valeur: '25€'
                },
                {
                    id: '2.3',
                    titre: 'Visioconférence',
                    description: "",
                    valeur: '25€'
                },
            ]
        },
        {
            id: 3,
            titre: 'Tableurs de gestion',
            subtitle: 'Tarifs sur devis',
            subtitleClass: 'text-error w-full bg-white p-2 rounded rounded-lg font-bold',
            donnees: [
                {
                    id: '3.1',
                    titre: 'Facturation / Caisse',
                    description: "",
                    valeur: ''
                },
                {
                    id: '3.2',
                    titre: 'Compta',
                    description: "",
                    valeur: ''
                },
                {
                    id: '3.3',
                    titre: 'Stock',
                    description: "",
                    valeur: ''
                },
                {
                    id: '3.4',
                    titre: 'Statistiques',
                    description: "",
                    valeur: ''
                }
            ]
        },
        {
            id: 4,
            titre: 'Travail graphique',
            subtitle: 'Tarifs sur devis',
            subtitleClass: 'text-error w-full bg-white p-2 rounded rounded-lg font-bold',
            donnees: [
                {
                    id: '4.1',
                    titre: 'Logos',
                    description: "",
                    valeur: ''
                },
                {
                    id: '4.2',
                    titre: 'Flyers / Dépliants',
                    description: "",
                    valeur: ''
                },
                {
                    id: '4.3',
                    titre: 'Plans d\'aménagement 3D',
                    description: "",
                    valeur: ''
                },
            ]
        },
        {
            id: 5,
            titre: 'Documents texte',
            donnees: [
                {
                    id: '5.1',
                    titre: 'Documents texte administratifs',
                    description: "",
                    valeur: '5€'
                },
            ]
        },
    ]

    const showModal = (e) => {
        e.preventDefault()
        const dialog = document.getElementById('assistance-modal');

        const title = e.currentTarget.getAttribute('data-title')
        const id = e.currentTarget.getAttribute('data-id')
        const d1 = datas.filter(f => f.titre === title)[0]
        const d2 = d1.donnees.filter(f => f.id === id)[0]

        document.getElementById('assistance-modal-description').innerHTML = d2.description

        setModalHTML(d2)

        dialog.showModal();
    }

    return (
        <div className={"w-full grid grid-cols-3 gap-4"}>
            {datas.map(d =>
                <div className="card bg-green-600 text-white m-4 basis-1/4 shadow-xl" key={d.id}>
                    <div className="card-body p-4">
                        <h2 className="card-title">{d.titre}</h2>
                        {d.subtitle !== '' && <small className={d.subtitleClass}>{d.subtitle}</small>}
                        <ul className="w-full p-2 text-sm">
                            {d.donnees.map(dd =>
                                <li className={`flex justify-between py-1 border border-b-1 border-t-0 border-r-0 border-l-0 ${dd.description !== '' && 'hover:font-bold hover:cursor-pointer'}`}
                                    key={dd.id}
                                    onClick={dd.description !== '' ? showModal : null}
                                    data-title={d.titre}
                                    data-id={dd.id}
                                >
                                    <span>{dd.titre}</span>
                                    {d.valeur !== '' && <span>{dd.valeur}</span>}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            )}

            <dialog id={"assistance-modal"} className={"modal"}>
                <div className={"modal-box p-0 m-4 min-w-[50%] min-h-[50%]"}>
                    <div
                        className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                        <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon> {modalHTML.titre} : {modalHTML.valeur}
                    </div>

                    <div className={"py-4 px-8 text-justify"} id={"assistance-modal-description"}>
                        <p>Assemblage de composants, pièce par pièce, à l’intérieur d’un boîtier (Boîtier, alimentation,
                            carte mère, processeur, RAM, refroidisseur, disques, carte graphique, lecteurs et cartes
                            contrôleurs si besoin) Une fois le PC assemblé, un premier démarrage et une batterie de tests à
                            l’aide d’un disque contenant un système Windows de l’Atelier sera effectuée.</p>
                        <br/>
                        <p>Cette prestation n’inclut pas le Flash/BackFlash de BIOS / UEFI de la carte mère, ni l’installation du système
                            d’exploitation sur l’un des disques du PC assemblé</p>
                        <br/>
                        <p>Possibilité d’intervention dans les 72H en rajoutant la prestation « Service+ intervention sous 72H » à 25€.</p>
                        <br/>
                        <p>Si le montage comprend un refroidissement par Watercooling AIO ou des systèmes de L Ds RGB alors le montage devient complexe et nécessitera l'ajout de la prestation « Service+ intervention COMPLEXE » à 25€.</p>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ServiceAssistance;