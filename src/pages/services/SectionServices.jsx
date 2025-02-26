import React, {useState} from 'react';
import ServiceDepannage from "./ServiceDepannage.jsx";
import ServiceAteliers from "./ServiceAteliers.jsx";
import ServiceAssistance from "./ServiceAssistance.jsx";

const SectionServices = () => {
    const [service, setService] = useState('depannage')

    return (
        <section className={"w-full bg-white py-8"} id={"section-services"}>
            <div className="container mx-auto mb-4">
                <div className="w-full border rounded-full border-2 border-secondary text-center font-bold text-xl p-4 text-secondary">
                    Fin des colis le 11 Mars - Merci de votre compréhension
                </div>
            </div>


            <div className={"container mx-auto mb-4"}>
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b"}>Services & Tarifs</h2>

                <p className={"w-full text-red-700 text-center my-4"}>Aucune prestation de services n'est éligible
                    au crédit d'impôt</p>

                <div className={"grid grid-cols-3 gap-4"}>
                    <button type={"button"}
                            className={`btn ${service === 'depannage' ? 'btn-primary' : 'btn-ghost'}`}
                            onClick={() => setService('depannage')}>
                        Dépannage
                    </button>

                    <button type={"button"}
                            className={`btn ${service === 'ateliers' ? 'btn-warning' : 'btn-ghost'}`}
                            onClick={() => setService('ateliers')}>
                        Ateliers de groupe
                    </button>

                    <button type={"button"}
                            className={`btn ${service === 'assistance' ? 'bg-green-600 border-green-600 text-white' : 'btn-ghost'}`}
                            onClick={() => setService('assistance')}>
                        Assistance bureautique
                    </button>
                </div>

                {service === 'depannage' && <ServiceDepannage/>}
                {service === 'ateliers' && <ServiceAteliers/>}
                {service === 'assistance' && <ServiceAssistance/>}
            </div>

            <div className="container mx-auto">
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b"}>Paiement en boutique</h2>

                <div className={"w-full grid grid-cols-3 gap-4"}>
                    <div className="card m-4 basis-1/4 shadow-xl">
                        <div className="card-body p-4">
                            <h2 className="card-title">Moyens de paiement acceptés directement au comptoir</h2>
                            <ul className="w-full p-2 text-sm">
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Carte bancaire</b> (avec insertion ou sans contact) - Pas de plafond de
                                    montant
                                </li>
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Appli banque</b> sur smartphone en sans contact - Pas de plafond de montant
                                </li>
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Appli banque</b> pour virement bancaire - Pas de plafond de montant
                                </li>
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Espèces</b> - Montant maximal selon la limite francaise de 1000€ par facture
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card m-4 basis-1/4 shadow-xl">
                        <div className="card-body p-4">
                            <h2 className="card-title">Moyens de paiement différés acceptés</h2>
                            <ul className="w-full p-2 text-sm">
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Virement bancaire</b> Pas de plafond de montant, mais attente de réception du
                                    paiement sur le compte avant remise de la commande (comptez 48h d’attente minimum
                                    après envoi du virement)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card m-4 basis-1/4 shadow-xl bg-error text-white">
                        <div className="card-body p-4">
                            <h2 className="card-title">Moyens de paiement non acceptés</h2>
                            <ul className="w-full p-2 text-sm">
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Chèques</b>
                                </li>
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Titre cadeaux</b>
                                </li>
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Chèque vacances</b>
                                </li>
                                <li className={`py-1 border border-b-1 border-t-0 border-r-0 border-l-0`}>
                                    <b>Cartes génération #HDF</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionServices;