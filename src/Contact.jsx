import React from "react";
import Contactdetails from "./Contactdetails";
import Breadcrumb from "./Breadcrump";
import Image1 from "./images/flag.jpg"

export default function Contact() {
    return (
        <>
            <Breadcrumb
                page={"Contact"}
                image={Image1}
            />
            <Contactdetails />
        </>
    );
}