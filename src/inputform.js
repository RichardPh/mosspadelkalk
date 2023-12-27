import { useEffect, useState } from 'react';
import StaticValues from './static_values';

function InputForm() {
    const [showMatchplayInput, setShowMatchplayInput] = useState(false);
    const [matchplayFrequency, setMatchplayFrequency] = useState(45);
    const [showMixInput, setShowMixInput] = useState(false);
    const [mixFrequency, setMixFrequency] = useState(45);
    const [showExtraInput, setShowExtraInput] = useState(false);
    const [extraFrequency, setExtraFrequency] = useState(45);
    const [extraHours, setExtraHours] = useState(0);

    const [timespris, setTimespris] = useState(440);
    const [ligakamper, setLigakamper] = useState(7);
    const [varighet, setVarighet] = useState(1.5);
    const [sesonger, setSesonger] = useState(5);
    const [matchplaypris, setMatchplaypris] = useState(200);
    const [mixmatchpris, setMixmatchpris] = useState(200);
    const [medlemskappris, setMedlemskappris] = useState(690);
    const [spillFreepris, setSpillfreepris] = useState(24000);

    const [ligapris, setLigapris] = useState(0);
    const [matchplayYearly, setMatchplayYearly] = useState(0);
    const [mixmatchYearly, setMixmatchYearly] = useState(0);
    const [extraYearly, setExtraYearly] = useState(0);

    const [ligaspill, setLigaspill] = useState(false);
    const [matchplay, setMatchplay] = useState(false);    
    const [mixmatch, setMixmatch] = useState(false);
    const [extra, setExtra] = useState(false);


    const [totalpris, setTotalpris] = useState(0);
    const [totalprismedlemskap, setTotalprismedlemskap] = useState(0);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleMatchplayChange = (event) => {
        setShowMatchplayInput(event.target.checked);
        setMatchplay(event.target.checked);
    };

    const handleMixChange = (event) => {
        setShowMixInput(event.target.checked);
        setMixmatch(event.target.checked);
    };

    const handleExtraChange = (event) => {
        setShowExtraInput(event.target.checked);
        setExtra(event.target.checked);
    };

    const calculateTotalPrices = () => {
        ligaspill ? setLigapris(ligakamper * sesonger * varighet * timespris /4) : setLigapris(0);
        matchplay ? setMatchplayYearly(matchplaypris * matchplayFrequency) : setMatchplayYearly(0);
        mixmatch ? setMixmatchYearly(mixmatchpris * mixFrequency) : setMixmatchYearly(0);
        extra ? setExtraYearly(extraHours * extraFrequency * timespris /4) : setExtraYearly(0);
        
        //setTotalpris(ligapris + matchplayYearly + mixmatchYearly + extraYearly);
    };

    useEffect(() => {
        if (timespris > 500) {
            setError('Denne timesprisen var dyr!');
        } else {
            setError('');
        }
    }, [timespris]);

    
    useEffect(() => {
        setTotalpris(ligapris + matchplayYearly + mixmatchYearly + extraYearly);
    }, [ligapris, matchplayYearly, mixmatchYearly, extraYearly]);

    useEffect(() => {
        setTotalprismedlemskap((totalpris*0.9)+medlemskappris);
        console.log('totalprismedlemskap: '+ totalprismedlemskap);
        console.log('totalpris: '+ totalpris);
        console.log(totalprismedlemskap < totalpris);
        if(totalprismedlemskap < totalpris) {
            setMessage('Det lønner seg i teorien å være medlem i MPK prismessig. Du får også andre fordeler som medlem.');
        } else {
            setMessage('');
        }
    }, [totalpris, totalprismedlemskap, medlemskappris]);

    return (
        <div>
            <div className="text-red-500">{error}</div>
            <StaticValues timespris={timespris}
                setTimespris={setTimespris} 
                ligakamper={ligakamper} 
                setLigakamper={setLigakamper} 
                varighet={varighet} setVarighet={setVarighet} 
                sesonger={sesonger} setSesonger={setSesonger} 
                matchplaypris={matchplaypris} 
                setMatchplaypris={setMatchplaypris} 
                mixmatchpris={mixmatchpris}
                setMixmatchpris={setMixmatchpris}
                medlemskappris={medlemskappris}
                setMedlemskappris={setMedlemskappris}
             />

                <fieldset className="border p-4 rounded">
                    <legend className="text-lg font-bold">Spillkalkulator</legend>
                    <div className="flex flex-col items-start">
                        <div className="form-group text-lg">
                            <label htmlFor="liga">Spiller du i liga? </label>
                            <input type="checkbox" id="liga" name="liga" onChange={() => setLigaspill(!ligaspill)} />
                        </div>
                        <div className="form-group text-lg">
                            <label htmlFor="matchplay">Matchplay? </label>
                            <input type="checkbox" id="matchplay" name="matchplay" onChange={handleMatchplayChange} />
                        </div>
                        {showMatchplayInput && (
                            <div className="form-group pb-3 text-lg">
                                <label htmlFor="matchplayFrequency">Hvor mange ganger i året spiller du matchplay? </label>
                                <input type="number" id="matchplayFrequency" name="matchplayFrequency" onChange={(e) => setMatchplayFrequency(e.target.value)} value={matchplayFrequency} className="text-black border border-gray-300 rounded-md px-2 py-1" />
                            </div>
                        )}
                        <div className="form-group pb-3 text-lg">
                            <label htmlFor="mix">Mix matchplay? </label>
                            <input type="checkbox" id="mix" name="mix" onChange={handleMixChange} />
                        </div>
                        {showMixInput && (
                            <div className="form-group pb-3 text-lg">
                                <label htmlFor="mixFrequency">Hvor mange ganger i året spiller du mix? </label>
                                <input type="number" id="mixFrequency" name="mixFrequency" onChange={(e) => setMixFrequency(e.target.value)} value={mixFrequency} className="text-black border border-gray-300 rounded-md px-2 py-1" />
                            </div>
                        )}
                        <div className="form-group pb-3 text-lg">
                            <label htmlFor="extra">Spiller du ekstra i uken? </label>
                            <input type="checkbox" id="extra" name="extra" onChange={handleExtraChange} />
                        </div>
                        {showExtraInput && (
                            <>
                        <div className="form-group pb-3 text-lg">
                            <label htmlFor="timer">Hvor mange timer ekstra, spiller du i uken? </label>
                            <input type="number" step="0.5" id="timer" name="timer" value={extraHours} onChange={(e) => setExtraHours(e.target.value)} className="text-black border border-gray-300 rounded-md px-2 py-1" />
                        </div>
                        <div className="form-group pb-3 text-lg">
                            <label htmlFor="extraFrequency">Hvor mange uker i året spiller du ekstra? </label>
                            <input type="number" id="extraFrequency" name="extraFrequency" value={extraFrequency} onChange={(e) => setExtraFrequency(e.target.value)} className="text-black border border-gray-300 rounded-md px-2 py-1" />
                        </div>
                            </>
                        )}
                    </div>
                    
                    <input type="submit" value="Kalkulér" onClick={calculateTotalPrices} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" />
    

                </fieldset>

                <div className="text-base">
                    {ligaspill ? <div className="text-base">Ligapris: {ligapris}</div> : null}
                    {matchplayYearly ? <div className="text-base">Matchplaypris: {matchplayYearly}</div> : null}
                    {mixmatchYearly ? <div className="text-base">Mixmatchpris: {mixmatchYearly}</div> : null}
                    {extraYearly ? <div className="text-base">Ekstrapris: {extraYearly}</div> : null}
                    {totalpris ? <div className="text-base">Totalpris: {totalpris}</div> : null}
                    {totalpris ? <div className="text-base">Totalpris med medlemskap inkl. kontingent til MPK: {totalprismedlemskap}</div> : null}
                </div>
                <div className="text-base font-bold">
                    {message}
                </div>
        </div>
    );
}

export default InputForm;