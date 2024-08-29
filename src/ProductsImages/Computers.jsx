import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegHeart } from 'react-icons/fa';  
import { BsHeartFill } from 'react-icons/bs';            
import CustomModal from '../Context/Modal';
import { useDisclosure } from '@chakra-ui/react';
import { useEcomContext } from '../Context/ContextAPI';

const Computer = () => {
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images.filter(item => item.category.includes('Computer')))
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
          console.log(item.img)
            setIsItemList(item)
           onOpen()
       }
  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
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
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}

export default Computer


export const Phone = () => {
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images.filter(item => item.category.includes('Mobile')))
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
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
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
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}

export const SmartWatch = () => {
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images.filter(item => item.category.includes('SmartWatch')))
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
      console.log(item)
            setIsItemList(item)
           onOpen()
       }
  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
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
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}

export const HeadPhone=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images.filter(item => item.category.includes('HeadPhone')))
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
      console.log(item)
            setIsItemList(item)
           onOpen()
       }
  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
          ${item.price}
        </Card.Text>
        
        <div className='text-2xl md:text-3xl cursor-pointer  absolute top-5 right-5'
         onClick={()=>handleWish(item)}>
       {isWish[item.id]?<BsHeartFill className='text-red-600' 
       onClick={()=>RemoveItemsToWish(item)}/>: <FaRegHeart 
       className='text-white' onClick={()=>AddItemsToWish(item)}/>}</div>  
      </Card.Body>
    </Card>
        </div>
    ))}  
    </div>
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}

export const Camera=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     setData(FlashData?.images.filter(item => item.category.includes('Camera')))
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
      console.log(item)
            setIsItemList(item)
           onOpen()
       }
  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
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
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}

export const Gaming=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images.filter(item => item.category.includes('Game')))
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
          console.log(item.img)
            setIsItemList(item)
           onOpen()
       }
  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
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
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}

export const PlayingStation=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images.filter(item => item.category.includes('Playing')))
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
          console.log(item.img)
            setIsItemList(item)
           onOpen()
       }
  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
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
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}

export const Perfume=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images.filter(item => item.category.includes('Perfume')))
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
          console.log(item.img)
            setIsItemList(item)
           onOpen()
       }
  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
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
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}

export const SpeakerCollection=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ItemList,setIsItemList]=useState('')
  const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     const FlashData=await GetDocumentData()
     
     setData(FlashData?.images.filter(item => item.category.includes('Perfume')))
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
          console.log(item.img)
            setIsItemList(item)
           onOpen()
       }
  return (
    <>
    <div className='flex flex-wrap items-center justify-center mt-5 gap-3 pt-2   '>
    {data?.map((item,index)=>(
    <div  key={index}>
    <Card className='w-[150px] h-[200px] md:w-[260px] md:h-[300px]' >
      <Card.Img variant="top" src={item.img} className='h-[100px] md:h-[200px] object-cover
      cursor-pointer' onClick={()=>handleModal(item)} />
      <Card.Body className='pt-2'>
        <Card.Title className='text-sm mb-0 md:text-xl font-semibold'>{item.name}</Card.Title>
        <Card.Text className='text-red-700 font-medium'>
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
    
    <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} price={ItemList.price} title={ItemList?.name} img={ItemList?.img} />
    </>
  )
}
