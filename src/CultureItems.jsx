import React from "react";
import { useNavigate } from "react-router-dom";

export default function CultureItems(props) {

    const navigate = useNavigate()
    function openWin() {
        window.scrollTo(0, 60)
        navigate("/Moreculture")
    }

    return (
        <>
            <div className="cardss">
                <div className="cardss-img" style={{ backgroundImage: `url(${props.image})` }}>
                    <h6 id="territoire">{props.territoire} Territoire</h6>
                </div>

                <div className="cardss-info">
                    <h1 className="text-title">{props.title}</h1>
                    <p className="text-body">{props.text}</p>
                    <button onClick={openWin} className="btn btn-primary">{props.more}</button>
                </div>
            </div>
        </>
    )
}


