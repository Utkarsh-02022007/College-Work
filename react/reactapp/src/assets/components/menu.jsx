import React from "react";

function Menu(props){
    return(
        <>
            <div>Menu</div>
            <ul>
                <li>Entertainment</li>
                <li>Politics</li>
                <li>Tech</li>
                <li>Media</li>
            </ul>
            <button
            className="counter"
            onDoubleClick={()=>props.setCount((count)=>count+1)}
            >
                count is {props.count}
            </button>

        </>
    
    )
}
export default Menu

