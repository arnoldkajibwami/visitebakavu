import React from "react";

export default function ItemsTerritoire(props) {

    return (
        <>
            <div className="destinationbox" style={{ backgroundImage: `url(${props.image})` }}>
                {/* <div id="iddest"> */}
                <div className="destinationid">
                    <h6 >{props.pcapital}</h6>
                    <h6 id="h6box">{props.Province}</h6>
                    {/* <h6 id="h6box">{props.Province}</h6> */}
                </div>
                {/* </div> */}
            </div>
        </>
    )
}


