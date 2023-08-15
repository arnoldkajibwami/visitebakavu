import React from "react";
import "./style.css"
import Destinationcontent from "./Destinationcontent";
import Culture from "./Culture";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
        <section className="backgroundhome text-center">
            <div className="homecontent">
                <p>Welcome</p>
                <h1>Sud-Kivu</h1>
                <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit elit.</p>
                <Link to="/explore"><button className="btn btn-success">Explore Now</button></Link>
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
                    <button style={{width:"120px", textTransform:"capitalize"}} className="btn">search</button>
                </div>
        </section>
        <section className="mt-5 container text-center">
                <h4 className="">Popular Destination</h4>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    <br />omnis ad sequi debitis delectus dolore, ex libero.</p>
            </section>
        <Destinationcontent/>
        <Culture/>
        </>
    );
}