import React from 'react';

const SectionAgenda = () => {
    return (
        <section className={"w-full bg-white py-8"} id={"section-agenda"}>
            <div className={"container mx-auto"}>
                <h2 className={"w-full text-center text-xl font-bold py-2 border-1 border-b mb-4"}>Agenda</h2>

                <div className="grid grid-cols gap-4 w-full">
                    <p>#TODO</p>
                </div>
            </div>
        </section>
    );
};

export default SectionAgenda;