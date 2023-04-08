import { useEffect, useState } from "react";

const Counter =({startNumber, increaseNumber, decreasNumber}) => {
    const [number, setnumber] = useState(startNumber || 0)

    useEffect(() => {
        // console.log("First Appearence");
      },[]);


    useEffect(() => {
        startNumber && setnumber(startNumber);
      },[startNumber]);
    function increase(Increament){
        setnumber(number + Increament);
    }
    function decrease(Decrement){
        setnumber(number - Decrement);
    }
    return (
        <div className="Counter">
            <h2>Counter</h2>
            <button onClick={() => decrease(decreasNumber || 1)}>Decrease</button>
            <br/>
            <span>{number}</span>
            <br/>
            <button onClick={() => increase(increaseNumber || 1)}>Increase</button>
        </div>
    )
}

export default Counter;
