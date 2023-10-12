import React from "react";
import Culture from "./Culture";
import Breadcrumb from "./Breadcrump";
import AllDestinations from "./Alldestionation";

export default function Explore() {
    return (
        <>
            <Breadcrumb page={"Explore"} />
            <AllDestinations />
            <Culture />
        </>
    )
} 