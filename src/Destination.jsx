import React from "react";
import Destinationcontent from "./Destinationcontent";
import Breadcrumb from "./Breadcrump";

export default function Destination () {
    return(
        <>
            <Breadcrumb page={"Destination"}/>
            <div className="mb-5"></div>
           <Destinationcontent/>
        </>
    );
}