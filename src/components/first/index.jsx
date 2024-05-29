import React, { useState } from 'react'

const First = () => {
  const [step,setStep] = useState(0)
  const [qadam,setQadam] = useState(0)

  const plusStep = () =>{
    let result = step+1
    setStep(result)
  }

  const findMetr = ()=>{
    let result = step+qadam
    setQadam(result)
  }

  return (
    <div className='container mt-5'>
        <div>
          <h1>Metr: {qadam}</h1>
          <button onClick={findMetr}>Yurish</button>
        </div>

        <div>
          <h1>Qadam kengligi: {step}</h1>
          <button onClick={plusStep}>+</button>
        </div>
    </div>
  )
}

export default First
