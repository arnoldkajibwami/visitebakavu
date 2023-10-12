import React from "react";
import Destinationcontent from "./Destinationcontent";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dataitemsterii from "./Dataitemsterii";

export default function AllDestinations() {
    return (
        <>
            <div className="mb-5"></div>

            <Tabs >
                <TabList className="container" style={{ marginTop: "20px" }}>
                    <Tab style={{ color: "#001253" }}>TOp Destionation</Tab>
                    <Tab style={{ color: "#001253" }}>Territoire</Tab>
                </TabList>

                <TabPanel>
                    <Destinationcontent />
                </TabPanel>
                <TabPanel>
                    <Dataitemsterii/>
                </TabPanel>
            </Tabs>
        </>
    );
}