import React, { useState } from 'react'

function Buycard() {
    const [counter, setcounter] = useState(1);
    function handlemin() {
        if (counter > 1) {
            setcounter(counter - 1)
        }

    }
    function handlemax() {
        setcounter(counter + 1)
    }

    return (
        <>
            <div className='md:w-10/12 w-11/12 mx-auto flex md:flex-row flex-col justify-between items-center'>
                <div className='md:w-[50%] w-[100%]'>
                    <img src="/img/pro.png" alt="" />
                </div>
                <div className='md:w-[50%] w-[100%] flex flex-col justify-between'>
                    <h1 className='head4 text-5xl text-green font-thin'>2023 Planner</h1>
                    <h1 className='head5 text-md my-3 text-green'>Rs. 2,499.00 <span className='text-xs tracking-wider font-thin '>Sold out</span></h1>
                    <p className='text-green  my-2 text-sm md:text-md font-thin tracking-wider'>Task include</p>
                    <p className='text-green my-2 text-sm md:text-md font-thin tracking-wider'>Color</p>
                    <div className=' mb-4'>
                        <button className='text-center bg-green text-white hover:bg-white border-2 border-green hover:text-green px-6 rounded-full py-2 mr-2'>White</button>
                        <button className='text-center bg-white text-green hover:bg-green border-2 border-green hover:text-white px-6 rounded-full py-2 mx-2'>Black</button>
                    </div>
                    <p className='text-green text-sm md:text-md font-thin mt-2 tracking-wider'>Quantity</p>
                    <div className='flex my-2 border-[0.1rem] justify-center rounded-lg md:w-[30%] w-[50%] items-center border-green gap-x-2'>
                        <button className='text-xl px-4 py-2' onClick={handlemin}>-</button>
                        <div className='text-xl text-center px-4 py-2'> {counter} </div>
                        <button className='text-xl  px-4 py-2' onClick={handlemax}>+</button>
                    </div>
                    <div className='flex flex-col mt-4 w-full justify-center items-center '>
                        <button className='border-[0.1rem] border-green text-md p-3 cursor-not-allowed w-full my-2 font-semibold rounded-lg tracking-widest text-green'>Sold out</button>
                        <button className='border-[0.1rem] border-green text-md p-3 w-full my-2 hover:scale-y-105 font-semibold transition duration-150 hover:bg-green1 rounded-lg bg-greenn text-bggreen tracking-widest'>Buy it Now</button>
                    </div>
                </div>


            </div>

            <div className='bg-green w-full p-10'>
                <div className='md:w-10/12 w-11/12 mx-auto bg-transparent flex md:flex-row flex-col gap-y-6 justify-between items-cente gap-x-10'>
                    <div className='md:w-[50%] w-[100%] rounded-md'>
                        <img src="/img/lib1.jpg" alt="" />
                    </div>
                    <div className='md:w-[50%] w-[100%] rounded-md'>
                        <img src="/img/lib2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buycard