import React from "react";
import CultureData from "./CultureData";
import CultureItems from "./CultureItems";


const CultureDataitems = () => {
    return (
        <>
            <div className="cultureitemsbox">
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