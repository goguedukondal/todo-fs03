import React from 'react'
import './InputList.css'
import { useState } from 'react';
import {  FaRegTrashAlt } from "react-icons/fa";
import { useItem } from './DataProvider';
function InputList({item,id}) {
  const {del} =useItem()
  const [checked,setChecked] = useState(false)
   
  return (
    
    <div className='input-list'>
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"30px",paddingLeft:"30px"}}>
       <input type='checkbox' onClick={()=>setChecked(!checked)}/>
       <label style={{margin:"13px"}}>{item}</label>
       </div>
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"30px",paddingRight:"30px"}}>
       {checked?(<p style={{color:"green"}}>Completed</p>):(<p style={{color:"red"}}>Not Completed</p>)}
      
      <FaRegTrashAlt onClick={()=>del(id)} style={{margin:"13px"}}/> 
       </div>
    </div>
  )
}

export default InputList