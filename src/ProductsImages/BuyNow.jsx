import React, { useEffect, useState } from 'react'
import { useEcomContext } from '../Context/ContextAPI'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import emailjs from 'emailjs-com';
import { Spinner } from '@chakra-ui/react';


const BuyNow = () => {
  
    const {BuyItem,setBuyItem,AddDataOrderInDB}=useEcomContext()
    const [Total,setTotal]=useState(0)
   const [name,setName]=useState('')
   const [city,setCity]=useState('')
   const [place,setPlace]=useState('')
   const [phone,setPhone]=useState('')
   const [email,setEmail]=useState('')
   const [address,setAddress]=useState('')
   const [sending,setisSending]=useState(false)
    useEffect(()=>{
      calculateTotalPrice()
    },[BuyItem])

    const handleAdd=(item)=>{
      setBuyItem(prev=>prev.map(cartItems=>(
        cartItems.id===item.id?(
        {...cartItems,qty:cartItems.qty+1
        }
        ):(cartItems)
      )))
      calculateTotalPrice()
    }
    const handleSub=(item)=>{
      if(item.qty>1){
      setBuyItem(prev=>prev.map(cartItems=>(
        cartItems.id===item.id?(
        {...cartItems,qty:cartItems.qty-1
        } 
        ):(cartItems)
      )))
      calculateTotalPrice()
    }
  }
  const calculateTotalPrice = () => {
    setTotal(BuyItem?.reduce((total, item) => total + (item.price*item.qty), 0))
  }

  const handlePlaceOrder = async(e) => {
    const orderDetails = BuyItem.map(item => {
      return `${item.title} - Qty: ${item.qty} - Price: $${item.price * item.qty}`;
  }).join('\n');
    const OrderDetails={
      name: name, 
     email: email, 
     city:city,
     location:address,
     phone:phone,
     order_details: orderDetails,
     total: Total,
 }
    e.preventDefault();
    await AddDataOrderInDB('Order',OrderDetails)
    setisSending(true)
    
    const templateParams = {
      name: name, 
      email: email, 
      order_details: orderDetails,
      total: Total,
  };
  

  emailjs.send('service_kr4q6l5', 'template_qb7k6dn', templateParams, '3HIY9RJ1E_KeBYEnf')
      .then(() => {
        setisSending(false)
        alert('Order has been placed successfully')
        setName('');
          setCity('');
          setPlace('');
          setPhone('');
          setEmail('');
          setAddress('');
      }, (err) => {
          alert('Failed to place the order. Please try again.');
      });

      // emailjs.send('service_kr4q6l5', 'template_qb7k6dn', ownerTemplateParams, '3HIY9RJ1E_KeBYEnf')
      // .then(() => {
      //   setisSending(false)
        
      //   console.log('SUCCESS!');
      // }, (err) => {
      //     alert('Failed to place the order. Please try again.');
      // });
};
    
  return (
    <>
      <div className='flex flex-col items-center lg:items-start lg:flex-row justify-between 
      space-x-4 lg:space-x-0 w-full lg:w-[90%] relative left-[50%] translate-x-[-50%] p-5'>
     <form
     className='flex flex-col items-start space-y-6 border-b-2 lg:border-none pb-5'>
      <h1 className='text-black text-3xl lg:text-5xl font-medium'>Fill Out The Form</h1>
     <div className='flex flex-col space-y-1 w-[300px]'><span className='text-gray-600 text-md'>Full Name</span>
     <input  type='text' required className='p-2 bg-slate-300 rounded-sm
     outline-none text-black' value={name} onChange={(e)=>setName(e.target.value)}  />
     </div>
     
     <div className='flex flex-col space-y-1 w-[300px]'><span className='text-gray-600 text-md'>Email Address</span>
     <input  type='email' required className='p-2 bg-slate-300 rounded-sm
     outline-none text-black' value={email} onChange={(e)=>setEmail(e.target.value)} />
     </div>
     <div className='flex flex-col space-y-1 w-[300px]'><span className='text-gray-600 text-md'>Street Address</span>
     <textarea required className='p-2 bg-slate-300 rounded-sm
     outline-none text-black' value={address} onChange={(e)=>setAddress(e.target.value)}  />
     </div>
     <div className='flex flex-col space-y-1 w-[300px]'><span className='text-gray-600 text-md'>
      Apartment, floor, etc. (optional)
     </span>
     <input  type='text'  className='p-2 bg-slate-300 rounded-sm
     outline-none text-black' value={place} onChange={(e)=>setPlace(e.target.value)}  />
     </div>
     <div className='flex flex-col space-y-1 w-[300px]'><span className='text-gray-600 text-md'>Town/City</span>
     <input  type='text' required className='p-2 bg-slate-300 rounded-sm
     outline-none text-black' value={city} onChange={(e)=>setCity(e.target.value)}  />
     </div>
     <div className='flex flex-col space-y-1 w-[300px]'><span className='text-gray-600 text-md'>Phone Number</span>
     <input  type='tel' required className='p-2 bg-slate-300 rounded-sm
     outline-none text-black' value={phone} onChange={(e)=>setPhone(e.target.value)}  />
     </div>
     </form>
      
     <div className='flex flex-col font-medium  space-y-4 pb-5 w-full  lg:w-[45%]  
     mt-14  lg:text-2xl'>
     <div className='grid grid-cols-3'>
      <p className=' text-black font-semibold '>Product</p>
      <p className='  text-black font-semibold pl-4'>Qty</p>
     <p className='text-black font-semibold pl-6'>Price</p>
     </div><hr />
     <div className='border-b-2 pb-5'>
     {BuyItem.map((item,index)=>(
      <div key={index} className='grid grid-cols-3 pt-4'>
     <div className='flex flex-col space-y-1 text-sm font-normal w-20'>
      <img src={item.img} className='w-8 h-8 rounded-full' />
      <p className='text-sm'>{item.title}</p>
     </div>
     <div className='qty flex items-center space-x-1'>
      <p onClick={()=>handleAdd(item)}><CiCirclePlus className='text-black text-2xl' /></p><p
      className='text-xl'>{item.qty}</p>
      <p onClick={()=>handleSub(item)}><CiCircleMinus className='text-black text-2xl' /></p>
     </div>
     <div className='price flex space-x-2 items-center'>
      <p className='pl-6 font-normal lg:text-xl'>${item.price*item.qty}</p>
     </div>
     </div>
    ))}</div>
     <div className='flex justify-between mb-4 mt-5 text-sm items-center  '>
    <span className=''>Subtotal</span><span>${Total}</span>
   
    </div><hr />
    <div className='flex justify-between mb-4 text-sm items-center mt-6'>
   <span  className=''>Shipping</span><span>Free</span> 
    </div> <hr />
    <div className='flex justify-between pb-8 text-sm mt-6 items-center'>
    <span className=''>Total</span><span>${Total}</span></div>
     <div className='flex space-x-2  mb-2'>
    <input type='checkbox' /><span className='text-black text-sm'>Cash on delivery</span></div>
    <button className='bg-red-700 px-3 py-2  text-white font-normal text-sm w-[min-content]
    whitespace-nowrap ml-5' onClick={handlePlaceOrder}>
    {sending?(<Spinner />):'Place Order'}
    </button>
      </div>      
      </div>
    
    
    </>
  )
}

export default BuyNow
