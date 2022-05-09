import React, {useEffect} from 'react';
import {animateScroll} from 'react-scroll';

import NavMenu from "../NavMenu";
import FooterForm from "../FooterForm";

import FormHeader from "./FormHeader";
import Survey from "./Survey";
import {FormProvider} from "./FormsContext";

// 3 grupy importów:
// - zewnętrzne
// - pochodzące z projektu, ale z innych miejsc
// - lokalne, te, które zaczynają się od `./` i są specyficzne dla komponentu

const Forms = () => {

    useEffect(() => {
        animateScroll.scrollTo(0);
    }, [])

    return (
      <FormProvider>
            <NavMenu/>
            <FormHeader />
                <Survey />
            <FooterForm/>
      </FormProvider>
    );
}

export default Forms;