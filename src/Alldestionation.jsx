import React from "react";
import Destinationcontent from "./Destinationcontent";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dataitemsterii from "./Dataitemsterii";

export default function AllDestinations() {
    return (
        <>
            <section className="formboxs" style={{ marginTop: "-50px" }}>
                <div id="formtype">
                    <select style={{ width: "120px" }}>
                        <option value="Province">Province</option>
                        {/* <option value="Other"><input name="text" type="text" /></option> add a searching bar */}
                        <option value="province">Bandundu</option>
                        <option value="province">Bas-Congo</option>
                        <option value="province">Equator</option>
                        <option value="province">Kasi-Occidental</option>
                        <option value="province">Katanga</option>
                        <option value="province">Kinshasa</option>
                        <option value="province">Maniema</option>
                        <option value="province">Nord-Kivu</option>
                        <option value="province">Orientale</option>
                        <option value="province">Sud-Kivu</option>
                        {/* <option value="Other">Other</option> */}
                    </select>

                    <select style={{ width: "120px" }}>
                        <option value="Park">place to visite</option>
                        {/* <option value="Other"><input name="text" type="text" /></option> */}
                        <option value="hotel">Hotel</option>
                        <option value="Musey">Musey</option>
                        <option value="Musey">Stadium</option>
                        <option value="Other">Other</option>
                    </select>
                    <button style={{ width: "120px", textTransform: "capitalize" }} className="btn">search</button>
                </div>
            </section>

            <Tabs>
                <TabList className="container" style={{ marginTop: "20px" }}>
                    <Tab style={{ color: "#001253" }}>Famous Destionation</Tab>
                    <Tab style={{ color: "#001253" }}>Province</Tab>
                </TabList>

                <TabPanel>
                    <Destinationcontent />
                </TabPanel>
                <TabPanel>
                    <Dataitemsterii />
                </TabPanel>
            </Tabs>
        </>
    );
}