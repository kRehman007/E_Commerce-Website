import React,{useState,useEffect} from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs'
import { useEcomContext } from '../Context/ContextAPI'
import { useDisclosure } from '@chakra-ui/react'
import CustomModal from '../Context/Modal'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const WomenFashion = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemList,setIsItemList]=useState('')
    const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
    const [data,setData]=useState([])
  
    const handleWish=(item)=>{
      setIsWish(prev=>({
        ...prev, 
        [item.id]:!prev[item.id]
      }))
      }
    useEffect(()=>{
      const getData=async()=>{
       const FlashData=await GetDocumentData()
       
       setData(FlashData?.images.filter(item => item.category.includes('Women')))
      }
      getData() 
      },[])
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
      
      <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} title={ItemList?.name} img={ItemList?.img}
      price={ItemList?.price} />
      </>
    )
  }
  
export default WomenFashion

export const MenFashion = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemList,setIsItemList]=useState('')
    const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
    const [data,setData]=useState([])
  
    const handleWish=(item)=>{
      setIsWish(prev=>({
        ...prev, 
        [item.id]:!prev[item.id]
      }))
      }
    useEffect(()=>{
      const getData=async()=>{
       const FlashData=await GetDocumentData()
       
       setData(FlashData?.images.filter(item => item.category.includes('Men')))
      }
      getData() 
      },[])
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
      
      <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} title={ItemList?.name} img={ItemList?.img}
      price={ItemList?.price} />
      </>
    )
  }

  export const Electronics = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemList,setIsItemList]=useState('')
    const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
    const [data,setData]=useState([])
  
    const handleWish=(item)=>{
      setIsWish(prev=>({
        ...prev, 
        [item.id]:!prev[item.id]
      }))
      }
    useEffect(()=>{
      const getData=async()=>{
       const FlashData=await GetDocumentData()
       
       setData(FlashData?.images.filter(item => item.category.includes('Electronics')))
      }
      getData() 
      },[])
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
      
      <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} title={ItemList?.name} img={ItemList?.img}
      price={ItemList?.price} />
      </>
    )
  }

  export const Medicine = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemList,setIsItemList]=useState('')
    const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
    const [data,setData]=useState([])
  
    const handleWish=(item)=>{
      setIsWish(prev=>({
        ...prev, 
        [item.id]:!prev[item.id]
      }))
      }
    useEffect(()=>{
      const getData=async()=>{
       const FlashData=await GetDocumentData()
       
       setData(FlashData?.images.filter(item => item.category.includes('Medicine')))
      }
      getData() 
      },[])
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
      
      <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} title={ItemList?.name} img={ItemList?.img}
      price={ItemList?.price} />
      </>
    )
  }

  export const Sports = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemList,setIsItemList]=useState('')
    const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
    const [data,setData]=useState([])

  const handleWish=(item)=>{
      setIsWish(prev=>({
        ...prev, 
        [item.id]:!prev[item.id]
      }))
      }
    useEffect(()=>{
      const getData=async()=>{
       const FlashData=await GetDocumentData()
       
       setData(FlashData?.images.filter(item => item.category.includes('Sports')))
      }
      getData() 
      },[])
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
      
      <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} title={ItemList?.name} img={ItemList?.img}
      price={ItemList?.price} />
      </>
    )
  }

  export const Baby = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemList,setIsItemList]=useState('')
    const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
    const [data,setData]=useState([])
  
    const handleWish=(item)=>{
      setIsWish(prev=>({
        ...prev, 
        [item.id]:!prev[item.id]
      }))
      }
    useEffect(()=>{
      const getData=async()=>{
       const FlashData=await GetDocumentData()
       
       setData(FlashData?.images.filter(item => item.category.includes('Toys')))
      }
      getData() 
      },[])
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
      
      <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} title={ItemList?.name} img={ItemList?.img}
      price={ItemList?.price} />
      </>
    )
  }

  export const Groceries = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ItemList,setIsItemList]=useState('')
    const {GetDocumentData,isWish,setIsWish,AddItemsToWish,RemoveItemsToWish}=useEcomContext()
    const [data,setData]=useState([])
  
    const handleWish=(item)=>{
      setIsWish(prev=>({
        ...prev, 
        [item.id]:!prev[item.id]
      }))
      }
    useEffect(()=>{
      const getData=async()=>{
       const FlashData=await GetDocumentData()
       setData(FlashData?.images.filter(item => item.category.includes('Grocery')))
      }
      getData() 
      },[])
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
      
      <CustomModal isOpen={isOpen} onClose={onClose} id={ItemList.id} title={ItemList?.name} img={ItemList?.img}
      price={ItemList?.price} />
      </>
    )
  }
