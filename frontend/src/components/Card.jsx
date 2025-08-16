import React from 'react'
import Main from './Main'

function Card() {
  return (
    <div className='w-full max-w-3xl bg-zinc-50 rounded-xl shadow-lg flex flex-col'>
        <div className="w-full flex flex-col justify-center items-center py-6 px-2">
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-center'>LinkedIn Search Tool</h1>
        </div>
        <div className=' w-full flex-1 px-4'> 
          <Main />
        </div>
        <div className='w-full flex items-center justify-center py-4 text-sm sm:text-base'> built by<a href="https://x.com/bharathkumxr" className='underline pl-2' target='_blank'>bharath kumar</a></div>
      
    </div>
  )
}

export default Card
