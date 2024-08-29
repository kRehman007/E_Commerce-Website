import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEcomContext } from '../../Context/ContextAPI';
import { BsHeartFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import CustomModal from '../../Context/Modal';
import { useDisclosure } from '@chakra-ui/react';
      //New Arrival....
import NA1 from '../../../public/NA1.avif'
import NA2 from '../../../public/NA5.webp'
import NA3 from '../../../public/NA3.jpg'
import NA4 from '../../../public/NA8.jpg'      
import { NavLink } from 'react-router-dom';
     //Icons....
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";          
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const FlashSale = () => {
  const navigate=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,AddItemsToWish,isWish,setIsWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])
  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images)
    }
    getData() 
    },[])
    
  const handleWish=(item)=>{
    setIsWish(prev=>({
      ...prev, 
      [item.id]:!prev[item.id]
    }))
    }
    
    const handleModal=(item)=>{
      setIsItemList(item)
     onOpen()
 }
  return (
    <>
  <div className=' flex flex-col space-y-3 justify-center p-3   md:ml-16 mt-11'>

  <div className='flex space-x-1 rounded-sm items-center'><div className='w-3 h-[30px] bg-red-600 border-none'></div>
  <span  className='text-sm text-red-600 font-semibold'>Today's</span></div>

  <div className='flex space-x-5  items-center mb-3'>
 <p className='font-bold text-3xl'>Flash Sales</p>
 <div className='flex space-x-3  pr-4 sm:pr-0'>
 <div className='flex flex-col items-center'><p className='text-sm'>Days</p><p className='font-bold'>03</p></div>
 <div className='flex flex-col items-center'><p className='text-sm'>Hours</p><p className='font-bold'>23</p></div>
 <div className='flex flex-col  items-center'><p className='text-sm'>Minutes</p><p className='font-bold'>19</p></div>
 <div className='flex flex-col  items-center'><p className='text-sm'>seconds</p><p className='font-bold'>56</p></div>
 
 </div>
  </div>

    <div className='flex flex-wrap gap-3 md:mr-11  lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 justify-center items-center overflow-hidden'>
    {data?.slice(1,5).map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover'
      onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text style={{color:'red',fontSize:'17px',fontWeight:'bold'}}>
          ${item.price}
        </Card.Text>
        
        <div className='text-2xl md:text-3xl cursor-pointer  absolute top-5 right-5'
         onClick={()=>handleWish(item)}>
       {isWish[item.id]?<BsHeartFill className='text-red-600'
       onClick={()=>RemoveItemsToWish(item)} />: <FaRegHeart 
       className='text-white' onClick={()=>AddItemsToWish(item)}/>}</div>     
      </Card.Body>
    </Card>
        </div>
    ))}  
    </div>
    <button className='px-3 py-1 bg-red-600 w-[max-content] m-auto mt-5 
    text-white' onClick={()=>navigate('/NewSale')}>View All products</button>
    </div>
     <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
   </>
  )
}

export default FlashSale

export const OurProducts=()=>{
  const navigate=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,AddItemsToWish,isWish,setIsWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])
  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images)
    }
    getData() 
    },[])
    
  const handleWish=(item)=>{
    setIsWish(prev=>({
      ...prev, 
      [item.id]:!prev[item.id]
    }))
    }
    const handleModal=(item)=>{
      setIsItemList(item)
     onOpen()
 }
  return (
    <>
  <div className=' flex flex-col space-y-1 p-3  ml-4 md:ml-16 mt-14'>

  <div className='flex space-x-1 rounded-sm items-center'><div className='w-3 h-[30px] bg-red-600 border-none'></div>
  <span  className='text-sm text-red-600 font-semibold'>Our products</span></div>

  <div className='flex space-x-5 items-center mb-4'>
 <p className='font-bold text-3xl'>Explore Our Products</p>
  </div>

    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 overflow-hidden '>
    {data?.slice(20,27).map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
     <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover p-1'
     onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2 md:pt-4' style={{borderTop:'1px solid lightgray'}}>
        <Card.Title className='text-sm mb-0 md:text-xl font-medium  md:font-semibold'>{item.name}</Card.Title>
        <Card.Text style={{color:'red',fontSize:'17px',fontWeight:'bold'}}>
          ${item.price}
        </Card.Text>
        <div className='text-2xl md:text-3xl cursor-pointer  absolute top-5 right-5'
         onClick={()=>handleWish(item)}>
       {isWish[item.id]?<BsHeartFill className='text-red-600'
       onClick={()=>RemoveItemsToWish(item)} />: <FaRegHeart 
       className='text-white' onClick={()=>AddItemsToWish(item)}/>}</div>     
      </Card.Body>
    </Card>
        </div>
    ))}  
    </div>
    <button className='px-3 py-1 bg-red-600 w-[max-content] m-auto mt-5 
    text-white'onClick={()=>navigate('/AllProducts')}>View All products</button>
    </div>
     <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
   </>
  )
}

export const NewArrival=()=>{
  return(
    <div className=' flex flex-col space-y-1 ml-4 md:mr-4 md:ml-16  md:mt-0 mb-6
    overflow-hidden'>

  <div className='flex space-x-1 rounded-sm items-center'><div className='w-3 h-[30px] bg-red-600 border-none'></div>
  <span  className='text-sm text-red-600 font-semibold'>Featured</span></div>
 <p className='font-bold text-3xl'>New Arrival</p>
 <div className=' flex flex-col lg:grid lg:grid-cols-2 gap-3  lg:ml-0 pt-4 md:pt-10 overflow-hidden
 w-[96%] lg:w-[98%] '>
  <div className='h-[402px]'>
  <div className='bg-black h-[100%] relative overflow-hidden'><img src={NA1} className='h-[100%] float-right' />
  <div className='absolute bottom-10 md:bottom-16 pl-8  flex flex-col space-y-2'>
  <h1 className='text-white text-2xl font-semibold'>Play Station 5</h1>
  <p className='text-sm text-white'>Black and White version of PS5<br />coming out on sale</p>
  <NavLink to='/PlayingStation' className='text-white font-medium underline '>Shop Now</NavLink>
  </div>
  </div></div>

  <div className='flex flex-col space-y-2 h-[402px]'>
<div className='bg-black h-[50%] relative overflow-hidden'><img src={NA2} className='h-[100%] float-right' />

<div className='absolute bottom-6 md:bottom-8 pl-8  flex flex-col space-y-2'>
  <h1 className='text-white text-2xl font-semibold'>Men's Collection</h1>
  <p className='text-sm text-white'>Featured man collection that<br />give you another vibe</p>
  <NavLink to='' className='text-white font-medium underline '>Shop Now</NavLink>
  </div>
</div>
  <div className='grid grid-cols-2 gap-3 h-[50%] overflow-hidden'>
  <div className='bg-black relative'><img src={NA3} className='h-[100%] float-right object-cover' />
  <div className='absolute bottom-4 md:bottom-20 pl-3 md:pl-8  flex flex-col space-y-1'>
  <h1 className='text-white text-2xl font-semibold'>Speakers</h1>
  <p className='text-sm text-white'>Amazon wireless speakers</p>
  <NavLink to='/Speakers' className='text-white font-medium underline '>Shop Now</NavLink>
  </div>
  </div>
  <div className='bg-black relative'><img src={NA4} className='h-[100%] float-right object-cover' />
  <div className='absolute bottom-4 md:bottom-20 pl-3 md:pl-8  flex flex-col space-y-1'>
  <h1 className='text-white text-2xl font-semibold'>Perfume</h1>
  <p className='text-sm text-white'>GUCCI INTENSE OUD EDP</p>
  <NavLink to='/PerfumeCollection' className='text-white font-medium underline '>Shop Now</NavLink>
  </div></div>  
  </div>
  </div>
  </div>
  </div>
  )
}

export const Delivery=()=>{
  const Array=[
    {icon:<CiDeliveryTruck />,text:'FREE AND FAST DELIVERY',msg:'Free delivery for all orders over $140'},
    {icon:<RiCustomerService2Line />,text:'24/7 CUSTOMER SERVICE',msg:'Friendly 24/7 customer support'},
    {icon:<IoShieldCheckmarkOutline />,text:'MONEY BACK GUARANTEE',msg:'We return money within 30 days'}
  ]
  return(
  <div className='grid grid-cols-1  lg:grid-cols-3 gap-4 mt-8 pt-16 lg:pt-8 md:mt-20  w-[70%]
  relative left-[50%] translate-x-[-50%] '>
    {Array.map((item,index)=>(
    <div key={index} className='flex flex-col space-y-2 items-center justify-center'>
    <div className='w-[60px] h-[60px] flex items-center justify-center border border-black
    rounded-full bg-gray-400'><span className='text-3xl'>{item.icon}</span></div>
    <span className='font-semibold text-xl md:text-2xl text-black'>{item.text}</span>
    <span className='text-sm text-gray-500'>{item.msg}</span>
    </div>
    ))}
  </div>

  )
}

