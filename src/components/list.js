import React from "react";

const List = (props) => {
    const listData=props.listItems.map((el,i)=>(
        <li key={i}><h2>{el}</h2></li>
    ));
    return (
        <div>
            <ul>
                {
                    listData
                }
            </ul>
        </div>
    )
};

export default List;