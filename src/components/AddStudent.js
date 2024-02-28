import React, { useState } from 'react'
import StudentService from '../services/StudentService';



const AddStudent = () => {
 
  const [student, setStudent] = useState({
    id:"",
    firstName: "",
    lastName:"",
    regdNo: "",
    roomNo:""
  });

  const handleChange = (e) => {
      const value = e.target.value;
      setStudent({ ...student, [e.target.name]: value});
  };

  const saveStudent = (e) => {
     e.preventDefault();
     StudentService.saveStudent(student)
     .then((response)=>{
      console.log(response);
     })
     .catch((error) => {
        console.log(error);
     });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-9">
        <div className="font-thin text-2xl tracking-wider">
           <h1>Add New Student</h1>
        </div>
      <div className="items-center justify-center h-14 w-full my-4">
         <label className="block text-gray-600 text-sm font-normal">
             First Name 
         </label>
         <input type="text" 
         name="firstName" 
         value={student.firstName}
         onChange = {(e) => handleChange(e)}
         className="h-10 w-96 border mt-2 px-2 py-2"></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
         <label className="block text-gray-600 text-sm font-normal">
             Last Name 
         </label>
         <input type="text" 
          name="lastName"
          value={student.lastName}
          onChange = {(e) => handleChange(e)}
         className="h-10 w-96 border mt-2 px-2 py-2"></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
         <label className="block text-gray-600 text-sm font-normal">
             Registration Number 
         </label>
         <input type="number"
          name="regdNo"
          value={student.regdNo}
          onChange = {(e) => handleChange(e)}
         className="h-10 w-96 border mt-2 px-2 py-2"></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
         <label className="block text-gray-600 text-sm font-normal">
             Room Number 
         </label>
         <input type="text"
          name="roomNo"
          value={student.roomNo}
          onChange = {(e) => handleChange(e)}
         className="h-10 w-96 border mt-2 px-2 py-2"></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
         <button 
         onClick={saveStudent}
         className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 ">
           Save
         </button>
         <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 ">
           Clear
         </button>

      </div>
      </div>
    </div>
  )
}

export default AddStudent