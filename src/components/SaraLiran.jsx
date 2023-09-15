import React from 'react'

function SaraLiran() {
  return (
    <div>

        <div className='bg-green flex flex-col gap-y-2 py-4 justify-center items-center w-ful h-[200px]  text-center'>
            <h1 className='head3  md:text-5xl text-3xl py-2 font-normal text-bggreen  bg-transparent'>SARA TENDULKAR</h1>
            <p className='md:text-xl text-xs font-thin py-2 text-bggreen text-center bg-transparent tracking-widest'>In a nutshell, I am a typical Libran - searching for balance in every aspect of life. I find <br /> solace in organisation and structure, so much so that one may mistake calendar invites to <br /> be my love language.</p>
        </div>

        <div className='grid tracking-widest xl:grid-cols-3 md:grid-cols-2 my-8 w-10/12 gap-4 mx-auto sm:grid-cols-1 '>
            <div className='parent md:w-[350px] w-[95%] h-[400px] rounded-md'>
                <div className='child product w-full h-[90%]'>
                    
                </div>
                <div className='h-[10%] text-2xl z-10 absolute w-full
                  py-3 text-center font-light text-green'>Reflect</div>

            </div>
            
            <div className='parent md:w-[350px] w-[95%] h-[400px] rounded-md'>
                <div className='child product1 w-full h-[90%]'>
                    
                </div>
                <div className='h-[10%] text-2xl z-10 absolute w-full
                  py-3 text-center font-light text-green'>Plan</div>

            </div>
            <div className='parent md:w-[350px] w-[95%] h-[400px] rounded-md'>
                <div className='child product2 w-full h-[90%]'>
                    
                </div>
                <div className='h-[10%] text-2xl z-10 absolute w-full
                  py-3 text-center font-light text-green'>Track</div>
            </div>

        </div>
    </div>

     
  )
}

export default SaraLiran