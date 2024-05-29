import React, { useState } from 'react'

const Second = () => {

  const [str,setStr] = useState("Login")
  const [btn,setBtn] = useState("LOGIN")
  const buttonClick = () =>{
    str === "Login" ? setStr("Logout") && setBtn("LOGOUT") : setStr("Login") && setBtn("LOG IN")
  }
  return (
    <div>
        <h2>{str}</h2>

        <button onClick={buttonClick}>{btn}</button>
    </div>
  )
}

export default Second