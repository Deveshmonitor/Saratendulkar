import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

function Galary() {
  return (
    <>
      <div className='md:w-10/12 w-[99%] mx-auto  flex gap-x-4 justify-center  mt-[36px]'>
        <div className='parent relative md:w-[35%] w-[50%] rounded-md flex flex-col ' >
          <div className='collection w-full h-[100%]'>

          </div>
          <div className=' flex z-10 cursor-pointer arrow justify-center items-center w-full bg-white md:py-5 py-1 md:text-2xl text-xs text-center text-green'>
            Shope The 2023 Planer <BsArrowRightShort className='arrow1 md:mt-2 mt-1  bg-transparent text-xs md:text-2xl'/>
          </div>
        </div>
        <div className='parent md:w-[70%] h-[100%] w-[50%] rounded-md'><img className='collection' src="/img/collection1.jpg" alt="" /></div>
      </div>

      <div className='w-full h-full m-auto my-14'>
        <video preload='auto' playsInline controls poster="https://cdn.shopify.com/s/files/1/0678/1501/4692/files/New_Project-1.jpg?v=1670891638" src="/video/video.mp4"></video>
      </div>
    </>
  )
}

export default Galary