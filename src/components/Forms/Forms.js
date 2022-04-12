import React, {useEffect} from 'react';
import NavMenu from "../NavMenu";
import FooterForm from "../FooterForm";
import FormHeader from "./FormHeader";
import Survey from "./Survey";
import {animateScroll} from 'react-scroll';


const Forms = () => {

    useEffect(() => {
        animateScroll.scrollTo(0);
    }, [])

    return (
        <div>
            <NavMenu/>
            <FormHeader />
                <Survey />
            <FooterForm/>
        </div>
    );
}

export default Forms;