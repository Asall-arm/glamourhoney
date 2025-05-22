import React from 'react'
import './Error.css'

const Error = ( {msg} ) => {
  return (
    <div className='empty-error'>
      <h1>{msg} یافت نشد</h1>
    </div>
  )
}

export default Error
