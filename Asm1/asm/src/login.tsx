import React from 'react'
import Header from './components/login/Header'
import Footer from './components/login/footer'
import Content from './components/login/Content'
import './css/login.css'
type Props = {}

const Login = (props: Props) => {
  return (
    <div>
        <div className="title">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    </div>
        <div className="container">
            <Header/>
            <Content/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Login