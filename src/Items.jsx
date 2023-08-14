import React from "react";

export default function Items(props) {

    return (
        <>
            <div className="destinationbox" style={{ backgroundImage: `url(${props.image})` }}>
                {/* <div id="iddest"> */}
                <div className="destinationid">
                    <h6>{props.ville}</h6>
                    <h6 id="h6box">{props.Territoire}</h6>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}


