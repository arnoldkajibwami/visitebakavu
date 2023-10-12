import React from "react";
import Data from "./Data";
import Items from "./Items";
import { Link } from "react-router-dom";


const Dataitems = () => {
    return (
        <>
            <div className="allDestinations">
                {Data.map((item, index) => {
                    return (
                        <>
                            <div className="mb-1">
                                <Link to="/home">
                                    <Items
                                        image={item.image}
                                        ville={item.ville}
                                        Territoire={item.Territoire}
                                        item={item}
                                        key={index}
                                    />
                                </Link>
                            </div>
                        </>
                    )
                })}

            </div>

        </>
    )
}

export default Dataitems;