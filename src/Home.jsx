import React from "react";
import  Image1  from "./images/bukavu2.png";
import "./style.css"
import Destinationcontent from "./Destinationcontent";

export default function Home() {
    return (
        <>
        <section className="backgroundhome text-center">
            <div className="homecontent">
                <p>Welcome</p>
                <h1>Sud-Kivu</h1>
                <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit elit.</p>
                <button className="btn btn-success">Explore Now</button>
            </div>
        </section>
        <section className="formboxs">
                <div id="formtype">
                    <select style={{width:"120px"}}>
                        <option value="Park">Park</option>
                        <option value="hotel">Hotel</option>
                        <option value="Musey">Musey</option>
                        <option value="Other">Other</option>
                    </select>
                    <input style={{width:"120px"}} type="date" name="date" />
                    <input style={{width:"120px"}} type="text" name="text" placeholder="Travel engine"/>
                    <button style={{width:"120px", textTransform:"capitalize"}} className="btn btn-danger">search</button>
                </div>
        </section>
        <Destinationcontent/>
        </>
    );
}