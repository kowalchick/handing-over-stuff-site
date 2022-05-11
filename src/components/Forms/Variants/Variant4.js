import React, {useContext} from 'react';

import {FormContext} from "../FormsContext";

export function Variant4() {
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
            <h3 className="step-number">Step 4 of 4</h3>
            <h2 className="step-title">Please provide the address and date of pickup of the item by the courier</h2>
            {/*<div className="step-contact">*/}
            {/*    <div className="step-address">*/}
            {/*        <h3 className="step-subtitle">Pickup Address:</h3>*/}
            {/*        <div className="step-line">*/}
            {/*            <label htmlFor="street">Street:</label>*/}
            {/*            <input type="text" id="street" name="street" value={variant1Data.street}*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*        <div className="step-line">*/}

            {/*            <label htmlFor="city">City</label>*/}
            {/*            <input type="text" id="city" name="city" value={variant1Data.city}*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*        <div className="step-line">*/}

            {/*            <label htmlFor="zipCode">Zip code</label>*/}
            {/*            <input type="text" id="zipCode" name="zipCode" value={variant1Data.zipCode}*/}
            {/*                   pattern="^[0-9]{2}-[0-9]{3}$"*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*        <div className="step-line">*/}
            {/*            <label htmlFor="phoneNumber">Telephone number</label>*/}
            {/*            <input type="text" id="phoneNumber" name="phoneNumber" value={variant1Data.phoneNumber}*/}
            {/*                   pattern="^([0-9]{9})$"*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="step-date">*/}
            {/*        <h3 className="step-subtitle">Date of picking up:</h3>*/}
            {/*        <div className="step-line">*/}
            {/*            <label htmlFor="date">Data</label>*/}
            {/*            <input type="date" id="date" name="date" value={variant1Data.data}*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*        <div className="step-line">*/}
            {/*            <label htmlFor="time">Hour</label>*/}
            {/*            <input type="text" id="time" name="time" value={variant1Data.time}*/}
            {/*                   pattern="^([01]?[0-9]|2[0-3]):[0-5][0-9]$"*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*        <div className="step-line">*/}
            {/*            <label htmlFor="notes">Notes for the courier</label>*/}
            {/*            <textarea rows="5" id="notes" name="notesForTheCourier" value={variant1Data.infoForTheCourier}*/}
            {/*                      onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )

}