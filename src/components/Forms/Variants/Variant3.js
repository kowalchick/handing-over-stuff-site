import React, {useContext} from 'react';

import {FormContext} from "../FormsContext";

export function Variant3() {
    const {variant1Data, updateVariant1Data} = useContext(FormContext);

    const handleChange = (e) => {
        const value = e.target.checked;
        const name = e.target.name;
        updateVariant1Data(prev => {
                return {
                    ...prev,
                    [name]: value
                }
            }
        )
    }

    return (
        <>
            <h3 className="step-number">Step 3 of 4</h3>

            <label className="step-title">Localization:</label>
            <div>
                <select className="select-css" name="localization" value={variant1Data.localization}
                        onChange={handleChange}>
                    <option value="--choose--">--choose--</option>
                    <option value="Poznań">Poznań</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Wrocław">Wrocław</option>
                    <option value="Katowice">Katowice</option>
                </select>
            </div>

            <h3 className="step-subtitle">Who do you want to help?</h3>

            <div className="radio-group">
                <label className="radio-container">Children
                    <input type="radio" name="whomToHelp" value="Children"
                           checked={variant1Data.whomToHelp === "Children"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

                <label className="radio-container">Single mothers
                    <input type="radio" name="whomToHelp" value="Single mothers"
                           checked={variant1Data.whomToHelp === "Single mothers"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

                <label className="radio-container">Homeless people
                    <input type="radio" name="whomToHelp" value="Homeless people"
                           checked={variant1Data.whomToHelp === "Homeless people"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

                <label className="radio-container">Disabled
                    <input type="radio" name="whomToHelp" value="Disabled"
                           checked={variant1Data.whomToHelp === "Disabled"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

                <label className="radio-container">Elder people
                    <input type="radio" name="whomToHelp" value="Elder people"
                           checked={variant1Data.whomToHelp === "Elder people"}
                           onChange={handleChange}/>
                    <span className="checkmark"/>
                </label>

            </div>
            <label className="step-subtitle" htmlFor="org">Enter the name of a specific organization (optional)</label>
            <br/>
            <input className="form-inputs-input" type="text" id="org" name="customOrganization"
                   value={variant1Data.customOrganization}
                   onChange={handleChange}/>
        </>
    )

}