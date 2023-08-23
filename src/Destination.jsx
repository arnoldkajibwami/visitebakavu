import React from "react";
import Destinationcontent from "./Destinationcontent";
import Breadcrumb from "./Breadcrump";
import Image1 from "./images/flag.jpg"

export default function Destination() {
    return (
        <>
            <Breadcrumb
                page={"Destination"}
                image={Image1}
            />
            <div className="mb-5"></div>
            <Destinationcontent />
        </>
    );
}