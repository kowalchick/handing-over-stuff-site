import React, {useState, createContext} from "react";

export const WHAT_TO_GIVE_OPTIONS = {
    CLOTHES_TO_PASS: 'Clothes to pass',
    CLOTHES_TO_THROW: 'Clothes to throw',
    TOYS: 'Toys',
    BOOKS: 'Books',
    OTHERS: 'Others',
}

export const FormContext = createContext(null);

const DEFAULT_DATA = {
    whatToGive: WHAT_TO_GIVE_OPTIONS.CLOTHES_TO_PASS,
    bags: "--choose--",
    localization: "--choose--",
    whoToHelp: false,
    customOrganization: "",
    street: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    date: "",
    time: "",
    infoForTheCourier: ""
};

export const FormProvider = ({children}) => {
    const [data, setData] = useState(DEFAULT_DATA);

    // FormProvider -> Provider. Context zawsze wystawia atrybut, który nazywa się "Provider" :)
    return (
        <FormContext.Provider value={{data, setData}}>
            {children}
        </FormContext.Provider>
    )
}