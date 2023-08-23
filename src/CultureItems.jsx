import React from "react";

export default function CultureItems(props) {

    return (
        <>
            <div className="container culturedata">
                {/* <div className="cultureimage" style={{ backgroundImage: `url(${props.image})` }}>
                    <h6 id="territoireid">{props.territoire}</h6>
                </div> */}
                <div className="culturedetails">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>

        </>
    )
}


