import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<App/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
