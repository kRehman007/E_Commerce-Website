import React,{useRef, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom'
import { useEcomContext } from '../../Context/ContextAPI'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { CiCamera, CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";


const Sidebar = () => {
  const {isSideBar,setIsSideBar,isScreen}=useEcomContext()
  const location=useLocation()
  const RenderSideBar=isScreen || location.pathname=='/'

  return (
    <>
    {RenderSideBar && isSideBar &&  (
    <ul 
     className='bg-gray-500 fixed top-0  z-50 h-screen min-w-[200px] p-6 pt-12  text-white'> 
     {isSideBar &&<IoArrowBackCircleOutline className='text-3xl text-black absolute top-2 left-4 cursor-pointer
     ' onClick={()=>setIsSideBar(false)} />}
     <li className='pt-3'><NavLink to='/WomenFashion' onClick={()=>setIsSideBar(false)}>Woman's Fashion</NavLink></li>
     <li><NavLink to='/MenFashion' onClick={()=>setIsSideBar(false)}>Man's Fashion</NavLink></li>
     <li><NavLink to='/Electronics' onClick={()=>setIsSideBar(false)}>Electronics</NavLink></li>
     <li><NavLink to='/Medicine' onClick={()=>setIsSideBar(false)}>Medicine</NavLink></li>
     <li><NavLink to='/Sports' onClick={()=>setIsSideBar(false)}>Sports @ Outdoor</NavLink></li>
     <li><NavLink to='/Baby' onClick={()=>setIsSideBar(false)}>Baby's & Toys</NavLink></li>
     <li><NavLink to='/Groceries' onClick={()=>setIsSideBar(false)}>Groceries & Beauty</NavLink></li>  
    </ul>
    )}
    
    
    
    
    </>
  )
}

export const NavBar=()=>{
  const inputRef=useRef()
  const {setSearch}=useEcomContext()
  
  const {cartItem,WishItem,signOut,isLoggedIn,setFirst}=useEcomContext()
 const navigate=useNavigate()
  const handleSearch=()=>{
    if(window.innerWidth<=800){
      setSearch(true)
    }
  }

  const handleLogOut=async()=>{
    const success=await signOut()
    if(success){
      localStorage.removeItem('Ecomuser-info')
      setFirst(true)
      navigate('/authentication')
    }
    }
    const handleSearchInfo=async()=>{
      if(inputRef.current.value==''){return}
    navigate(`/${inputRef.current.value}`)
    }


  return(
    <>
    <div className="flex justify-center items-center space-x-3 cursor-pointer">
    <div className='hidden lg:flex space-x-2 items-center border border-gray-400 px-2 py-1'>
      <CiCamera className='text-2xl' />
     <input type='search' placeholder='What are You Looking for?' className='w-[207px] outline-none
     placeholder-red-400 text-sm bg-transparent' ref={inputRef} />
     <CiSearch  className="text-2xl cursor-auto" onClick={handleSearchInfo} /> 
    </div>
    <CiSearch className="text-2xl cursor-auto lg:hidden" onClick={handleSearch} />

    <span className='relative pr-2' onClick={()=>navigate('/WishItems')}><CiHeart className="text-3xl" />
    <sup className={`${WishItem?.length>0 ? 'bg-red-500 w-4 h-4 rounded-full flex items-center justify-center absolute top-0 left-5 text-white text-md':''}`}>
      {WishItem?.length>0 && WishItem.length}</sup>
    </span>

    <span className='relative pr-2' onClick={()=>navigate('/CartItems')}><CiShoppingCart className="text-3xl" />
    <sup className={`${cartItem?.length>0 ? 'bg-red-500 w-4 h-4 rounded-full flex items-center justify-center absolute top-0 left-5 text-white text-md':''}`}>{cartItem?.length>0 &&
      cartItem.length}</sup>
    </span>
    <span>
      
    {isLoggedIn?(<span onClick={handleLogOut}><RiLogoutCircleLine className='text-2xl font-bold' /></span>):
    (<span><AiOutlineLogin className='text-2xl font-bold' onClick={()=>navigate('/authentication')} /></span>)}  
    </span>
    </div> 


    </>
  )
}

export default Sidebar
