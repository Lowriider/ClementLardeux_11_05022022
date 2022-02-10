import React from "react";

const Tags = ({tags}) => {
    return (
        <div className="rent-tags">
        {
             tags.map((tag, key) => {
                 return (
                     <div className="rent-tag" key={key}>{tag}</div>
                 )
             })
        }
        </div>

    )
}
export default Tags
