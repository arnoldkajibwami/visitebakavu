import React from "react";
import Image1 from "./images/kivu.jpg"
import Breadcrumb from "./Breadcrump";
import CultureDataitems from "./cutltureDataitems";
import './video.css'
import Clip2 from './images/clip2.mp4'
import Video from "./Video";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Culturedetails() {
    return (
        <>
            <Video
                Clipvideo={Clip2}
                page={"Culture"}
            />
            <h1 className="text-center mt-4">Congolese Tribes</h1>

            <Tabs >
                <TabList className="container" style={{ marginTop: "20px" }}>

                    <Tab style={{ color: "#001253" }}>All provinces</Tab>
                    <Tab style={{ color: "#001253" }}>Kinshsa</Tab>
                    <Tab style={{ color: "#001253" }}>Sud-Kivu</Tab>
                    <Tab style={{ color: "#001253" }}>Nord-Kivu</Tab>
                    <Tab style={{ color: "#001253" }}>Maniema</Tab>
                    <Tab style={{ color: "#001253" }}>Haut-Katanga</Tab>
                    <Tab style={{ color: "#001253" }}>Tanganyika</Tab>
                    <Tab style={{ color: "#001253" }}>Kasai</Tab>

                </TabList>
                {/* All */}
                <TabPanel>
                    <div className="container text-center mt-2 mb-3">
                        <article>All Tribes</article>
                    </div>
                </TabPanel>
                {/* Kin */}
                <TabPanel>
                    <div className="container text-center mt-2 mb-3">
                        <article>Kinshsa is the most popular city of DRC</article>
                    </div>
                </TabPanel>
                {/* Sud-kivu */}

                <TabPanel>
                    <div className="container text-center mt-2 mb-3">
                        <article>Southern </article>
                    </div>
                    <CultureDataitems />
                </TabPanel>
                {/* Nord-kivu */}

                <TabPanel>
                    <div className="container text-center mt-2 mb-3">
                        <article>Nordth</article>
                    </div>
                </TabPanel>

                {/* MAniema */}
                <TabPanel>
                    <div className="container text-center mt-2 mb-3">
                        <article>Maniema</article>
                    </div>
                </TabPanel>

                {/* haut-katanga */}

                <TabPanel>
                    <div className="container text-center mt-2 mb-3">
                        <article>Haut-Katanga</article>
                    </div>
                </TabPanel>

                {/* Tanganyika */}

                <TabPanel>
                    <div className="container text-center mt-2 mb-3">
                        <article>Tanganyika</article>
                    </div>
                </TabPanel>

                {/* Kasaii */}

                <TabPanel>
                    <div className="container text-center mt-2 mb-3">
                        <article>Kasaii</article>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    )
}