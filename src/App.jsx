import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from'./components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import React from 'react'

import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <>
<Header/>
   
<Routes>
  <Route path='/' element={<Home/>}></Route>
</Routes>

<Footer/>


   


    </>
  )
}

export default App
