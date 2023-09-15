import React,{useState} from 'react'
import { CgShoppingBag } from "react-icons/cg"
import { GoSearch } from "react-icons/go"
import { IoCloseSharp } from "react-icons/io5"
import { IoMdMenu } from "react-icons/io"

function Navbar() {
    const [search,setSearch] = useState(false);
    const [nav,setnav] = useState(false);
    function handlechange(){
        setSearch(!search);
    }
    function navchange(){
        setnav(!nav);
    }
    return (
        <>
            <div className='bg-green'><h1 className='headtext uppercase py-[0.4rem] text-bggreen w-10/12 mx-auto font-normal bg-transparent'>Sold out!</h1></div>
            <div className='flex justify-between items-center px-[20px] py-[24px] md:w-10/12 w-[96%] mx-auto'>
                <p className='flex relative '> 
                     <GoSearch onClick={handlechange} className='text-2xl md:flex hidden'/>
                      { search && <input className='absolute left-10 md:flex hidden focus:none outline-none border-b-2 ' type="text" placeholder='Search' />
                }
                </p>
                <p onClick={navchange} className='md:hidden block relative'>{nav ? (<IoCloseSharp className='text-3xl'/>): (<IoMdMenu className='text-3xl'/>)}
                {nav && (
                    <div className='font-thin absolute top-10 my-4 -left-10 h-auto w-screen bg-bggreen  tracking-widest text-center flex flex-col justify-center items-center '>
                    <a  href="" className='p-3 my-4 hover:textUnderlineOffset-4 underline hover:text-black text-gray-500'>Home</a>
                    <a  href="" className='p-3 my-4 hover:underline hover:text-black text-gray-500'>Product</a>
                    <a  href="" className='p-3 my-4 hover:underline hover:text-black text-gray-500'>Get in touch</a>
                    </div>
                )}
                </p>
                
                <img className='max-w-[130px] h-full m-auto' src="/img/logo.png" alt="" />
                <p className='flex relative mr-6'> 
                     <GoSearch onClick={handlechange} className='text-2xl flex md:hidden'/> { search && <input className='absolute left-0 md:hidden block -bottom-10 focus:none outline-none border-b-2 ' type="text" placeholder='Search' />
                }
                </p>
                <p><CgShoppingBag className='text-2xl' /></p>
                
            </div>
            <div className='font-thin hidden tracking-widest text-center md:flex justify-center items-center '>
                <a  href="" className='p-3 hover:textUnderlineOffset-4 underline hover:text-black text-gray-500'>Home</a>
                <a  href="" className='p-3 hover:underline hover:text-black text-gray-500'>Product</a>
                <a  href="" className='p-3 hover:underline hover:text-black text-gray-500'>Get in touch</a>
            </div>
            <div className='pt-[44px] pb-[40px]'>
                <h1 className='head2 text-center text-green text-5xl my-4 font-medium'>New Year, New Planner</h1>
                <p className='text-center text-green font-light text-lg md:text-xl '>2023 is here and there's no better time than <span className='text-green font-bold '>NOW</span> to reflect on the year that passed, <br className='md:block hidden' />
                     translate your learnings into new goals and prepare to <span className='text-green font-bold italic'>absolutely smash the year that</span> <br className='md:block hidden'/>
                     <span className='text-green font-bold italic '>comes!</span></p>
            </div>
        </>
    )
}

export default Navbar