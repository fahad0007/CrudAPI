import React, { useEffect, useState } from 'react'
import './Display.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

import { FiEdit } from 'react-icons/fi'
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Display = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] =useState(false)

    const notify =()=>{
        return  toast.success('Deleted Succesfully', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }

    const getUsersData = async () => {
        setIsLoading(true)
         await axios("https://655997ee6981238d054cb7f1.mockapi.io/crud")
         .then((res)=>setUsers(res.data))
         setIsLoading(false)
        
    }

    const handleFormPath = () =>{
        navigate("/")
    }
  
    const handleDelete = (id)=>{

        axios.delete(`https://655997ee6981238d054cb7f1.mockapi.io/crud/${id}`)
        .finally(()=> getUsersData())
        notify()
       
       
    }
   

    useEffect(() => {
        getUsersData()
    

    }, [])


    const handleNavigate = (elem)=>{

        navigate("/display/edit",{state:{elem}})

    }


    return (
        <div className='display'>
            <Tooltip id='my-tooltip' />
       {
        isLoading ? <Spinner/> : 
        <>
           
           <div className="viewForm">
    <button onClick={handleFormPath}>Go To Form</button>
</div>
            <Table variant='dark' striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                {
                    users.map((elem, id) => {
                        return <tbody key={id}>
                            <tr>
                                <td>{id + 1}</td>
                                <td>{elem.name}</td>
                                <td>{elem.email}</td>
                                <td>{elem.mobile}</td>
                                <td>{elem.address}</td>
                                <td className='actions'><FiEdit className='edit-Icon' data-tooltip-id="my-tooltip" data-tooltip-content="Edit" onClick={()=>{handleNavigate(elem)}}/> <IoTrashOutline className='delete-Icon' data-tooltip-id="my-tooltip" onClick={()=>handleDelete(elem.id)} data-tooltip-content="Delete" /></td>
                            </tr>


                        </tbody>
                    })
                }
            </Table>
        </>
       }
 <ToastContainer/>
        </div>
    )
}

export default Display
// onClick={()=>{navigate('../edit'),{state:{id:elem.id}}}}