import React, {useEffect, useState} from 'react';
import OnePage from './OnePage';
import {fetchWhoWeHelpData} from "../../../services/dataService";


const WhoHelp = () => {
    const [data, setData] = useState([]);
    const [activeData, setActiveData] = useState(null);
    useEffect(() => {
        fetchWhoWeHelpData().then(data => {
            setData(data);
            if (data.length) {
                setActiveData(data[0]);
            }
        }).catch(err => {
            console.error(err);
        });
    }, []);

    return (
        <section className="foundations" id="who-help">
            <div className="container">
                <div className="foundations-wrapper">
                    <h2 className="foundations-header fancy">Who do we help?</h2>
                    <div className="pages">
                        <div className="pages-btns">
                            {
                                data.map((page, index) => <button
                                        className={activeData === page ? "pages-btn current" : "pages-btn"}
                                        key={index}
                                        onClick={() => setActiveData(page)}>
                                        {page.recipient}
                                    </button>
                                )
                            }
                        </div>
                        {
                            activeData && <OnePage data={activeData}/>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhoHelp;
