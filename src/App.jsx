import {Routes,Route} from 'react-router-dom'

          //Pages...........
import Home from './Components/Home/Home'
import Header from './Components/Home/Header'
import Login from './Components/Authentication/Login'
import Footer from './Components/Footer/Footer'
import NewSale from './ProductsImages/NewSale.jsx'
import AllProducts from './ProductsImages/AllProducts.jsx'
import Computer, { Camera, HeadPhone, Phone, SmartWatch,Gaming, 
  PlayingStation, Perfume,SpeakerCollection } from './ProductsImages/Computers.jsx'
import WomenFashion, { Baby, Electronics, Groceries, Medicine, MenFashion, Sports,
   } from './ProductsImages/SideBarFashion.jsx' 
import CartPage from './ProductsImages/CartPage.jsx'
import WishList from './ProductsImages/WishList.jsx'
import ErrorPage from './ProductsImages/ErrorPage.jsx'
import Sidebar from './Components/Home/Sidebar.jsx'
import BuyNow from './ProductsImages/BuyNow.jsx'
import InputSearched from './ProductsImages/InputSearched.jsx'

function App() {

  return (
      
      <>  
      <Header />
      <Sidebar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/authentication' element={<Login />} />
      <Route path='/NewSale' element={<NewSale />} />
      <Route path='/AllProducts' element={<AllProducts />} />
      <Route path='/Phones' element={<Phone />} />
      <Route path='/Computers' element={<Computer />} />
      <Route path='/SmartWatch' element={<SmartWatch />} />
      <Route path='/Headphones' element={<HeadPhone />} />
      <Route path='/Camera' element={<Camera />} />
      <Route path='/Gaming' element={<Gaming />} />
      <Route path='/PlayingStation' element={<PlayingStation />} />
      <Route path='/PerfumeCollection' element={<Perfume />} />
      <Route path='/Speakers' element={<SpeakerCollection />} />
      <Route path='/WomenFashion' element={<WomenFashion />} />
      <Route path='/MenFashion' element={<MenFashion />} />
      <Route path='/Electronics' element={<Electronics />} />
      <Route path='/Medicine' element={<Medicine />} />
      <Route path='/Sports' element={<Sports />} />
      <Route path='/Baby' element={<Baby />} />
      <Route path='/Groceries' element={<Groceries />} />
      <Route path='/CartItems' element={<CartPage />} />
      <Route path='/WishItems' element={<WishList />} />
      <Route path='error' element={<ErrorPage />} />
      <Route path='/BuyNow' element={<BuyNow />} />
      <Route path='/:Searchvalue'element={<InputSearched />} />
    </Routes>
    <Footer />
    </>
  
    
  )
}

export default App
