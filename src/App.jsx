import Main from './components/main/Main';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/cards/Cards';
import TopWrapper from './components/topBar/TopWrapper';
import './App.css'
import { useEffect, useState } from 'react';
import Badge from './components/badge/Badge';
import Quote from './components/quote/Quote';
import Shopping from './components/shopping/Shopping';
import useProductStore from './components/shoppingStore/store';
import Background from './components/bg-animation/Background';
import Modal from './components/cartModal/Modal';
import Footer from './components/footer/Footer';
function App() {
  const { fetchAllProducts, modal } = useProductStore();


useEffect(()=> {
  const fetchP =  async () => {
fetchAllProducts()
  };
 fetchP()

      AOS.init();
   
}, [])

  const [open, setOpen] = useState(false)
  const showTopWrapper = show => {
  setOpen(show);
}

  return (
    <div className='container mx-auto '>
      <TopWrapper open={open}/>
      <Background />
      <Main showTop={showTopWrapper}/>
      {modal && <Modal />}
      <Badge />
      <Cards />
      <Quote />
      <Shopping />
      <Footer />
    </div>
  )
}

export default App
