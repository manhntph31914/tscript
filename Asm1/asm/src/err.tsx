import React from 'react'
import Header from './components/err/Header'
import Footer from './components/err/footer'
import Content from './components/err/Content'

type Props = {}

const Err = (props: Props) => {
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

export default Err