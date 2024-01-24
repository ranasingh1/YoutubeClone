import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className=" px-5 py-1 m-1 bg-gray-200 rounded-lg h-8">{name}</button>
    </div>
  )
}

export default Button 