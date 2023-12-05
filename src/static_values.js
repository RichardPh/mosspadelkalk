import { useState } from 'react';

function StaticValues({ timespris, setTimespris, ligakamper, setLigakamper, varighet, setVarighet, sesonger, setSesonger, matchplaypris, setMatchplaypris, mixmatchpris, setMixmatchpris, medlemskappris, setMedlemskappris }) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <div className="pb-4">
            <h2 className="text-2xl font-bold cursor-pointer" onClick={toggleAccordion}>
                Kalkuleringsgrunnlag
                <svg className={`inline-block w-6 h-6 ml-2 transition-transform duration-300 ${isAccordionOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7 10l5 5 5-5z" />
                </svg>
                <p className="text-base">Trykk for å se</p>
            </h2>
            <div className={`transition-all duration-300 ${isAccordionOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                <p className="text-base">Her kan du legge inn dine egne verdier, eller bruke de forhåndsdefinerte.</p>
                <fieldset className="mt-4">
                <div className="form-group text-base mb-2">
                        <label htmlFor="timespris">Timespris </label>
                        <input
                            type="number"
                            id="timespris"
                            name="timespris"
                            value={timespris}
                            onChange={(e) => setTimespris(e.target.value)}
                            className="text-black border border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                    <div className="form-group text-base mb-2">
                        <label htmlFor="ligakamper">Ligakamper per sesong </label>
                        <input
                            type="number"
                            id="ligakamper"
                            name="ligakamper"
                            value={ligakamper}
                            onChange={(e) => setLigakamper(e.target.value)}
                            className="text-black border border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                    <div className="form-group text-base mb-2">
                        <label htmlFor="sesonger">Sesonger i året </label>
                        <input
                            type="number"
                            id="sesonger"
                            name="sesonger"
                            value={sesonger}
                            onChange={(e) => setSesonger(e.target.value)}
                            className="text-black border border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                    <div className="form-group text-base mb-2">
                        <label htmlFor="varighet">Varighet per kamp i timer </label>
                        <input
                            type="number"
                            step="0.5"
                            min="0"
                            max="10"
                            id="varighet"
                            name="varighet"
                            value={varighet}
                            onChange={(e) => setVarighet(e.target.value)}
                            className="text-black border border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                    <div className="form-group text-base mb-2">
                        <label htmlFor="matchplaypris">Matchplay pris </label>
                        <input
                            type="number"
                            id="matchplaypris"
                            name="matchplaypris"
                            value={matchplaypris}
                            onChange={(e) => setMatchplaypris(e.target.value)}
                            className="text-black border border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                    <div className="form-group text-base mb-2">
                        <label htmlFor="mixmatchpris">Mixmatch pris </label>
                        <input
                            type="number"
                            id="mixmatchpris"
                            name="mixmatchpris"
                            value={mixmatchpris}
                            onChange={(e) => setMixmatchpris(e.target.value)}
                            className="text-black border border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                    <div className="form-group text-base mb-2">
                        <label htmlFor="medlemskappris">Medlemskap pris </label>
                        <input
                            type="number"
                            id="medlemskappris"
                            name="medlemskappris"
                            value={medlemskappris}
                            onChange={(e) => setMedlemskappris(e.target.value)}
                            className="text-black border border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default StaticValues;