import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Showdata from './Showdata';
function GetStudent() {
useEffect(() => {
   
   const geturl= async()=>{
     const value = await axios.get('http://localhost:4041/RestApp09/student/api/report');
     setData(value.data)
     console.log(value.data)
   }
   geturl()
}, [])


const [Data , setData] = useState([])

  return (
    <>
     {Data?.map((item,idx)=>(
       <Showdata  list={item} idx={idx}/>
     ))}
     

    </>
  )
}

export default GetStudent