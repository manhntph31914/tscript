import React from 'react'
import Header from './components/del/Header'
import Footer from './components/del/footer'
import Content from './components/del/Content'

type Props = {}

const Del = (props: Props) => {
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

export default Del