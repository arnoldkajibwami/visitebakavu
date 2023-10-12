import React from "react";
import CultureData from "./CultureData";
import CultureItems from "./CultureItems";


const CultureDataitems = () => {
    return (
        <>
            <div className="mt-5 allDestinations">
                {CultureData.map((item, index) => {
                    return (
                        <>
                            <div className="mb-1">
                                <CultureItems
                                    image={item.image}
                                    title={item.title}
                                    territoire={item.territoire}
                                    text={item.text}
                                    item={item}
                                    more={item.more}
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

export default CultureDataitems;