import React from 'react';

const ErrPage =() =>{
    return (
        // Unikaj inline-owego stylowania - lepiej wypchnąć to do SCSS-a
        <h1
            className="fancy"
            style ={{
                fontSize: "3rem",
                color: "$darkgray",
                textAlign: "center",
                position: "relative",
                marginTop: "50%",
            }}
        >404 no page found
        </h1>
    );
}

export default ErrPage;