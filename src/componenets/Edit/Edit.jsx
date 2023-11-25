import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')

  const recieveData = location.state.elem;
  console.log(recieveData, "Location")

 

  useEffect(() => {
    setName(recieveData.name)
    setEmail(recieveData.email)
    setMobile(recieveData.mobile)
    setAddress(recieveData.address)
  }, [recieveData])

  const notify = () => {
    return toast.success('Updated Succesfully', {
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




  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`https://655997ee6981238d054cb7f1.mockapi.io/crud/${recieveData.id}`, {
      name,
      email,
      mobile,
      address
    })

      .then(() => {navigate('/display') })

notify()
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" onChange={handleName} value={name} placeholder='Name' />
        <input type="email" onChange={handleEmail} value={email} placeholder='Email' />
        <input type="mobile" onChange={handleMobile} value={mobile} placeholder='Mobile' />
        <input type="text" onChange={handleAddress} value={address} placeholder='Address' />
        <button type="submit" className='submit'>Update</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Edit
