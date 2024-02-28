import React, { useEffect, useState } from 'react'
import axios from 'axios';

function StudentNumber() {
  useEffect(() => {
   
    const geturl= async()=>{
      const value = await axios.get('http://localhost:4041/RestApp09/student/api/number');
      setData(value.data)
      
    }
    geturl()
 }, [])

 const [Data, setData] = useState()

  return (
    <div>
        Number of students are {Data}
    </div>
  )
}

export default StudentNumber