import React,{useState}from 'react'
import "./App.css"
const Table = () => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12];
    const inActive='btn btn-outline-primary m-2';
    const Active='btn btn-outline-primary m-2 active'
    const[number,setnumber]=useState(null);
  return (
    <div><center className='mt-2'>
        <h2>please select your table</h2>
        {numbers.map((num,index)=>
        <div style={{display:'inline'}} key={index}>
           <button  className={number===num?Active:inActive} onClick={()=>setnumber(num)}>
            {num}
            </button>  
         </div>)}
            </center></div>
  )
}

export default Table