import React from "react";
import { useState} from "react"

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red": "white"
  function handleClick(event){
    setIsOn(!isOn);
    // setColor("red")
  }
  return <button onClick={handleClick} style={{background: color}}>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
