import React from 'react'
import Button from './Button'

const list = ["All", "Live", "News", "Gaming", "Cricket", "Music", "Virat Kohli", "Comedy", "Movies", "Education", "Travel", "Fitness"];
const ButtonList = () => {
  return (
    <div  className='flex flex-wrap justify-center'>
     {list.map((name, index)=>{
        return(<Button name={name} key={index}/>)
     })}   
    </div>
  )
}

export default ButtonList