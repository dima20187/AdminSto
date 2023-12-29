
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Test } from './Test'

const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Test' element={<Test/>}   />
    </Routes>

   </BrowserRouter>
  )
}

export default App