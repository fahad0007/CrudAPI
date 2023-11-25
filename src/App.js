import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './componenets/Form/Form'
import Display from './componenets/Display/Display'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Edit from './componenets/Edit/Edit';
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='display/edit' element={<Edit/>}/>
        <Route path='display' element={<Display/>}/>
      </Routes>
      
      </BrowserRouter>
      {/* <Form/> */}
      {/* <Display/> */}
      
    </div>
  )
}

export default App
