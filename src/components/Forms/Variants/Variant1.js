import React, {useContext} from 'react';

import {FormContext, WHAT_TO_GIVE_OPTIONS} from "../FormsContext";

function Variant1() {
  const {variant1Data, updateVariant1Data} = useContext(FormContext);

  console.log(variant1Data, updateVariant1Data);
  return (<>
      VARIANT 1
      <select onChange={evt => updateVariant1Data({whatToGive: evt.target.value})} value={variant1Data.whatToGive}>
        {
          Object.keys(WHAT_TO_GIVE_OPTIONS).map(key => <option key={key} value={key}>{WHAT_TO_GIVE_OPTIONS[key]}</option>)
        }
      </select>
    </>)

}

export default Variant1;