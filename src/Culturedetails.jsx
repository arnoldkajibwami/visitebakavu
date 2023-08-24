import React from "react";
import Image1 from "./images/kivu.jpg"
import Breadcrumb from "./Breadcrump";
import CultureDataitems from "./cutltureDataitems";
import './video.css'
import Clip2 from './images/clip2.mp4'
import Video from "./Video";

export default function Culturedetails() {
    return (
        <>
            {/* <Breadcrumb
                page={"Culture"}
                image={Image1}
            /> */}
            <Video 
            Clip={Clip2}
            page={"Culture"}
            />
            <div className="container text-center mt-5">
                <article>here are some congolese tribes located in the south of the Democratic Republic of the congo
                    (SUD- KIVU), sunch as Bashi ,Lega , Banyamulenge,....</article>
            </div>
            <CultureDataitems />
        </>
    )
}