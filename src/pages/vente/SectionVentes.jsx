import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf, faGears} from "@fortawesome/free-solid-svg-icons";

const SectionVentes = () => {
    const datas = [
        {
            id: 1,
            titre: 'Ordinateur Tout-en-Un HP 24" orienté Bureautique',
            modele: 'HP Tout-En-Un 24-ax0097nf',
            description: "Acheté en 2020 - avec Bloc d’alimentation 120W",
            date: '01/12/2024',
            pdf: 'HP_AIO_24-ax0097nf.pdf',
            prix: '400€ TTC',
            donnees: [
                {
                    id: '1.1',
                    valeur: "Écran LED 23,8 pouces FullHD (1920 x 1080 pixels), dalle IPS, 60Hz"
                },
                {
                    id: '1.2',
                    valeur: "Processeur : Intel Core i5-9400T - 6c/6t - 1,8 à 3,4Ghz - 35W TDP"
                },
                {
                    id: '1.3',
                    valeur: "Mémoire Vive : 8Go DDR4-2666 Mhz - (1 slot libre, 32Go max)"
                },
                {
                    id: '1.4',
                    valeur: "Stockage : 1 SSD M.2 Sata 128Go Liteon +1 Disque dur de 1To Western Digital"
                },
                {
                    id: '1.5',
                    valeur: "Graphiques : iGPU Intel UHD Graphics 630"
                },
                {
                    id: '1.6',
                    valeur: "Réseau : RJ45 Gigabit + Wifi 5 - AC + Bluetooth 4.2"
                },
                {
                    id: '1.7',
                    valeur: "Connectiques : 1 RJ45 + 2 HDMi + 3 USB 3.1 Type A + 2 USB 3.1 Type C + Prises Jack casque et micro + 1 lecteur carte SD"
                },
                {
                    id: '1.8',
                    valeur: "Webcam FHD + Micro interne au niveau de l’écran"
                },
                {
                    id: '1.9',
                    valeur: "Bloc d’alimentation secteur 120W d’origine"
                },
                {
                    id: '1.10',
                    valeur: "Système d’exploitation Windows 11 Famille"
                },
            ]
        },
        {
            id: 2,
            titre: 'Ordinateur iMac 27" orienté travail graphique',
            modele: 'iMac Retina 5K, 27 pouces - A2115',
            description: "Année 2020 - vendu avec clavier et souris bluetooth",
            date: '01/12/2024',
            pdf: 'iMac_A2115.pdf',
            prix: '1000€ TTC',
            donnees: [
                {
                    id: '2.1',
                    valeur: "Écran Retina 27 pouces 5K (5120 x 2880 pixels)"
                },
                {
                    id: '2.2',
                    valeur: "Processeur : Intel Core i5-10500 - 6c/12t - 3,1 à 4,5Ghz - 65W TDP"
                },
                {
                    id: '2.3',
                    valeur: "Mémoire Vive : 8Go DDR4-2666 Mhz - (2 slots libres, 128Go max)"
                },
                {
                    id: '2.4',
                    valeur: "Stockage : 1 SSD M.2 NVMe 256Go"
                },
                {
                    id: '2.5',
                    valeur: "Graphiques : AMD Radeon Pro 5300 avec 4Go de mémoire vidéo dédiée"
                },
                {
                    id: '2.6',
                    valeur: "Réseau : RJ45 Gigabit + Wifi 5 - AC + Bluetooth 5.0"
                },
                {
                    id: '2.7',
                    valeur: "Connectiques : 1 RJ45 + 4 USB 3.1 Type A + 2 USB 3.1 Type C + Prises Jack casque et micro + 1 lecteur carte SDXC + antivol Kensington"
                },
                {
                    id: '2.8',
                    valeur: "Caméra FaceTime FHD (1080p)+ Micro interne au niveau de l’écran"
                },
                {
                    id: '2.9',
                    valeur: "Câble secteur + clavier MagicKey et souris MagicMouse bluetooth"
                },
                {
                    id: '2.10',
                    valeur: "Système d’exploitation macOS 15 Séquoïa"
                },
            ]
        },
        {
            id: 3,
            titre: 'Ordinateur portable Dell 14" orienté Bureautique',
            modele: 'Dell Latitude E5470',
            description: "Année de sortie 2016",
            date: '20/02/2025',
            pdf: 'Dell-latitude_E5470.pdf',
            prix: '135€ TTC',
            donnees: [
                {
                    id: '3.1',
                    valeur: "Écran LED 14 pouces FullHD (1920x1080 pixels)"
                },
                {
                    id: '3.2',
                    valeur: "Coques écran et clavier noir mat"
                },
                {
                    id: '3.3',
                    valeur: "Processeur : Intel Core i5-6300U - 4 coeurs logiques - 2,4Ghz à 3,00Ghz - 15W de Consommation électrique"
                },
                {
                    id: '3.4',
                    valeur: "Mémoire Vive : 8Go DDR4-2133Mhz - (1 emplacement libre, 16Go max)"
                },
                {
                    id: '3.5',
                    valeur: "Stockage : Aucun disque -> Emplacement SSD SATA 2,5 pouces ou M.2 PCIe"
                },
                {
                    id: '3.6',
                    valeur: "Graphiques : iGPU Intel HD Graphics 520"
                },
                {
                    id: '3.7',
                    valeur: "Réseau : RJ45 Gigabit + Wifi 5 ‘’b/g/n/ac‘’+ Bluetooth 4.1"
                },
                {
                    id: '3.8',
                    valeur: "Connectiques : 1 RJ45 + HDMi + VGA + 3 USB 3.0 + Prises Jack casque et micro + 1 lecteur carte SD + Connecteur Dock Dell en-dessous"
                },
                {
                    id: '3.9',
                    valeur: "Webcam FHD + Micro interne au niveau de l’écran"
                },
                {
                    id: '3.10',
                    valeur: "La Batterie est à changer, modèle disponible chez Subtel garantie 3 ans"
                },
                {
                    id: '3.11',
                    valeur: "Chargeur secteur 65W d’origine"
                },
                {
                    id: '3.12',
                    valeur: "Système d’exploitation : Aucun (Windows 11 Pro activable et testé)"
                },
                {
                    id: '3.13',
                    valeur: "BIOS mis à jour, Dépoussiérage interne et nettoyage des coques effectués"
                },
                {
                    id: '3.14',
                    valeur: "État général correct + vendu avec Sacoche de transport"
                }
            ]
        },
    ]

    const showModal = (e) => {
        e.preventDefault()
        const dialog = document.getElementById('vente-modal-'+e.currentTarget.getAttribute('data-id'));
        dialog.showModal()
    }

    return (
        <section className={"w-full bg-white py-8"} id={"section-apropos"}>
            <div className={"container mx-auto"}>
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>Vente d'ocassion et reconditionné</h2>

                <div className={"w-full grid grid-cols-3 gap-4"}>
                    {datas.map(d =>
                        <div className={"rounded-2xl shadow-lg bg-base-100 p-4 w-full grid grid-row mb-4"} key={d.id}>
                            <div className="w-full mb-2">
                                <h3 className={"card-title mb-2"}>{d.titre}</h3>

                                <span className={"mb-2 font-bold text-md"}>{d.prix}</span>

                                <p className={"text-sm mb-2"}>{d.description}</p>

                                <span className={"btn btn-primary btn-sm w-full mb-2"} data-id={d.id} onClick={showModal}>Voir la configuration</span>

                                <a className={"mb-2 btn btn-secondary btn-sm w-full"} href={`../vente/${d.pdf}`} target={'_blank'}>
                                    <FontAwesomeIcon icon={faFilePdf} className={"me-2"}></FontAwesomeIcon> Télécharger la fiche
                                </a>

                                <span className={"w-full flex justify-end text-sm"}>{d.date}</span>

                                <dialog id={`vente-modal-${d.id}`} className={"modal"}>
                                    <div className={"modal-box p-0 m-4 min-w-[50%] min-h-[50%]"}>
                                        <div
                                            className={"w-full p-2 bg-white border-solid border-t-0 border-l-0 border-r-0 border-2 border-slate-200 sticky top-0 z-100 font-bold"}>
                                            <FontAwesomeIcon icon={faGears} className={"me-2"}></FontAwesomeIcon> {d.titre} : {d.prix}
                                        </div>

                                        <div className={"py-4 px-8 text-justify"} id={"vente-modal-detail"}>
                                            <pre className={"text-wrap"}>{d.description}</pre>

                                            <ul className={"p-3 list-disc"}>
                                                {d.donnees.map(l =>
                                                    <li key={l.id} className={"text-sm mb-2"}>{l.valeur}</li>
                                                )}
                                            </ul>
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