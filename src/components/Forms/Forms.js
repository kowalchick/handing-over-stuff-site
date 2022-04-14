import React, {useEffect} from 'react';
import NavMenu from "../NavMenu";
import FooterForm from "../FooterForm";
import FormHeader from "./FormHeader";
import Survey from "./Survey";
import {animateScroll} from 'react-scroll';
import {FormProvider} from "./FormsContext";

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