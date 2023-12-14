import React from "react";
import "./about.css"
import Breadcrumb from "./Breadcrump";
import Image1 from "./images/flag.jpg"
import AboutDetails from "./AboutDetails";
export default function About() {
    return (
        <>
            <Breadcrumb
                page={"About"}
                image={Image1}
            />
            <AboutDetails />
        </>
    );
}