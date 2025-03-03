import AProposBoutique from "./AProposBoutique.jsx";
import AProposTechnicien from "./AProposTechnicien.jsx";
import AProposValeurs from "./AProposValeurs.jsx";

const SectionApropos = () => {
    return (
        <section className={"w-full bg-white py-8"} id={"section-apropos"}>
            <div className={"container mx-auto"}>
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>A propos</h2>

                <div className={"w-full grid grid-cols-2 gap-4"}>
                    <AProposBoutique />

                    <div className={"grid grid-row gap-2"}>
                        <AProposTechnicien />

                        <AProposValeurs />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionApropos;