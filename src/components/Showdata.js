import React from 'react'

function Showdata({list}) {
  return (
   <>
    <div>
       <h1>{list.firstName} {list.lastName}</h1>
       <h1>{list.regdNo}</h1>
       <h1>{list.roomNo}</h1>
       <hr></hr>
       <br />
    </div>
   </>
  )
}

export default Showdata