import React from "react";
import Image1 from "./images/kivu.jpg"
import Breadcrumb from "./Breadcrump";
import CultureDataitems from "./cutltureDataitems";

export default function Culturedetails() {
    return (
        <>
            <Breadcrumb
                page={"Culture"}
                image={Image1}
            />
            <div className="container text-center mt-2">
                <article>here are some congolese tribes located in the south of the Democratic Republic of the congo
                    (SUD- KIVU), sunch as Bashi ,Lega , Banyamulenge,....</article>
            </div>
            <CultureDataitems />
        </>
    )
}