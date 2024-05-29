import React , {useState} from 'react'

export default function index() {
  const [arr,setArr] = useState([0])
  const addCount =()=>{
    let item = arr[arr.length -1]
    arr.push(item + 1);
    setArr([...arr])
  }

  const deleteCount=()=>{
    let item = arr[arr.length -1]
    arr.pop(item - 1);
    setArr([...arr])
  }

  const incCount =(index)=>{
   arr[index] = arr[index] + 1
   setArr([...arr])
  }
  const decCount =(index)=>{
    arr[index] = arr[index] - 1
    setArr([...arr])
   }
  return (
    <>
      <div className="container">
        <button onClick={addCount}>Add counter</button>
        <button onClick={deleteCount}>Delete counter</button>
        {
          arr.map((item, index)=>(
            <div key={index}>
               <button onClick={()=>incCount(index)}>+</button> 
               <p>{item}</p>  
               <button onClick={()=>decCount(index)}>-</button>
            </div>
           
          ))
        }
      </div>
    </>
  )
}
