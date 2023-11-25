import React from 'react'
import loadingGif from '../images/loadingGif.gif'

function Spinner() {
  return (
    <div style={{textAlign:'center', alignItems:'center',marginTop:'150px'}}>
        <img  style={{height:'60px'}} src={loadingGif} alt="loading" />
    </div>
  )
}

export default Spinner
