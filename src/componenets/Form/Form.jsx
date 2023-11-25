import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
  const notify =()=>{
    return  toast.success('Added Succesfully', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleMobile = (e) => {
    setMobile(e.target.value)
  }

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post("https://655997ee6981238d054cb7f1.mockapi.io/crud", {
      name,
      email,
      mobile,
      address
    })
    notify()
    const data = res.data
    setName("")
    setEmail("")
    setMobile("")
    setAddress("")
    console.log(data)
  }
  const navigate = useNavigate()
  return (

    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" onChange={handleName} value={name} required placeholder='Name' />
        <input type="email" onChange={handleEmail} value={email} required placeholder='Email' />
        <input type="mobile" onChange={handleMobile} value={mobile} required placeholder='Mobile' />
        <input type="text" onChange={handleAddress} value={address} required placeholder='Address' />
        <button type="submit" className='submit'>Submit</button>
      <button className="view" onClick={() => { navigate('display') }}>View Lists</button>
        <ToastContainer/>
      </form>
    </div>


  )

}

export default Form
