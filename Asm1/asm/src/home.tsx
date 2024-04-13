import { Route,Routes } from 'react-router-dom'
import './css/style.css'
import './App.css'
import Header from './components/home/Header'
import Product from './components/home/Product'
import Footer from './components/home/footer'

function Home() {
 
  return (
    <>
    <div className="title">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    </div>

    <div className="container"> 
      <Header/>
      <Product/>
      
    </div>
    <Footer/>
    
      
    </>
  )
}

export default Home
