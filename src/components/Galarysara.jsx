import React from 'react'

function Galarysara() {
    return (
        <div className='md:w-10/12 w-11/12 py-10 h-full  mx-auto flex flex-col md:flex-row gap-x-4 justify-center items-center'>

            <div className='flex h-full md:flex-col flex-row justify-between relative overflow-hidden md:w-[30%] w-[96%] '>
                <img className='h-[100%] md:w-full w-[100%] rounded-md  mb-4 relative' src="/img/sara1.jpg" alt="" />
                <img className='h-[100%] md:w-full md:block hidden rounded-md mt-4' src="img/sara2.jpg" alt="" />
                
            </div>
            <div className='parent rounded-md md:w-[70%] w-[96%]'>
                <img className="child " src="img/sara.jpg" alt="" />
            </div>
        </div>
    )
}

export default Galarysara