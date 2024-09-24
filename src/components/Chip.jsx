import React from 'react'

function Chip({title, onClick}) {
  return (
    <div className='border py-1 px-2 sm:text-sm lg:text-md rounded-sm focus:bg-purple-200 hover:bg-purple-100 text-nowrap sm:my-3'>
        <h2 onClick={onClick}>{title}</h2>
    </div>
  )
}

export default Chip