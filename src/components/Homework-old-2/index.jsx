import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const [error,setError] = useState("")

const handleSubmit = (e) =>{
    e.preventDefault()
    const {password} = e.target

    if(password.value.length <= 4){
        setError("TOO WEAK")
    }else if(password.value.length >= 4 && password.value.length <= 8){
        setError("NOT BAD")
    }else{
        setError("STRONG")
    }
}
  return (
    <div className='container'>
    <div className="row mt-5 my-5">
        <div className="col-md-5">
        <div className="card">
        <div className="card-header">
            <h1>Check Password</h1>
        </div>

        <div className="card-body mb-5">
        <form onSubmit={handleSubmit} className='d-flex w-50 flex-column gap-2 form' id="submit">
      <input className='form-contol my-2 py-1 px-2' name="username" required type="text" placeholder='Username' />
      <input className='form-contol py-1 px-2' name="password" required type="password" placeholder='Password' />  
        <small>{error}</small>
    </form> 
        </div>

        <div className="card-footer">
        <button className='btn btn-primary' type='submit' form="submit">Submit</button>
        </div>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Form
