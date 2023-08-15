import React from "react";
import Contactdetails from "./Contactdetails";
import Breadcrumb from "./Breadcrump";

export default function Contact() {
    return (
        <>
            <Breadcrumb page={"Contact"} />
            <Contactdetails/>
        </>
    );
}