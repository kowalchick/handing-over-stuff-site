import React, {useContext, useState} from 'react';
import Variant1 from "./Variants/Variant1";
import Variant2 from "./Variants/Variant2";
import Variant3 from "./Variants/Variant3";
import Variant4 from "./Variants/Variant4";
import SumUp from "./Variants/SumUp";
import ThanksMessage from "./Variants/ThanksMessage";
import {FormContext} from "./FormsContext";

const Survey = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const {data, setData} = useContext(FormContext);
  //
  // const variant1Data = {whatToGive: data.whatToGive};
  // const variant1UpdateData = (variantData) => setData({
  //   ...data,
  //   whatToGive: variantData.whatToGive
  // });

  // console.log(data, variant1Data);

  const getCurrentVariant = () => {
    switch (currentPage) {
      case 1:
        return <Variant1/>
      case 2:
        return <Variant2/>
      case 3:
        return <Variant3/>
      case 4:
        return <Variant4/>
      case 5:
        return <SumUp/>
      case 6:
        return <ThanksMessage/>
    }
  }
  return (
    <section className="survey">
      <div className="container">
        <div className="form-inputs">
          {
            getCurrentVariant()
          }
        </div>
        <div className="form-nav">
          {
            ![1, 6].includes(currentPage) &&
            <button className="form-nav-btn btn" onClick={() => setCurrentPage(prev => prev - 1)}>Previous</button>
          }
          {
            ![5, 6].includes(currentPage) && <button className="form-nav-btn btn">Next</button>
          }
          {
            [5].includes(currentPage) &&
            <button className="form-nav-btn btn" onClick={() => setCurrentPage(prev => prev + 1)}>Confirm</button>
          }
        </div>
      </div>
    </section>
  );
}

export default Survey;