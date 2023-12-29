import React, { useState } from 'react'
import '../src/Style/Container.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Test } from './Test'

const Home = ({navigation}) => {

  const [login,setLogin]=useState('')
    const navigate = useNavigate()
    if(login ==='Admin'){
    
       navigate('Test')
    }

  return (
    <div className='container' >
      <h1>Администрация</h1>
      <div className='loginContainer' >
        <input value={login} onChange={(e)=>setLogin(e.target.value)} />
        <button>123</button>


      </div>
    </div>
  )
}

export {Home}