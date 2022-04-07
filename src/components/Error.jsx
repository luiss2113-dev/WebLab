import React from 'react'

const Error = ({ error, setErrorApi }) => {
  return (
    <div className='bg-red-800 p-4 text-white uppercase mx-2'
    onClick={()=> setErrorApi("")}>
          <p className='text-center'> {error}</p>
    </div>
  )
}

export default Error