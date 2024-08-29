import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useEcomContext } from '../Context/ContextAPI'
import { MdDeleteForever } from "react-icons/md";
import CustomModal from '../Context/Modal';
import { useDisclosure } from '@chakra-ui/react';

const WishList = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
    const {WishItem,RemoveItemsToWish,cartItem,setCartItem,GetDocumentData}=useEcomContext()
    const [ItemList,setIsItemList]=useState('')
    const navigate=useNavigate()
    const [data,setData]=useState([])

  useEffect(()=>{
  const getData=async()=>{
   const FlashData=await GetDocumentData()
  const suggestedItems=FlashData?.images.filter(item =>{
 const  inWishList=WishItem.some(itemlist=>itemlist.id==item.id)
 const inCartList=cartItem.some(itemlist=>itemlist.id==item.id)
 return !inWishList && !inCartList

  })
  setData(suggestedItems)
  }
  getData() 
  },[])
  
    
    const handleWishList=(item)=>{
      
      const res=cartItem.find(itemlist=>itemlist.id===item.id)
      if(res){alert('Items has already Added to Cart')}
      else{
        setCartItem(prev => [...prev,{...item,qty:1}])
      }
    }  
    const handleModal=(item)=>{
      console.log(item)
        setIsItemList(item)
       onOpen()
   }
  return (
    <>
    {WishItem?.length===0?(<div
    className='flex flex-col items-center justify-center mt-10  text-red-500'>
    <span className='text-2xl'> No Item Added to WishList</span>
      
<button onClick={()=>navigate('/')} className='px-3 py-2 bg-red-700 text-white text-md mt-4 border border-gray-200'>Return to Home</button>
    </div>):(
        <>
      
   <div className='flex justify-between items-center mb-16 mt-24 w-[90vw] relative left-[50%] translate-x-[-50%]'>  
        <div className='flex space-x-2 items-center text-black text-xl font-medium'>
    <span>WishList</span>
    <p>({WishItem?.length})</p>
   </div>
   <button onClick={()=>navigate('/AllProducts')} className='px-3 py-2 bg-red-700 text-white text-md border border-gray-200'>Return to Home</button> 
    </div>
        <div className='flex flex-wrap gap-3 mt-7 items-center w-[90vw] relative left-[50%] translate-x-[-50%] '>
    {WishItem?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[160px] h-[300px] md:w-[330px] md:h-[380px]' >
     <Card.Img variant="top" src={item.img} className='min-h-[150px] md:h-[200px] object-cover p-1'
     onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2 md:pt-4' style={{borderTop:'1px solid lightgray'}}>
        <Card.Title className='text-sm mb-0 md:text-xl font-medium  md:font-semibold'>{item.name}</Card.Title>
        <Card.Text style={{color:'red',fontSize:'17px',fontWeight:'bold'}}>
          ${item.price}
        </Card.Text> 
        
        <div className='text-2xl md:text-3xl cursor-pointer text-white absolute top-5 right-5'
         onClick={()=>RemoveItemsToWish(item)}><MdDeleteForever /></div>
      </Card.Body>
   <button className='bg-red-500 text-md w-ful text-white
   py-2' onClick={()=>handleWishList(item)}>Add to Cart</button>   
    </Card>
        </div>     
    ))}
    </div>
        
   <div className='flex justify-between items-center mb-16 mt-24 w-[90vw] relative left-[50%] translate-x-[-50%]'>
   <div className='flex space-x-3 items-center'>
    <span className='w-[15px] h-[50px] bg-red-500'></span>
    <p className='text-black text-xl font-medium'>JUST FOR YOU</p>
   </div>
   <button onClick={()=>navigate('/AllProducts')} className='px-3 py-2 bg-red-700 text-white text-md border border-gray-200'>SEE ALL</button> 
    </div> 
    <div className='flex flex-wrap  gap-2 items-center w-[90vw] relative left-[50%] translate-x-[-50%] '>
    {data?.slice(19,23)?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[160px] h-[300px] md:w-[330px] md:h-[380px]' >
     <Card.Img variant="top" src={item.img} className='h-[150px] md:h-[200px] object-cover p-1'
     onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2 md:pt-4' style={{borderTop:'1px solid lightgray'}}>
        <Card.Title className='text-sm mb-0 md:text-xl font-medium  md:font-semibold'>{item.name}</Card.Title>
        <Card.Text style={{color:'red',fontSize:'17px',fontWeight:'bold'}}>
          ${item.price}
        </Card.Text> 
        
        <div className='text-2xl md:text-3xl cursor-pointer text-white absolute top-5 right-5'
         onClick={()=>RemoveItemsToWish(item)}><MdDeleteForever /></div>
      </Card.Body>
   <button className='bg-red-500 text-md w-ful text-white
   py-2' onClick={()=>handleWishList(item)}>Add to Cart</button>   
    </Card>
    
        </div>     
        
    ))}  </div>


  </>

    )}
     <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList?.id} price={ItemList?.price} title={ItemList?.name} img={ItemList?.img} />
   
</>
  )

}

export default WishList
