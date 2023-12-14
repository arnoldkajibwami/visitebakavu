import React from "react";
import ItemsTerritoire from "./ItemesTerritoire";
import DataTerritoire from "./Dataterritoire";
import { Link } from "react-router-dom";


const Dataitemsterii = () => {
    return (
        <>
            <div className="allDestinations">
                {DataTerritoire.map((item, index) => {
                    return (
                        <>
                            <div className="mb-1">
                                <Link to="/home">
                                    <ItemsTerritoire
                                    image={item.image}
                                    pcapital={item.pcapital}
                                    Province={item.Province}
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

export default Dataitemsterii;