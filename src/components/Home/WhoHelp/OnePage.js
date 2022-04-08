import { useState } from "react";

const data = {
    foundations: [
        {
            title: "Test 1"
            // Tutaj więcej właściwości - lista rzeczy, opis itp.
        },
        {
            title: "Test 2"
        },
        {
            title: "Test 3"
        },
        {
            title: "Test 4"
        }
    ],
    orgs: [
        {
            title: "Org 1"
        }
    ]
    // Tutaj reszta danych - zbiórki
};

const MAX_ITEMS = 3;

export default function App() {
    const [currentViewData, setCurrentViewData] = useState(data.foundations);
    const [currentPage, setCurrentPage] = useState(0);

    const pagesNeeded = Math.ceil(currentViewData.length / MAX_ITEMS);
    const pagingItems = Array.from(Array(pagesNeeded)).map(
        (_elt, index) => index
    );

    const currentElements = currentViewData.slice(
        currentPage * MAX_ITEMS,
        (currentPage + 1) * MAX_ITEMS
    );
    console.log(currentElements, currentPage * MAX_ITEMS);

    const switchData = (newDataObj) => {
        // Resetujemy najpierw stronę
        setCurrentPage(0);

        // Ustawiamy nową strukturę
        setCurrentViewData(newDataObj);
    };

    return (
        <>
            <div>
                <button onClick={() => switchData(data.foundations)}>1</button>
                <button onClick={() => switchData(data.orgs)}>2</button>
            </div>
            <br />
            <div>{currentElements.map((dataItem) => dataItem.title)}</div>
            <br />
            <div>
                PAGING
                {pagingItems.map((item) => (
                    <button onClick={() => setCurrentPage(item)}>{item + 1}</button>
                ))}
            </div>
        </>
    );
}