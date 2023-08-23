import React from "react";
import Breadcrumb from "./Breadcrump";
import Image1 from "./images/forest.jpg"
import AboutDetails from "./AboutDetails";

export default function Explore() {
    return (
        <>
            <Breadcrumb
                page={"Explore"}
                image={Image1}
            />
            {/* <h1>Explore Sud-kivu</h1> */}
            <AboutDetails/>
        </>
    )
} 