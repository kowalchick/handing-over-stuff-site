import React, {useState, createContext} from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
    const data = {
        clothesToPass: false,
        clothesToThrow: false,
        toys: false,
        books: false,
        others: false,
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
    }
    const [formsData, setFormsData] = useState(data);

    return (
        <FormContext.FormProvider value={[formsData, setFormsData]}>
            {
                props.children
            }
        </FormContext.FormProvider>
    )
}