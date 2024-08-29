import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../../../public/Signup.avif'
import { FcGoogle } from "react-icons/fc";
import { useEcomContext } from '../../Context/ContextAPI';
import { Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Authentication = () => {
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {isLoggedIn,AddDataInDB,setFirst,first,
        createUserWithEmailAndPassword,user,loading,error,signInWithGoogle,
        signInWithEmailAndPassword,Signinuser,Singinloading,Singerror,
    }=useEcomContext()

    const handleSubmit=async(e)=>{
        e.preventDefault()
    const newUser=await createUserWithEmailAndPassword(email,password)
    if(newUser){
     localStorage.setItem('Ecomuser-info',JSON.stringify(newUser))   
    const userDoc={
     username:name,useremail:email,  
     uid:newUser.user.uid
    }
    await AddDataInDB('user',newUser.user.uid,userDoc)
    navigate('/')
    
    }
    }
    const GoogleSignup=async()=>{
        const success=await signInWithGoogle()
        if(success){
        localStorage.setItem('Ecomuser-info',JSON.stringify(success))    
          const userDoc={
           uid:success.user.uid,
           email:email,
           username:name,
          }
          await AddDataInDB('user',success.user.uid,userDoc)
          navigate('/')
        }
      }
      const handle=()=>{
        console.log('called')
        setFirst(!first)
      }

    const handleLogin=async(e)=>{
        e.preventDefault()
    const newUser=await signInWithEmailAndPassword(email,password)
    if(newUser){
        navigate('/')
    }
    }  
    
  return (
    <div className='flex space-x-3 md:pt-10 justify-center w-[100%] lg:p-16'>
    <div className='bg-blue-300 w-[50%] hidden lg:block '>
    <img src={image}  />
    </div>
    <div className='lg:w-[40%] xl:w-[30%] flex flex-col space-y-8 p-8'>
    
    {!first?(<>
        <div>
    <h1 className='text-3xl font-bold  '>Create an account</h1>
    <p className='text-sm pt-1'>Enter your details below</p>  </div>
        <form autoComplete='on' onSubmit={handleSubmit}>
    <div style={{borderBottom:'1px solid lightgrey'}}>
    <input type='text' placeholder='Name' className='bg-transparent outline-none
    placeholder-slate-400 text-sm w-[100%]' value={name} onChange={(e)=>setName(e.target.value)} />    
        </div> <br />
        <div style={{borderBottom:'1px solid lightgrey'}} >
    <input type='email' name='UserEmail' placeholder='Email' className='bg-transparent outline-none
    placeholder-slate-400 text-sm w-[100%]' value={email} onChange={(e)=>setEmail(e.target.value)} />    
        </div><br />
        <div style={{borderBottom:'1px solid lightgrey'}} >
    <input type='password' name='UserPass' placeholder='Password' className='bg-transparent outline-none
    placeholder-slate-400 text-sm w-[100%]' value={password} onChange={(e)=>setPassword(e.target.value)} />    
        </div><br />
    <button type='submit' className='bg-red-700 w-full py-1 text-white rounded-md'>
    {loading?(<Spinner />):('Create Account')}</button>
    <button className='bg-none px-3 py-1 w-full mt-2 flex space-x-2 justify-center items-center' style={{border:'1px solid lightgrey'}}>
        <span><FcGoogle className='text-2xl' /></span>
        <span onClick={GoogleSignup}>Sign up with Google</span>
    </button>
    </form>
    {error && <p className='text-red-900 text-sm'>{error.message}</p>}
    <div className='flex space-x-2 justify-center items-center'>
    <p className='text-sm'>Already have an account? </p>
    <NavLink  className='underline font-semibold text-red-800 text-sm'
     style={{textUnderlineOffset:'6px'}} onClick={()=>handle()}>Log in</NavLink>
    </div></>):(
     <>
     <div>
    <h1 className='text-3xl font-bold  '>Log in to Exclusive</h1>
    <p className='text-sm pt-1'>Enter your details below</p>  </div>
    <form autoComplete='on' onSubmit={handleLogin}>
     
         <div style={{borderBottom:'1px solid lightgrey'}} >
    <input type='email' name='UserEmail' placeholder='Email' className='bg-transparent outline-none
    placeholder-slate-400 text-sm w-[100%]' value={email} onChange={(e)=>setEmail(e.target.value)}  />    
        </div><br />
        <div style={{borderBottom:'1px solid lightgrey'}} >
    <input type='password' name='UserPass' placeholder='Password' className='bg-transparent outline-none
    placeholder-slate-400 text-sm w-[100%]' 
    value={password} onChange={(e)=>setPassword(e.target.value)} />    
        </div><br />
    <button type='submit' className='bg-red-700 w-[max-content] px-4 py-2 text-white rounded-md'>
     {Singinloading?(<Spinner />):'Log in'}  
    </button>
    <div className='flex items-center space-x-2 test-sm justify-center mt-3 mr-9 lg:mr-16'>
            <p>Don't have an account? </p>
            <NavLink  className='text-red-800 font-semibold ml-1 underline' style={{textUnderlineOffset:'6px'}}
            onClick={()=>handle()}>Sign up</NavLink>
          </div>
    </form>
    {Singerror && <p className='text-red-900 text-sm'>{Singerror.message}</p>}
     </>   
    )}
    
    </div>
    </div>
  )
}

export default Authentication
