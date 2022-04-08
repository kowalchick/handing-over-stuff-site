import { useState } from "react";

const data = {
    foundations: [
        {
            "name": 'Foundation "Care of my health"',
            "description": "Purpose and mission: Helping people in a difficult life situation.",
            "stuff": "clothes, food, household appliances, furniture, toys"
        },
        {
            "name": 'Foundation "For children"',
            "description": "Purpose and mission: Help children from poor families.",
            "stuff": "clothes, furniture, toys"
        },
        {
            "name": 'Foundation "No home"',
            "description": "Purpose and mission: Help for people without a place of residence.",
            "stuff": "clothes, food, warm blankets"
        },
        {
            "name": 'Foundation "Care of my health"',
            "description": "Purpose and mission: Helping people in a difficult life situation.",
            "stuff": "clothes, food, household appliances, furniture, toys"
        },
        {
            "name": 'Foundation "For children"',
            "description": "Purpose and mission: Help children from poor families.",
            "stuff": "clothes, furniture, toys"
        },
        {
            "name": 'Foundation "No home"',
            "description": "Purpose and mission: Help for people without a place of residence.",
            "stuff": "clothes, food, warm blankets"
        },
        {
            "name": 'Foundation "Care of my health"',
            "description": "Purpose and mission: Helping people in a difficult life situation.",
            "stuff": "clothes, food, household appliances, furniture, toys"
        },
        {
            "name": 'Foundation "For children"',
            "description": "Purpose and mission: Help children from poor families.",
            "stuff": "clothes, furniture, toys"
        },
        {
            "name": 'Foundation "No home"',
            "description": "Purpose and mission: Help for people without a place of residence.",
            "stuff": "clothes, food, warm blankets"
        }
    ],
    orgs: [
        {
            "name": 'Organization "Lorem Ipsum 1"',
            "description": "1 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "1 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 2"',
            "description": "2 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "2 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 3"',
            "description": "3 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "3 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 4"',
            "description": "4 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "4 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 5"',
            "description": "5 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "5 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 6"',
            "description": "6 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "6 Egestas, sed, tempus"
        }
    ],
    locals: [
        {
            "name": 'Organization "Lorem Ipsum 1"',
            "description": "1 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "1 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 2"',
            "description": "2 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "2 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 3"',
            "description": "3 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "3 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 4"',
            "description": "4 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "4 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 5"',
            "description": "5 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "5 Egestas, sed, tempus"
        },
        {
            "name": 'Organization "Lorem Ipsum 6"',
            "description": "6 Quis varius quam quisque id diam vel quam elementum pulvinar.",
            "stuff": "6 Egestas, sed, tempus"
        }

    ]

};

const itemsPerPage = 3;

export default function App() {
    const [currentPage, setCurrentPage] = useState(data.foundations);
    const [currentItems, setCurrentItems] = useState([]);

    const totalPages = Math.ceil(currentPage.length / itemsPerPage);
    const pagingItems = Array.from(Array(totalPages)).map(
        (_elt, index) => index
    );

    const currentElements = currentPage.slice(
        currentItems * itemsPerPage,
        (currentItems + 1) * itemsPerPage
    );
    console.log(currentElements, currentItems * itemsPerPage);

    const switchData = (newDataObj) => {
        // Resetujemy najpierw stronę
        setCurrentItems(0);

        // Ustawiamy nową strukturę
        setCurrentPage(newDataObj);
    };

    return (
        <>
            <div className="one-page">
                <button onClick={() => switchData(data.foundations)}>1</button>
                <button onClick={() => switchData(data.orgs)}>2</button>
                <button onClick={() => switchData(data.locals)}>3</button>
            </div>
            <br />
            <div className="organization-meta">
                <h2 className="organization-name">{currentElements.map((dataItem) => dataItem.name)}</h2>
                <h3 className="organization-description">{currentElements.map((dataItem) => dataItem.description)}</h3>

            </div>
            <div className="organization-stuff">
                <p>{currentElements.map((dataItem) => dataItem.stuff)}</p>
            </div>
            <br />
            <div>
                {
                    totalPages > 1 && <ul className="pagination">
                        {pagingItems.map((item) => (
                            <button className="pagination-item" onClick={() => setCurrentItems(item)}>{item + 1}</button>
                        ))}
                    </ul>
                }
                    </div>

        </>

    );
}