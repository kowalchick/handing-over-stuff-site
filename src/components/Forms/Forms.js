import React from 'react';
import NavMenu from "../NavMenu";
import FooterForm from "../FooterForm";
import FormHeader from "./FormHeader";
import Survey from "./Survey";

function Forms() {
    return (
        <>
            <NavMenu/>
            <FormHeader />
                <Survey />
            <FooterForm/>
        </>
    );
}

export default Forms;