import React from 'react'

const CustomInput = ({type,value,onChange,placeholder}) => {
  return (
    <>
   
    <input 
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className='w-[100%] border border-mixColor px-2 py-2 rounded outline-none placeholder:text-sm'
    />
    </>
  )
}

export default CustomInput