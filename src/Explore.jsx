import React from "react";
import Breadcrumb from "./Breadcrump";
import Image1 from "./images/forest.jpg"
import AboutDetails from "./AboutDetails";
import Clip1 from './images/clip1.mp4'
import Video from "./Video";

export default function Explore() {
    return (
        <>
            <Video
                Clip={Clip1}
                page={"Explore"}
            />
            {/* <h1>Explore Sud-kivu</h1> */}
            <AboutDetails />
        </>
    )
} 