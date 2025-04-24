import { useState } from "react";

function State(){

    let [data,setData]=useState(0)
    // data=0

    function incCount(){
        setData(data+1); // 1 2 3
        // setData--data:1 2 3
    }
    function decCount(){
        setData(data-1);
    }
    console.log(data)
    return(
        <>
            <button onClick={incCount}>+</button>
            &nbsp;
            <span>{data}</span>
            &nbsp;
            <button onClick={decCount}>-</button>

            {/* useState hook */}
        </>
    )
}

export default State;