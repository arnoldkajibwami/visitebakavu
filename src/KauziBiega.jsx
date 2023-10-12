import React from "react"
import { Link } from "react-router-dom"

const KauziBiega = () => {
    return(
        <>
            <div style={{height:"80px"}}></div>
            <Link to="/home"><button className="btn btn-success" style={{}}>Back to Home Page</button></Link>
            <h1 className="container">Kauzi-Biega description</h1>
        </>
    )
}

export default KauziBiega