import { React } from "react";
import Bukavu from "./images/bukavu2.png"
import Gorilla from "./images/gorilla2.jpg"
import "./culture.css"
import { useNavigate } from "react-router-dom";
import Explore from "./Explore";
import Breadcrumb from "./Breadcrump";

export default function Culture() {

    const navigate = useNavigate()
    function openWin() {
        window.scrollTo(0, 60)
        navigate("/culture")
    }

    function exploreMore() {
        window.scrollTo(0, 60)
        navigate("/explore")
    }

    return (
        <>    
            <section className="culturebag mb-5" >
                <section className="container mt-5 " id="culture">
                    <div className="cultureArt">
                        <div className="Culture">
                            <img src={Bukavu} alt="bukavu" />
                            <div>
                                <h1>Meat the congolese Culture</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <button onClick={openWin} className="btn btn-success mb-5">Read More</button>
                            </div>
                        </div>
                        <div className="Art">
                            <div className="explore">
                                <div className="explorebox">
                                    <div className="exploreitem">
                                        <img src={Gorilla} alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="paraArt">
                                <h6>Explore Sud-kivu</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.</p>
                                <button onClick={exploreMore} className="btn btn-success mb-5">Explore now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}