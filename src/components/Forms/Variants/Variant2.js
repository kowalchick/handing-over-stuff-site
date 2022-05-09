import React, {useContext} from 'react';

import {FormContext} from "../FormsContext";

export function Variant2() {
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
            <h3 className="step-number">Step 1 of 4</h3>
            <h2 className="step-title">Select the number of 60l bags in which you packed your things:</h2>
            <div>
                <label htmlFor="bags">Number of 60l bags</label>
                <select className="select-css" name="bags" value={variant1Data.bags} onChange={handleChange}>
                    <option value="--choose--">--choose--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </>
    )

}