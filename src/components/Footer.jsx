
import React from 'react'

function Footer() {
  return (
    <div className='bg-green text-bggreen tracking-widest'>
        <h1 className='head5 bg-green text-center md:text-5xl text-2.5xl py-3 font-mono'>Get in touch</h1>
        <p className='bg-green text-base font-thin py-4 text-center'>Let me know what you'd like to see next on my store: <span className='underline bg-green'>here</span></p>
        <div className="flex flex-col md:flex-row md:w-10/12 w-11/12 my-5 py-5 mx-auto justify-center bg-transparent border-b-2 border-white">
            <div className='w-[50%] bg-green flex flex-col justify-between'>
                <h1 className='bg-green my-4 font-semibold'>Quick Links</h1>
                <a className='bg-transparent py-2' href="">Privacy Policy</a>
                <a className='bg-transparent py-2' href="">Terms Of Service</a>
                <a className='bg-transparent py-2' href="">Return & Exchange</a>
                <a className='bg-transparent py-2' href="">Contact Us</a>
                <a className='bg-transparent py-2' href="">Instagram</a>
            </div>
            <div className='w-[50%] bg-green '>
                <h1 className='bg-transparent my-4 font-semibold'>Thank You...</h1>
                <p className='bg-transparent'>...for all the love and support! it means the world to me</p>
            </div>
        </div>
        <div className='w-full bg-green py-5'>
            <h1 className='text-sm bg-green text-center p-4'>© 2023, Sara Tendulkar Shop Powered by webunity.live</h1>
        </div>
    </div>
  )
}

export default Footer