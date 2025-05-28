import React, {useState} from 'react';
import ServiceDepannage from "./ServiceDepannage.jsx";
import ServiceAteliers from "./ServiceAteliers.jsx";
import ServiceAssistance from "./ServiceAssistance.jsx";
import Paiements from "./Paiements.jsx";

const SectionServices = () => {
    const [service, setService] = useState('depannage')

    return (
        <section className={"w-full bg-white py-4 lg:py-8"} id={"section-services"}>
            <div className={"container mx-auto mb-4"}>
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b"}>Services & Tarifs</h2>

                <p className={"w-full text-red-700 text-center my-4"}>Aucune prestation de services n'est éligible
                    au crédit d'impôt</p>

                <div className={"grid grid-cols-3 gap-2 lg:gap-4"}>
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

            <Paiements/>
        </section>
    );
};

export default SectionServices;