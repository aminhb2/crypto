import React from 'react'
import spinner from '../../assests/image/spinner.gif'

const Spinner = () => {
  return (
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center',height:'100vh'}}>
        <img src={spinner} alt="" />
    </div>
  )
}

export default Spinner