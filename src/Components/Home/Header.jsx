
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef } from "react";
import { IoMdCamera } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { useEcomContext } from "../../Context/ContextAPI";
import { NavBar } from "./Sidebar";
import { CgChevronDoubleRightO } from "react-icons/cg";
import './HomeStyle.css'
import { useNavigate } from "react-router-dom";



function Header() {
  const inputRef=useRef()
  const navigate=useNavigate()
  const {setIsSideBar,search,setSearch,setScreen,isScreen}=useEcomContext()


  const handleSearchInfo=async()=>{
    if(inputRef.current.value==''){return}
    navigate(`/${inputRef.current.value}`)
    }
useEffect(()=>{
  const handleResize=()=>{
    if(window.innerWidth>=900){
      setScreen(false)
    }
    else{
      setScreen(true)
    }
  }
  handleResize();
  window.addEventListener('resize',handleResize)

  return()=>window.removeEventListener('resize',handleResize)
},[setScreen])

const handleBack=()=>{
  inputRef.current.value=''
  navigate('/')
  setSearch(false)
}
  return (
              //SubMenu..........
              <>        

    <div className='bg-gray-900 w-[100%] text-white p-3 hidden md:block'>
      <div className='flex space-x-2 lg:justify-center md:justify-start md:px-7'>
      <div>Summer sale for All Swin Suits And Free Express Delivery - <span
      className='text-sm'>OFF 50%!</span></div>
      <a href='#' className='font-bold' style={{textDecoration:'underline'}}>ShopNow</a>
      </div>
    </div>
                {/* Menu...... */}
  <div className="flex justify-between pl-3 pr-3 lg:pr-16    md:pl-11 pt-1 pb-1 md:pt-3 md:pb-3   items-center
     sticky top-0 left-0 right-0 bg-gray-300 z-30 text-black w-[100%]  ">

  {search? 
  (
    <div className=" flex relative left-[50%] translate-x-[-50%] space-x-4  items-center
    lg:left-0 lg:translate-x-0 ">

    <div className="cursor-pointer"><CgChevronDoubleRightO onClick={handleBack}
    className="text-xl sm:text-3xl" /></div>
     <div className=" flex space-x-3 items-center border py-1 px-2 ">
     <IoMdCamera className=" text-xl sm:text-2xl"  />
     <input ref={inputRef} type='text' placeholder="What are you looking for ?"
     className="bg-transparent text-sm outline-none placeholder-red-400" />
     <CiSearch className="text-xl sm:text-2xl" onClick={handleSearchInfo}/>
     
    </div> 
    </div>
  ):
  (
        <>
    <h1 className="font-bold text-2xl cursor-pointer flex space-x-6 items-center ">
      {isScreen?(<>
        <IoMdMenu onClick={()=>setIsSideBar(true)} />
        <IoHomeSharp className="text-md" onClick={()=>navigate('/')} />
          </>):(<span className="pl-8" onClick={()=>navigate('/')}>Exclusive</span>)}
      </h1>
    <NavBar />  
    </>)}
    </div>            
  </>
  );
}

export default Header;