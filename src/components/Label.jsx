import React from 'react'

const Label = ({label}) => {
  return (
    <>
     <label className='text-sm text-goldColor' htmlFor={label}>{label}</label>
    </>
  )
}

export default Label