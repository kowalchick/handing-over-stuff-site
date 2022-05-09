import React, {useEffect, useState} from 'react';
import classnames from 'classnames';

const itemsPerPage = 3;

export default function OnePage({data}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    const totalPages = Math.ceil(data.list.length / itemsPerPage);

    const pagination = () => new Array(totalPages).fill(null).map((e, i) => (
        <li
            key={i + 1}
            className={classnames("pagination-item", {current: i + 1 === currentPage})}
            onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
        </li>
    ));

    useEffect(() => {
        const startIndex = currentPage * itemsPerPage - itemsPerPage;
        const endIndex = startIndex + 3;
        setCurrentItems(data.list.slice(startIndex, endIndex));

    }, [currentPage, data.list]);
    useEffect(() => {
        setCurrentPage(1);
    }, [data.list])


    return (
        <div className="one-page">
            {
                <h2 className="one-page-title">{data.title}</h2>
            }
            <ul className="one-page-list">
                {
                    currentItems.map((item, index) => (
                        <li className="organization" key={index}>
                            {
                                <>
                                    <div className="Organization-box">
                                        <h2 className="organization-name">{item.name}</h2>
                                        <h3 className="organization-description">{item.description}</h3>
                                    </div>
                                    <div className="organization-stuff">
                                        <p>{item.stuff}</p>
                                    </div>
                                </>
                            }
                        </li>
                    ))
                }
                {
                    totalPages > 1 && <ul className="pagination">
                        {
                            pagination().map(el => el)
                        }
                    </ul>
                }
            </ul>


        </div>
    );
}