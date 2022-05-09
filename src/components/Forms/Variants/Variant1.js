import React, {useContext} from 'react';

import {FormContext} from "../FormsContext";

export function Variant1() {
  const {variant1Data, updateVariant1Data} = useContext(FormContext);

  // console.log(variant1Data, updateVariant1Data);

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        const name = e.target.name;
        updateVariant1Data(prev => {
                return {
                    ...prev,
                    [name]: isChecked
                }
            }
        )
    }

  return (
      <>
          <h3 className="step-number">Step 1 of 4</h3>
          <h2 className="step-title">Select what do you want to give:</h2>
          <label className="checkbox-container">Clothes that can be reused
              <input type="checkbox" id="CLOTHES_TO_PASS" checked={variant1Data.CLOTHES_TO_PASS} name="CLOTHES_TO_PASS"
                     onChange={handleChange}/>
              <span className="checkmark"/>
          </label>

          <label className="checkbox-container">Clothes to throw
              <input type="checkbox" id="CLOTHES_TO_THROW" name="CLOTHES_TO_THROW" checked={variant1Data.CLOTHES_TO_THROW}
                     onChange={handleChange}/>
              <span className="checkmark"/>
          </label>

          <label className="checkbox-container">Toys
              <input type="checkbox" id="TOYS" name="TOYS" checked={variant1Data.TOYS} onChange={handleChange}/>
              <span className="checkmark"/>
          </label>

          <label className="checkbox-container">Books
              <input type="checkbox" id="BOOKS" name="BOOKS" checked={variant1Data.BOOKS} onChange={handleChange}/>
              <span className="checkmark"/>
          </label>

          <label className="checkbox-container">Others
              <input type="checkbox" id="OTHERS" name="OTHERS" checked={variant1Data.OTHERS} onChange={handleChange}/>
              <span className="checkmark"/>
          </label>
    </>
  )

}