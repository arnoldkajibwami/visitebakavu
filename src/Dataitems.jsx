import React from "react";
import Data from "./Data";
import Items from "./Items";


const Dataitems = () => {
    return (
        <>
            <div className="allDestinations">
                {Data.map((item, index) => {
                    return (
                        <>
                            <div >
                                <Items
                                    image={item.image}
                                    ville={item.ville}
                                    Territoire={item.Territoire}
                                    item={item}
                                    key={index}
                                />
                            </div>
                        </>
                    )
                })}

            </div>

        </>
    )
}

export default Dataitems;