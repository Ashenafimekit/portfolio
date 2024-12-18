import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './LandingPage/Landing'
import 'aos/dist/aos.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App