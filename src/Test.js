import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../src/Style/Teble.css'




const Test = (rec) => {




const [state,setState]=useState([])
const [search,setFilter]=useState([])

useEffect(() =>{
try{
   axios.get('http://localhost:5000/logn')
   .then(res=>{
     setState(res.data)
      setFilter(res.data);
    console.log(state)
   })

} catch(e){
    console.log(e)
 }

},[])

const Fel = (event)=>{
  setFilter(state.filter(stat =>stat._id.toLowerCase().includes(event.target.value)))
}


  return (
    <div className='containerTable' >
        <input   onChange={Fel} />
        <div>
    <div>
            <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Имя</th>
          <th>Телефон</th>
          <th>Машины</th>
        </tr>
      </thead>
      <tbody>
      {search.reverse().map((stat)=>(
        <tr key={stat._id} >
          <td>{stat._id}</td>
          <td>{stat.name}</td>
          <td>{stat.email}</td>
          <td>{stat.cars}</td>
        </tr>))}
      </tbody>
    </table>



        </div>



        </div>
    </div>
  )
}

export {Test}