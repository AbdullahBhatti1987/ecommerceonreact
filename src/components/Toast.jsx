import React from 'react'

function Toast({heading}) {
  return (
    <div className='p-10 lg:w-3/6 m-auto'>
        <h1 className='bg-white text-black text-2xl font-bold text-center p-5'>{heading}</h1>  
        <p className='text-black bg-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aliquam sed, voluptatibus magni beatae corrupti sequi tempora nulla eum enim. Architecto molestias ut doloremque mollitia tempore laudantium, fugit aut numquam?</p>

    </div>
  )
}

export default Toast