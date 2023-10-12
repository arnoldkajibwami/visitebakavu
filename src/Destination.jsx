import React from "react";
import Destinationcontent from "./Destinationcontent";
import Breadcrumb from "./Breadcrump";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image1 from "./images/flag.jpg"
import Dataitemsterii from "./Dataitemsterii";
import AllDestinations from "./Alldestionation";

export default function Destination() {
    return (
        <>
            <Breadcrumb
                page={"Destination"}
                image={Image1}
            />
            <div className="mb-5"></div>

            <AllDestinations/>

            {/* <Destinationcontent /> */}
        </>
    );
}