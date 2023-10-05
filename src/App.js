import './App.css';
import React from 'react';
import {useState} from 'react'
import useList from './custom-hooks/UseList';
function App() {
  const {list, push, pull} = useList()
  const [todo, setTodo]= useState("")
  const onsubmit=(event) => {
    event.preventDefault()
    if(todo == ""){
      alert("Please type something to add in the list.")
    }
   
    
    else if (todo != ""){
    push(todo)
    setTodo("")
    }
  }
  return (
   <div>
    <div className="bg-orange-200  conatiner-fluid scroll"  >
        <nav className="bg-amber-400 border-gray-200  sm:px-4 py-3 px-5 rounded  justify-center items-center text-center">
          <div className="container  items-center justify-center text-center  mx-auto">
            <span className="items-center text-3xl font-bold whitespace-nowrap justify-center text-amber-100	">
              Todo's List
             </span>
          </div>
        </nav>

<form onSubmit={(event)=>{onsubmit(event)}} className="justify-text-center w-full">
<div className="relative m-2 ">
<div className="absolute inset-y-0 right-0.5 py-5 flex items-center pl-3 bg-yellow-100  rounded-lg  ">

<button type="submit" className="fa-sharp fa-solid fa-plus float-right fa-2xl  px-2  text-yellow-700  hover:text-red-700 " ></button>
</div>
<input type="text" className="  rounded-lg text-2xl  block w-full p-2.5 py-5 my-5 text-yellow-700 bg-amber-200 " placeholder="Add Task Hear"onChange={(e)=>{setTodo(e.target.value)}}  value={todo}/>
</div>
</form>

<h5>{list.map((listItem, listIndex)=>{
  return(
    <div className ='bg-yellow-100  w-50  px-5 py-5 mt-10 mx-5 rounded-3xl flex'>
      <li style={{listStyle : 'none'}} className="text-amber-700 font-semibold flex-1 text-2xl px-3" key={listIndex}> {listItem}</li>
      <div  className='mb-3'>
      <button className="fa-sharp fa-solid fa-trash fa-2xl self-center inline-flex items-center mt-5 right-0 text-red-500 hover:text-red-700 float-right" onClick={()=>{pull(listIndex)}}></button>
      </div>
    </div>
  )
})}</h5>
</div>
   </div>
  );
}
export default App;









// import React from "react";

// export default function App() {
//   return (
   
//       <div className="bg-orange-200  "  style={{height : '100vh'}}>
//         <nav className="bg-amber-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded  justify-center items-center text-center">
//           <div className="container  items-center justify-center text-center  mx-auto">
//             <span className="items-center text-3xl font-bold whitespace-nowrap justify-center text-amber-100	">
//               Todo's List
//             </span>
//           </div>
//         </nav>
//         <form>
//        <div>
//        <div className="relative m-2 ">
//   <div className="absolute inset-y-0 right-0.5 py-3 flex items-center pl-3 bg-yellow-100  rounded-lg  ">
//   <button className="fa-sharp fa-solid fa-plus float-right fa-2xl  px-2  text-yellow-700  hover:text-red-700 "></button>
//   </div>
//   <input type="text"  className="  rounded-lg   block w-full p-2.5 py-3 my-5 text-yellow-700 bg-amber-200 " placeholder="Add Task Hear" required/>
// </div>
//           </div>
//         </form>




//         <div className ='bg-yellow-100  w-50  px-2 py-10 mt-10 mx-2 rounded-3xl' >
// <span className="text-amber-700"></span>
// <button className="fa-sharp fa-solid fa-trash fa-2xl   text-red-500 hover:text-red-700  float-right"></button>
//         </div>
        
//       </div>
    
//   );
// }
