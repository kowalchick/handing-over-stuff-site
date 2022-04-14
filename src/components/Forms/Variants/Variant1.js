import React, {useContext} from 'react';

import {FormContext, WHAT_TO_GIVE_OPTIONS} from "../FormsContext";

function Variant1(props) {
  const {data, setData} = useContext(FormContext);

  // Lepiej zbudować handler specyficzny dla tego, co się dzieje na danym kroku
  // Zastanów się też gdzie lepiej trzymać buttonki - jak zaktualizować informację do następnego kroku?
  // (walidacje real-time vs walidacje na onClick
  const updateWhatToGive = (whatToGive) => {
    setData({
      ...data,
      whatToGive
    })
  };

  console.log(data);

  // const handleFormChange =(e) => {
  //     const checked = e.target.checked;
  //     const name = e.target.name;
  //
  //     setFormsData (prev => {
  //         return{
  //             ...prev,
  //             [name]: checked
  //         }
  //     })
  // }

  return (<>
      VARIANT 1
      <select onChange={evt => updateWhatToGive(evt.target.value)}>
        {
          Object.keys(WHAT_TO_GIVE_OPTIONS).map(key => <option key={key} value={key}>{WHAT_TO_GIVE_OPTIONS[key]}</option>)
        }
      </select>
    </>)

}

export default Variant1;