import React, {useEffect, useState} from 'react';
import OnePage from './OnePage';

const data =
    [
        {
            recipient: "Foundations",
            title: "In our database you will find a list of verified Foundations with which we cooperate. You can check what they do, who they help and what they need.",
            list: [
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
                    "name": 'Foundation "Care of my dog"',
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
                    "stuff": "clothes, food, household appliances, furniture, toys"
                },
                {
                    "name": 'Foundation "For odults"',
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
                    "stuff": "clothes, furniture, toys"
                },
                {
                    "name": 'Foundation "No direction home"',
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
                    "stuff": "clothes, food, warm blankets"
                },
                {
                    "name": 'Foundation "Care of my cat"',
                    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
                    "stuff": "clothes, food, household appliances, furniture, toys"
                },
                {
                    "name": 'Foundation "For you"',
                    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
                    "stuff": "clothes, furniture, toys"
                },
                {
                    "name": 'Foundation "Want to go home"',
                    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
                    "stuff": "clothes, food, warm blankets"
                }
            ]
        },
        {
            recipient: "Non-governmental organizations",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            list: [
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
        },
        {
            recipient: "Local fundraisers",
            title: "Another Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            list: [
                {
                    "name": 'Fundraiser "Lorem Ipsum 1"',
                    "description": "1 Quis varius quam quisque id diam vel quam elementum pulvinar.",
                    "stuff": "1 Egestas, sed, tempus"
                },
                {
                    "name": 'Fundraiser "Lorem Ipsum 2"',
                    "description": "2 Quis varius quam quisque id diam vel quam elementum pulvinar.",
                    "stuff": "2 Egestas, sed, tempus"
                },
                {
                    "name": 'Fundraiser "Lorem Ipsum 3"',
                    "description": "3 Quis varius quam quisque id diam vel quam elementum pulvinar.",
                    "stuff": "3 Egestas, sed, tempus"
                }
            ]
        }
    ];

const WhoHelp = () => {
    const [activeData, setActiveData] = useState(null);
    useEffect(() => {
        setActiveData(data[0]);
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
