import React, {useState, createContext} from "react";

export const WHAT_TO_GIVE_OPTIONS = {
    CLOTHES_TO_PASS: 'Clothes to pass',
    CLOTHES_TO_THROW: 'Clothes to throw',
    TOYS: 'Toys',
    BOOKS: 'Books',
    OTHERS: 'Others',
}

export const FormContext = createContext(null);

// Postaraj się dalej poprawić ten obiekt tak, aby oddzielić prezentację wizualną od wartości, jak np. z `whatToGive`
// W szczególności - localization, whoToHelp itp.
// Możesz zamknąć dane adresowe w zagnieżdżonym obiekcie, np. `location: {street: "", city: "", /* tutaj reszta */}` itp.
const DEFAULT_DATA = {
    whatToGive: Object.keys(WHAT_TO_GIVE_OPTIONS)[0],
    bags: null,
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

    const variant1Data = {whatToGive: data.whatToGive};
    const updateVariant1Data = (variantData) => setData({
        ...data,
        whatToGive: variantData.whatToGive
    });

    return (
        <FormContext.Provider value={{variant1Data, updateVariant1Data}}>
            {children}
        </FormContext.Provider>
    )
}