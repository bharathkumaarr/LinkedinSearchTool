import React from 'react'
import Main from './Main'

function Card() {
  return (
    <div className='h-screen w-3/6 bg-zinc-50'>
        <div className="w-full flex flex-col justify-center h-2/10 items-center  ">
          <h1 className='text-4xl'>LinkedIn Search Tool</h1>
        </div>
        <div className=' w-full h-7/10'> 
          <Main />
        </div>
        <div className='w-full flex items-center justify-center h-1/10'> built by<a href="https://x.com/bharathkumxr" className='underline pl-2' target='_blank'>bharath kumar</a></div>
      
    </div>
  )
}

export default Card
