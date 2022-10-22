import React from 'react'
import Home from './Home.js'
import Order from './Order.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Order" element={<Order />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App